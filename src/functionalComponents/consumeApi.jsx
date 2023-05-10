import React from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts'

const ConsumeApi = () => {
    const [posts,setposts] = React.useState([])
    const {error,setError} = React.useState('')

   

    React.useEffect(() => { 
 
        const getPosts = async () => { 
            const res = await fetch(url);
            const data =  await res.json();
            setposts(data?.splice(0,10));
    }
           getPosts()

    },[])

  return ( 
      <div className='flex items-center flex-wrap justify-between h-screen'>
        { posts.length === 0 ?
         <p className='text-xl text-center mt-4'>loading ... </p> 
         : posts.length ? 
         <div> 
               { posts?.map(post => ( 
                <div className='border border-grey-300 shadow-sm p-4  mx-auto my-4 w-80 h-100'>
                     <h3>{post.title} </h3>
                     <h6>{post.body} </h6>
                </div>
               ))}
         </div>  
          : <p className='text-red-600'> {error} </p> 
        }
      </div>
  )

  
}

export default ConsumeApi