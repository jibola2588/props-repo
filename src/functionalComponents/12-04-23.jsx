import React,{useState,useEffect} from 'react';


const Counter = () => {
    const [count ,handleCount ] = useState(9) 
    useEffect(() => {
        console.log('component just mounted ' + count );
        document.title = count;
        const emma =  setInterval(() => {
            updateCount()
        }, 1000);

        return () => { 
          clearInterval(emma)
        }
    },[]) 



    const updateCount = () => { 
        handleCount(c => c + 1)
    }

//   console.log(updateCount())
  return (
    <div>
       <h3>count -- {count}</h3>
       {/* <button
         onClick = { () => handleCount( prev => prev + 1 )}
       >+</button>
       <button
          onClick = { () => handleCount( prev => prev - 1 )}
       >-</button>
       <button
           onClick = { () => handleCount(prev => prev = 9)}
       >*</button> */}
    </div>
  );
}

export default Counter;
