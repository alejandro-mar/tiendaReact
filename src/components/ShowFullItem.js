import React, { Component } from 'react'
import { FaCartArrowDown } from "react-icons/fa6";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'onClick={()=> this.props.onShowItem(this.props.item)} >

<div> <div  className='contenedor-prod-img'><img onClick={()=> this.props.onShowItem(this.props.item)} src={this.props.item.imgProd} alt={this.props.item.titulo}></img> </div>
            <h2>{this.props.item.titulo}</h2>
            <p>{this.props.item.desc}</p>
         <div className='contenedor-precio'><b>{this.props.item.precio}</b> <div onClick={()=> this.props.onAdd(this.props.item)} className='to-carro'><FaCartArrowDown></FaCartArrowDown></div> </div>
        
        </div>


        
      </div>
    )
  }
}

export default ShowFullItem