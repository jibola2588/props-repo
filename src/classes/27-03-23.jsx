import {Component} from 'react'


export default class Counter extends Component{
    constructor(){ 
        super()
        this.state = { 
           count : 0
        } 
    }
    componentDidMount(){
        setInterval(() => { 
            this.updateTime()
        },1000)
    }
    componentWillUpdate(){ 
       document.title = this.state.count
    }
    componentWillUnmount(){ 
        document.title = 0
    }
    
    updateTime(){
        this.setState({ 
           count : this.state.count +1
        })
    }
    render(){ 
        return ( 
         <>
           <p>component A</p>
              <p>count -- {this.state.count} </p>
         </>
        )
    }
}
