import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";




class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    orders :  [], 

    currentItems : [], 


    items : [
      {

        id : 1 , 
        titulo: "Estantería con caja, pino", 
        desc: "Es posible separar las piezas para su reciclaje o para recuperación energética (si existe esa posibilidad en tu zona).", 
        categoria : "muebles", 
        precio : "49.99 €", 
        imgProd : "/img/productos/caja.webp", 
        cantidad : 1, 
      }, 

      {

        id : 2 , 
        titulo: "Cesta, junco marino", 
        desc: "Muy práctica para guardar periódicos, fotos o recuerdos.", 
        categoria : "muebles", 
        precio : "19.99 €", 
        imgProd : "/img/productos/caseta.webp",
        cantidad : 1, 
        
      }, 


      {

        id : 3 , 
        titulo: "Cojín silla de exterior", 
        desc: "El color se mantiene como nuevo durante mucho tiempo, porque la tela no destiñe.", 
        categoria : "cojines", 
        precio : "9.99 €", 
        imgProd : "/img/productos/cojin.avif",
        cantidad : 1, 
      }, 


      {

        id : 4 , 
        titulo: "Lámpara de pie solar LED", 
        desc: "Es fácil de usar, ya que no se necesitan cables ni enchufes..", 
        categoria : "lamparas", 
        precio : "14.99 €", 
        imgProd : "/img/productos/lampara.avif"
        ,
        cantidad : 1, 
      }, 



      {

        id : 5 , 
        titulo: "Lámpara techo solar LED", 
        desc: "Es fácil de usar, ya que no se necesitan cables ni enchufes.", 
        categoria : "lampars", 
        precio : "49.99 €", 
        imgProd : "/img/productos/lampara_techo.avif"
        ,
        cantidad : 1, 
      }, 

      {

        id : 6 , 
        titulo: "Silla jardín, verde", 
        desc: "La silla viene premontada para que puedas empezar a usarla enseguida.", 
        categoria : "muebles", 
        precio : "19.99 €", 
        imgProd : "/img/productos/silla.avif"
        ,
        cantidad : 1, 
      }, 


    

    ], 
    showFullItem : false, 
    fullItem: {

    }
  }
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
  
  
  

}

  render(){
    
  return(
<div className="wrapper" >
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder}></Header>
      <Categories chooseCategory={this.chooseCategory}></Categories>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}></Items>


      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item = {this.state.fullItem}/>}

      <Footer></Footer>

    
    </div>
  )

  } 

  onShowItem (item) {
    this.setState({fullItem : item})
    this.setState({
      showFullItem : !this.state.showFullItem
    })
  }

  chooseCategory(category) {
    if(category === "all"){
      this.setState({currentItems : this.state.items})
      return
    }

    this.setState({
      currentItems : this.state.items.filter(el => el.categoria === category)
    })
  }

  deleteOrder(id) {

 this.setState({orders: this.state.orders.filter(el => el.id !== id)})

 
  }
    addToOrder(item) {

      let isInArray = false

      this.state.orders.forEach(el => {
     
        if(el.id === item.id){
          isInArray = true

         
        
    
        }
      })
      if (!isInArray){
        this.setState({orders: [...this.state.orders, item]})
      }
    
      
    }

}

export default App;
