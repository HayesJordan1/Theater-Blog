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

  
    <div className="menu__container">
        <div className="row">
        { dinner || all?    <>  <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Almondmilk Pasta</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://feastingisfun.com/wp-content/uploads/2017/05/IMG_2315.jpg" />  
                <p className="menu-item-text"> Try or specialty Almondmilk Pasta it is sure to make you feel happy inside!</p>  </div> </> : null }
        { dinner || all?   <>  <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Pepporoni Pizza</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://th.bing.com/th/id/OIP.VJheVPW-C9sgHDbv1uOX4QHaFn?pid=ImgDet&rs=1" />  
                <p className="menu-item-text"> This pizza is cheesy and the Pepporoni adds a nice kick of spice you are garunteed to enjoy it</p>  </div> </>  : null }
                { lunch || all? <> <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Ham & Cheese Crepes</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://diethood.com/wp-content/uploads/2021/01/chicken-noodle-soup-9.jpg" />  
                <p className="menu-item-text"> This soup will give you the nostalgic memories of childhood</p>  </div> </> : null } 
             </div>
        { breakfast || all?   <> <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Nutella Crepes</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://th.bing.com/th/id/R.e258f224bb1ad8a8518a652631f335da?rik=y9fe7lAUzg6m9g&riu=http%3a%2f%2fdeliciouslyyum.com%2fwp-content%2fuploads%2f2014%2f05%2fnutella-banana-crepes-3.jpg&ehk=RRyxOyvWLB3LhukMBwq6hv%2fFwRsA8NRwoj4OKIwfrK0%3d&risl=&pid=ImgRaw&r=0" />  
                <p className="menu-item-text"> These crepes are made with fresh fruit, choclate, and a whole lot of love</p>  </div> </> : null }
                
                { dinner || all?   <>  <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Margherita Pizza</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3.jpg" />  
                <p className="menu-item-text"> Fancy pizza<br></br>Fancy People</p>  </div> </>  : null }
        { drinks || all? 
                <>  <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Martinelli Apple Juice</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_fca339dc-1843-4222-ab65-2492f671a5de.png" />  
                <p className="menu-item-text"> Try  our partner Martinelli's Apples' Thirst-quenching apple juice </p>  </div> </> : null }
                { drinks || all? 
                <>  <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Strawberry Banana Oat Smoothie</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="images/Simple-Strawberry-Banana-Oat-Smoothie4.jpg" />  
                <p className="menu-item-text"> This smoothie has all the right stuff inside to keep you healthy while also tasting delicious</p>  </div> </> : null }
        { lunch || all? <> <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Ham & Cheese Crepes</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://www.oliviascuisine.com/wp-content/uploads/2017/10/savory-crepes-hollandeise-sauce.jpg" />  
                <p className="menu-item-text"> These savory crepes are sure to leave a warm and fuzzy feeling in your stomach</p>  </div> </> : null }
                
         { dessert || all?   <>  <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Wedding Cake</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://d1hpn7r5i0azx7.cloudfront.net/wp-content/uploads/2015/06/chandelier-cake.bmp-001.jpg" />  
                <p className="menu-item-text"> Our unique wedding cakes are sure to make your night a night to remember</p>  </div> </> : null }
                { dessert || all?    <>  <div className="menu-items"> <div className="menu-top"> <h1 className="menu-item-title"> Birthday Cake</h1> <h1 className="menu-item-price">3.99</h1> </div><img
        className="menu-item-image"  src="https://cdn.diys.com/wp-content/uploads/2018/11/Black-and-purple-geode-and-gem-cake.jpg" />  
                <p className="menu-item-text"> Make today be about you <br></br> not about baking a cake</p>  </div> </> : null }
   </div>
    </>
    )
}