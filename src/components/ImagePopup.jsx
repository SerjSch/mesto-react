import React from 'react';

function ImagePopup(props) {
  const { isOpen, onClose } = props;
  return (
    <div className={`popup popup_image-zoom ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__zoom-window">
        <img className="popup__big-foto" src={props.card.link} alt={props.card.name} />
        <button type="button" className="popup__close-button popup__close-button_zoom" onClick={props.onClose}></button>
        <h2 className="popup__place-name popup__place-name_zoom">{props.card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;