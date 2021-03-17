import React from 'react';
//import api from "../utils/Api.js";
import Card from "./Card.jsx";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

    const curentUser = React.useContext(CurrentUserContext);
    


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar-foto"  style={{ backgroundImage: `url(${curentUser.avatar})` }}>
                        {/* <img className="profile__avatar-foto" src="<%=require('./images/kusto.jpg')%>" alt="Фотография"/> */}
                        <button className="profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title">
                            <h1 className="profile__name">{curentUser.name}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__discription">{curentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__addbutton" onClick={props.onAddPlace}></button>
            </section>

            <section className="photo-grid">
                <ul className="photo-grid__list">
                {props.cards.map((card) => (
                    <Card 
                    card={card} 
                    key={card._id} 
                    onCardClick={props.onCardClick} 
                    onCardLike={props.onCardLike}
                    onDeleteCard={props.onDeleteCard} />
                    ))}
                </ul>
            </section>

            {/* <!-- Шаблон карточки с фото --> */}
    {/* <template className="fotocards ">
          <li className="photo-grid__item-fotocard">
              <img className="photo-grid__item" src="#" alt="#" />
              <button type="button " className="photo-grid__trash-bin"></button>
              <div className="photo-grid__foto-discription">
                  <h2 className="photo-grid__place-name "></h2>
                  <div className="photo-grid__likes-container">
                  <button type="button " className="photo-grid__heart"></button>
                  <p className="photo-grid__like-counter"></p>
                </div>
              </div>
          </li>
      </template> */}
        </main>
    );
}

export default Main;