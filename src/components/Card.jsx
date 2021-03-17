import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
    `photo-grid__trash-bin ${isOwn ? '' : 'photo-grid__trash-bin_hidden'}`
    );
    
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `photo-grid__heart ${isLiked ? 'photo-grid__heart_liked' : ''}`
    );

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onDeleteCard(props.card)
    }

    return (
        <li className="photo-grid__item-fotocard">
                <img className="photo-grid__item" 
                    src={props.card.link} 
                    alt={props.card.text} 
                    onClick={() => {
                        props.onCardClick(props.card);
                    }} />
                <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}/>
                <div className="photo-grid__foto-discription">
                    <h2 className="photo-grid__place-name">{props.card.name}</h2>
                    <div className="photo-grid__likes-container">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                        <p className="photo-grid__like-counter">{props.card.likes.length}</p>
                    </div>
                </div>
            </li>
    );
  }
  
export default Card; 

// export default class Card {
//     constructor({
//             data,
//             liked,
//             owned,
//             handleCardClick,
//             handleLikeClick,
//             handleDelClick
//         },
//         cardTemplate) {
//         this._name = data.name;
//         this._link = data.link;
//         this._handleCardClick = handleCardClick;
//         this._cardTemplate = cardTemplate;
//         //////////////////
//         this._likes = data.likes;
//         this._cardId = data._id;
//         this.owned = owned;
//         this._liked = liked;
//         this._handleLikeClick = handleLikeClick;
//         this.handleDelClick = handleDelClick;
//     }

//     getCardId() {
//         return this._cardId;
//     }
//     getCardLiked() {
//         return this._liked
//     }

//     _getTemplate() {
//         // забираем размеку из HTML и клонируем элемент
//         const cardElement = this._cardTemplate.querySelector('.photo-grid__item-fotocard')
//             .cloneNode(true);
//         // вернём DOM-элемент карточки
//         return cardElement;
//     }

//     createCard() {
//         this._cardElementemplate = this._getTemplate();
//         this._photoGridItem = this._cardElementemplate.querySelector(".photo-grid__item")
//         this._cardElementemplate.querySelector(".photo-grid__place-name").textContent = this._name;
//         ////////
//         this._likeCount = this._cardElementemplate.querySelector(".photo-grid__like-counter");
//         this._likeCount.textContent = this._likes.length;
//         ////
//         this._photoGridHeart = this._cardElementemplate.querySelector('.photo-grid__heart')
//         this._photoGridTrashBin = this._cardElementemplate.querySelector('.photo-grid__trash-bin')
//             /////
//         this._photoGridItem.src = this._link;
//         this._photoGridItem.alt = this._name;
//         this._setEventListeners();
//         this._toggleCardLiked()
//         if (!this.owned) {
//             this._photoGridTrashBin.style.display = "none";
//         }
//         return this._cardElementemplate;
//     }

//     counterOfLikes = (arr, liked) => {
//         this._liked = liked;
//         this._toggleCardLiked()
//         this._likes = arr;
//         this._likeCount.textContent = this._likes.length;
//     }


//     _toggleCardLiked = () => {
//         if (this._liked) {
//             this._photoGridHeart.classList.add("photo-grid__heart_liked");
//         } else {
//             this._photoGridHeart.classList.remove("photo-grid__heart_liked");
//         }
//     }

//     delCard = () => {
//         this._cardElementemplate.remove();
//         this._cardElementemplate = null;
//     }

//     _cardLiked = () => {
//         this._handleLikeClick(this);
//     }
//     _cardZoom = () => {
//         this._handleCardClick({ name: this._name, link: this._link });
//     }

//     _setEventListeners() {
//         this._photoGridHeart.addEventListener('click', () => {
//             this._cardLiked();
//         });
//         this._photoGridTrashBin.addEventListener('click', () => {
//             this.handleDelClick(this);
//         });
//         this._photoGridItem.addEventListener('click', () => {
//             this._cardZoom();
//         });
//     }
// }