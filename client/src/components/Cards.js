import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
  return (
    <div className="cards">
      <h1> Check out these DELECTABLE dishes! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="images/img-12.jpg"
                text="These are the tastiest things you will ever try"
                label='Dessert'
                path='/recipes'/>
                <CardItem 
                src="images/OIP (8).jpg"
                text="Fun for the entire family!"
                label='Dinner'
                path='/recipes'/>
            </ul>
            <ul className="cards__items">
                <CardItem 
                src="https://th.bing.com/th/id/OIP.VJheVPW-C9sgHDbv1uOX4QHaFn?w=235&h=180&c=7&r=0&o=5&pid=1.7"
                text="WARNING: You wont be able to stop eating!"
                label='Lunch'
                path='/recipes'/>
                <CardItem 
                src="images/R (8).jpg"
                text="Easy to make,        
                hard to put down"
                label='$2.99'
                path='/recipes'/>
                  <CardItem 
                src="images/Simple-Strawberry-Banana-Oat-Smoothie4.jpg"
                text="The only drink you'll ever need!"
                label=''
                path='/recipes'/>
            </ul>
            <ul className="cards__items"> 
            <CardItem 
                src="images/Simple-Strawberry-Banana-Oat-Smoothie4.jpg"
                text="The only drink you'll ever need!"
                label='Drinks'
                path='/recipes'/>

<CardItem 
                src="images/R (8).jpg"
                text="Easy to make,        
                hard to put down"
                label='Breakfast'
                path='/recipes'/>



            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards