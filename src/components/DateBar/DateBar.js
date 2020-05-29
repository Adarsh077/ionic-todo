import React, { Component } from "react";
import { IonSlides, IonSlide } from "@ionic/react";
import DateButton from "./DateButton";

const slideOptions = {
  slidesPerView: 4.1,
  spaceBetween: 5,
  initialSlide: 4,
  centeredSlides: true,
  centeredSlidesBounds: true,
};

class DateBar extends Component {
  render() {
    return (
      <div className="animate__animated animate__fadeInDown">
        <IonSlides options={slideOptions}>
          <IonSlide>
            <DateButton />
          </IonSlide>
          <IonSlide>
            <DateButton />
          </IonSlide>
          <IonSlide>
            <DateButton />
          </IonSlide>
          <IonSlide>
            <DateButton />
          </IonSlide>
          <IonSlide>
            <DateButton isActive />
          </IonSlide>
          <IonSlide>
            <DateButton />
          </IonSlide>
          <IonSlide>
            <DateButton />
          </IonSlide>
        </IonSlides>
      </div>
    );
  }
}

export default DateBar;
