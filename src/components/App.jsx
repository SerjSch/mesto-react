import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function App() {

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
    

    // function handleEditAvatarClick() {
    //     document.querySelector('.popup_avatar').classList.add('popup_opened');
    // };
    // function handleEditProfileClick() {
    //     document.querySelector('.popup_profilePopup').classList.add('popup_opened');
    // }
    // function handleAddPlaceClick() {
    //     document.querySelector('.popup_newplace').classList.add('popup_opened');
    // }
    
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
                  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
                <Footer />

            {/* ПОПАП ПРОФИЛЬ */}
            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" forSubmit="Сохранить">
            <input id="user_name" type="text" className="popup__input popup__input_name_name" name="name" minLength="2" maxLength="30" required="" placeholder="Имя"/>
            <span id="user_name-error" className="error"></span>
            <input id="about" type="text" className="popup__input popup__input_name_discription" name="discription" required="" minLength="2" maxLength="60" placeholder="О себе"/>
            <span id="about-error" className="error"></span>
            </PopupWithForm>

            {/* ПОПАП НОВОЕ МЕСТО */}
            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" forSubmit="Создать">
                <input id="name-card" type="text" minLength="3" maxLength="30" required="" className="popup__input popup__input_name_place" name="name" placeholder="Название" noValidate="" />
                <span id="name-card-error" className="error"></span>
                <input id="link" required="" type="url" className="popup__input popup__input_name_url" name="link" placeholder="Ссылка на картинку"/>
                <span id="link-error" className="error"></span>
            </PopupWithForm>

            {/* ПОПАП АВАТАР */}
            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" forSubmit="Сохранить">
                <input id="link-avatar" required="" type="url" className="popup__input popup__input_name_url" name="link" placeholder="Ссылка на аватар" />
                <span id="link-avatar-error" className="error"></span>
            </PopupWithForm>
            <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups}/>
                
            </div>
        </div>
    );
}
export default App;