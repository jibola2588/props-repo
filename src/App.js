import React from 'react'
import Practice from './classes/20-03-23'

export default class App extends React.Component{
    render(){
      const data = [
        {
          name:'Nathan',
          age:12,
          gender:'male',
          btn:'nathan',
          bgColor:'green'
        },
        {
          name:'Kennedy',
          age:31,
          gender:'female',
          btn:'kennedy',
          bgColor:'red'
        },
        {
          name:'Peter',
          age:91,
          gender:'male',
          btn:'peter',
          bgColor:'blue'
        },
        {
          name:'Emma',
          age:44,
          gender:'female',
          btn:'emma',
          bgColor:'orange'
        },
      ]

       return(
        <div className='flex flex-wrap gap-4 items-center mt-2'>
          <Practice user={data[0]}/>
          <Practice user={data[1]}/>
          <Practice user={data[2]}/>
          <Practice user={data[3]}/>
        </div>
       )
    }
}

