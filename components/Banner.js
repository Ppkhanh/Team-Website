import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Card, Button, CardImg, Col } from 'react-bootstrap';


export default function Banner() {
    return (
<div className=" mb-5">
        <Card className="h-50 m-auto text-white border-0">
      <img className="banner-img rounded-0" src="uni.png" alt="Card image" />
      <div class="overlay-div"></div> 
      <Card.ImgOverlay className="d-flex align-items-center">
        <div>
          <h1 className="banner-heading text-center fs-1 p-5 pb-2" >HELLO WORLD, DAS SIND WIR</h1>
          <Card.Text className="banner-text text-center p-5 pt-0">
        <h6> Im Rahmen des Capstone-Projektes der Universität zu Köln arbeiten wir in unserer Gruppe an einem Softwareprojekt für den realen Einsatz in Zusammenarbeit mit diversen Kunden.
          Von Startup bis Großkonzern ist alles vertreten. Wir unterstützen das Unternehmen ______________ bei der Umsetzung von _________________. 
        </h6> 
          </Card.Text>
          <Card.Text></Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
    </div>

    )
}