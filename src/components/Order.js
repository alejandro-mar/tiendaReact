import React, { Component } from 'react'
import { FaTrashCan } from "react-icons/fa6";


export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <div className='contenedor-carro-prod-img'><img src={this.props.item.imgProd} alt={this.props.item.titulo}></img> </div>
         <div className='contenedor-carro-texto'><h2>{this.props.item.titulo}</h2>
         <div className='contenedor-carro-precio'><b>{this.props.item.precio}</b> <FaTrashCan onClick={()=> this.props.onDelete(this.props.item.id)} className='delete-icon'></FaTrashCan></div>
        

         </div>
        
      
        


      </div>
    )
  }
}

export default Order