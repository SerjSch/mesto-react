function PopupWithForm(props) {

  const {isOpen, onClose} = props;

  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`} > 
    <div className="popup__window">
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        
        <form className={`popup__form popup__form_${props.name}`} onSubmit={props.onSubmit}>
                 {props.children} {/*будет передаваться вложенное содержимое в виде JSX-разметки, отличающейся для всех четырёх попапов */}
                <button type="submit" className="popup__save-button">{props.forSubmit}</button>
        </form>
    </div>
</div>

  );
}
export default PopupWithForm;


    // <div>
    //   <div className="popup popup_profilePopup">
    //     <div className="popup__window">
    //       <button type="button" className="popup__close-button"></button>
    //       <h3 className="popup__title">Редактировать профиль</h3>
    //       <form className="popup__form popup__form_profile">
    //         <input id="user_name" type="text" autocomplete="off" className="popup__input popup__input_name_name" name="name" minlength="2" maxlength="30" required="" placeholder="Имя" value="..." />
    //         <span id="user_name-error" className="error"></span>
    //         <input id="about" type="text" autocomplete="off" className="popup__input popup__input_name_discription" name="discription" required="" minlength="2" maxlength="60" placeholder="О себе" value="..." />
    //         <span id="about-error" className="error"></span>
    //         <button type="submit" className="popup__save-button">Сохранить</button>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="popup popup_newplace">
    //     <div className="popup__window popup__window_newplace">
    //       <button type="button" className="popup__close-button popup__close-button_newplace"></button>
    //       <h3 className="popup__title popup__title_newplace">Новое место </h3>
    //       <form className="popup__form popup__form_newplace">
    //         <input id="name-card" type="text" autocomplete="off" minlength="3" maxlength="30" required="" className="popup__input popup__input_name_place" name="name" value="" placeholder="Название" novalidate="" />
    //         <span id="name-card-error" className="error"></span>
    //         <input id="link" required="" autocomplete="off" type="url" className="popup__input popup__input_name_url" name="link" placeholder="Ссылка на картинку" value="" />
    //         <span id="link-error" className="error"></span>
    //         <button type="submit" className="popup__save-button popup__save-button-newplace">Создать</button>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="popup popup_avatar">
    //     <div className=" popup__window">
    //       <button type="button" className="popup__close-button"></button>
    //       <h3 className="popup__title popup__title-avatar">Обновить аватар</h3>
    //       <form className="popup__form popup__form_avatar">
    //         <input id="link-avatar" required="" autocomplete="off" type="url" className="popup__input popup__input_name_url" name="link" placeholder="Ссылка на аватар" value="" />
    //         <span id="link-avatar-error" className="error"></span>
    //         <button type="submit " className="popup__save-button">Сохранить</button>
    //       </form>
    //     </div>
    //   </div>

    //   <div className="popup popup_delConfirm">
    //     <div className="popup__window">
    //       <button type="button" className="popup__close-button"></button>
    //       <h3 className="popup__title-avatar">Вы уверены?</h3>
    //       <form className="popup__form">
    //         <div className="popup__zoom-window">
    //           <button type="click" className="popup__save-button">Да</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>