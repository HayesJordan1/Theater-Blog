import React from "react";
import '../Cards.css';
import { useState } from "react";
import CardItem from "../CardItem";
export default function Recipes () {
    const [breakfast, setBreakfast] = useState(false)
    const [drinks, setDrinks] = useState(false)
    const [lunch, setLunch] = useState(false)
    const [dessert, setDessert] = useState(false)
    const [dinner, setDinner] = useState(false)
    const [all, setAll] = useState(true)

    // const handleAll = setDessert(true) && setLunch(true) && setBreakfast(true) && setDrinks(true) && setDinner(true) 
    // const handleDinner = setDinner(true);
    // const handleLunch = setDessert(false) && setLunch(true) && setBreakfast(false) && setDrinks(false) && setDinner(false) 
    // const handleDessert = setDessert(true) && setLunch(false) && setBreakfast(false) && setDrinks(false) && setDinner(false) 
    // const handleBreakfast = setDessert(false) && setLunch(false) && setBreakfast(true) && setDrinks(false) && setDinner(false) 
    // const handleDrinks = setDessert(false) && setLunch(false) && setBreakfast(false) && setDrinks(true) && setDinner(false) 


    

    return (
    <>
    <div>
    <h1 className='recipes'>Products</h1>
    </div>
    
    <h1 className="title">Cookng Treats</h1>
    <div className="all-menu-buttons">
 
    <button className="menu-buttons" onClick={() => setAll(true)}> All</button>
   
 
    <button className="menu-buttons" onClick={() => [setDinner(true), setDessert(false), setAll(false), setLunch(false), setBreakfast(false), setDrinks(false)]}>Dinner</button>

   
    <button className="menu-buttons" onClick={() => [setDinner(false), setDessert(true), setAll(false), setLunch(false), setBreakfast(false), setDrinks(false)]}>Dessert</button>
 

    <button className="menu-buttons" onClick={() => [setDinner(false), setDessert(false), setAll(false), setLunch(false), setBreakfast(false), setDrinks(true)]}>Drinks</button>
    
    <button className="menu-buttons" onClick={() => [setDinner(false), setDessert(false), setAll(false), setLunch(true), setBreakfast(false), setDrinks(false)]}>Lunch</button>
   
   
    <button  className="menu-buttons" onClick={() => [setDinner(false), setDessert(false), setAll(false), setLunch(false), setBreakfast(true), setDrinks(false)]}>Breakfast</button>
    
    </div>

  
    <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
        { dinner || all?      <CardItem 
                src="images/OIP (8).jpg"
                text="Fun for the entire family!"
                label='Dinner'
                path='/recipes'/> : null }
        { dessert || all?  <CardItem 
                src="images/img-12.jpg"
                text="These are the tastiest things you will ever try"
                label='Dessert'
                path='/recipes'/> : null }
        { breakfast || all?  <CardItem 
                src="images/R (8).jpg"
                text="Easy to make,        
                hard to put down"
                label='Breakfast'
                path='/recipes'/> : null }
                </ul>
                <ul className="cards__items">
        { drinks || all? <CardItem 
                src="images/Simple-Strawberry-Banana-Oat-Smoothie4.jpg"
                text="The only drink you'll ever need!"
                label='Drinks'
                path='/recipes'/> : null }
        { lunch || all?  <CardItem 
                src="images/R (7).jpg"
                text="WARNING: You wont be able to stop eating!"
                label='Lunch'
                path='/recipes'/> : null }
         { lunch || all?  <CardItem 
                src="images/R (7).jpg"
                text="WARNING: You wont be able to stop eating!"
                label='Lunch'
                path='/recipes'/> : null }
                </ul>
                </div>
    </div>
    </>
    )
}