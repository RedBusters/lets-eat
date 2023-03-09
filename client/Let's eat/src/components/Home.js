import axios from 'axios'
import { useState, useEffect } from 'react'

function Home(props)
{
    const[articles,setArticles]=useState([])
    async function getArticles()
    {
        const articles = (await axios.get('http://localhost:8000/articles')).data
        setArticles(articles)
        console.log(articles)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
getArticles()
}, []);

  
return (
    <div className='home'>
        <h2>Let's Eat</h2>
        
<div>
    <nav>
<p>Main Dishes</p>
<p>Desserts</p>
<p>Drinks</p>
<p>Appettizers</p>
</nav>
</div>

<div>
{articles.map( (x) => <ArticleThumbnail key={x.id} {...x} />
            )}
    
    </div>
    </div>
)
}
export default Home;