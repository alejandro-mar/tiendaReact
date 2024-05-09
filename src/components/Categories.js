import React, { Component } from 'react'

export class Categories extends Component {

    constructor(props) {

        super(props)
        this.state = {
            categories : [ {
                key: "all", 
                name: "Todos"
            }, 

            {
                key: "muebles", 
                name: "Muebles"
            }, 


            {
                key: "cojines", 
                name: "Cojines"
            }, 


            {
                key: "lamparas", 
                name: "Lamparas"
            }, 
        
        
        ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div className='categories-div' key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
         {el.name}
            </div>
        ))}
      </div>
    )
  }
}

export default Categories