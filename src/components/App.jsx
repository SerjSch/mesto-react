import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import api from "../utils/Api.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';

function App() {

    const curentUser = React.useContext(CurrentUserContext);
    const [currentUser, setUserData] = React.useState({ name: '', about: '', avatar: '' });
    React.useEffect(() => {
        api.getUserData()
            .then((res) => {
                setUserData(res)
            }).catch((err) => {
                console.log('Ошибка в получении данных пользователя: ', err)
            })
    }, [])

    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res)
            }).catch((err) => {
                console.log('Ошибка в получении карточек', err)
            })
    }, [])

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.likeTheCard(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleUpdateUser(userData) {
        api.sendUserInfo(userData)
            .then((res) => {
                setUserData(res);
                closeAllPopups()
            }).catch((err) => {
                console.log('Ошибка при обновление данных пользователя', err)
            })
    }
    function handleUpdateAvatar(userData) {
        api.sendUserAvatar(userData)
        .then((res) => {
            setUserData(res);
            closeAllPopups();
        }).catch((err) => {
            console.log('Ошибка в обновлении аватара', err)
        })
    }

    const [delCard, setDelCard] = React.useState(null);
    function handleCardDelete() {
        api.delCard(delCard._id).then(() => {
            const newCards = cards.filter((c) => c._id !== delCard._id);
            setCards(newCards);
            closeAllPopups()
        }).catch((err) => {
            console.log(err);
        })
    }

    function handleDelClick(card) {
        setDelCard(card)
    }
    /////////////////////////////////////////////////////////////////////////////////////////

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    ////////////////////////////////////////////////////////////////////////////////
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    function handleCardClick(card) {
        setIsImagePopupOpen(true);
        setSelectedCard(card)
    }
    /////////////////////////////////////////////////////////////////////////////////
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__container">
                    <Header />
                    <Main
                        cards={cards}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onDeleteCard={handleDelClick} />
                    <Footer />
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        currentUser={currentUser}
                        onUpdateUser={handleUpdateUser} />
                    <EditAvatarPopup
                    onUpdateAvatar={handleUpdateAvatar} 
                    isOpen={isEditAvatarPopupOpen} 
                    onClose={closeAllPopups} />

                    {/* ПОПАП НОВОЕ МЕСТО */}
                    <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" forSubmit="Создать">
                        <input id="name-card" type="text" minLength="3" maxLength="30" required="" className="popup__input popup__input_name_place" name="name" placeholder="Название" noValidate="" />
                        <span id="name-card-error" className="error"></span>
                        <input id="link" required="" type="url" className="popup__input popup__input_name_url" name="link" placeholder="Ссылка на картинку" />
                        <span id="link-error" className="error"></span>
                    </PopupWithForm>



                    {/* ПОПАП КАРТИНКА */}
                    <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />

                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;


    // function handleEditAvatarClick() {
    //     document.querySelector('.popup_avatar').classList.add('popup_opened');
    // };
    // function handleEditProfileClick() {
    //     document.querySelector('.popup_profilePopup').classList.add('popup_opened');
    // }
    // function handleAddPlaceClick() {
    //     document.querySelector('.popup_newplace').classList.add('popup_opened');
    // }