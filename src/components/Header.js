import React, { useState } from 'react'
import { FaBagShopping } from "react-icons/fa6";
import Order from './Order';


const showOrders = (props) => {
 let summa = 0
  props.orders.forEach(element => {
    console.log(element)
    summa += Number.parseFloat(element.precio)
  });

  return(
    <div>
      {props.orders.map(el => (
            <Order onDelete = {props.onDelete} key={el.id} item={el}></Order>
          ))}

          <p className='suma'> Total: {new Intl.NumberFormat().format(summa)}€ </p>
          
    </div>
  )
} 


const showNothing = () => {

  return ( 
    <div className='empty'>
      <h2>
      La cesta está vacía 
      </h2>
    </div>
  )
}

export default function Header(props) {

 
let [carroOpen, setCarroOpen] = useState(false)






  return (
  <header>
   
   <div id='contenedor-nav' >
    <span className='logo'> Cositas para tu hogar </span>

    <div id='contenedor-botones-nav'>
    <span className='boton-nav'> Sobre nosotros </span>
    <span className='boton-nav'> Contacto </span>
    <span className='boton-nav'> Cabinet </span>
    <div className='carro-boton contenedor-carro-boton'>  <FaBagShopping onClick={() => setCarroOpen(carroOpen = !carroOpen)} className={`carro-boton ${carroOpen && "active" }`}></FaBagShopping>
    <div>{ `(${props.orders.length })` }</div>
     </div>
    
 

    {carroOpen && (
        <div className='carro-contenedor'>
          {props.orders.length > 0 ?
          showOrders(props) : showNothing() }
        </div>
    )}
    </div>

    
   
   </div>
   <div id='logo-contenedor'>
    <div className='text-logo-contenedor'>
        <h1 className=''> Detalles que dan ganas de quedarse </h1>
        <p></p>
    </div>

   <div className='imagen-contenedor-logo'> 
   <img src="/img/logo.jpg" alt="..."></img>
   </div>

   </div>
  

  </header>
   
  )
}
