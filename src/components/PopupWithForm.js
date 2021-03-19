function PopupWithForm(props) {
  const { isOpen, onClose } = props;
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