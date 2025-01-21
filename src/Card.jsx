import React, {useState} from 'react';
import cakeCard from './assets/CakeCard.jpg';
import biryaniCard from './assets/biryani2.jpg';
import curryCard from './assets/Curry.jpg';
import dessertCard from './assets/Dessert.jpeg';
import dosaCard from './assets/dosa.jpg';
import fishNirvana from './assets/fishnirvana.jpg';
import fishNirvanaRecipe from './assets/fishnirvanaRecipe.png';
import honeyCake from './assets/honeycake.jpeg';
import chickenLoli from './assets/chickenLoli.png';
import chickenBiryani from './assets/biryani2.jpg';

function Card(){

    return(
    <>
      <div className="card">
      <img className="cakepicture" src={cakeCard} alt="Cake Photo"></img>
      <h2>CAKES</h2>
      </div>


      <div className="cardBir">
      <img className="biryanipicture" src={biryaniCard} alt="Biryani Photo"></img>
      <h2>BIRYANI</h2>
      </div>
      

      <div className="cardCurry">
      <img className="curryPicture" src={curryCard} alt="Curry Photo"></img>
      <h2>CURRY</h2>
      </div>

      <div className="cardDessert">
      <img className="dessertPicture" src={dessertCard} alt="Dessert Photo"></img>
      <h2>DESSERTS</h2>
      </div>

      <div className="cardDosa">
      <img className="dosaPicture" src={dosaCard} alt="Dosa Picture"></img>
      <h2>DOSA</h2>
      </div>

      <div className="Picks">
      <h2>Amma's Picks</h2>
      </div>

      <div className="Picks1">
        <img  className="fishNirvana" src={fishNirvana} alt="Fish Nirvana Photo"></img>
        <h2>Fish Nirvana</h2>
      </div>

      <div className="Picks2">
        <img className="honeyCake" src={honeyCake} alt="Honey Cake Photo"></img>
        <h2>Honey Cake</h2>
      </div>

      <div className="Picks3">
        <img className="chickenLolipop" src={chickenLoli} alt="Chicken Photo"></img>
        <h2>Chicken Lolipop</h2>
      </div>

      <div className="Picks4">
        <img className="chickenBiryani" src={chickenBiryani} alt="Chicken Biryani Photo"></img>
        <h2>Chicken Biryani</h2>
      </div>


      

      
      
    </>
        
    )

}

export default Card;