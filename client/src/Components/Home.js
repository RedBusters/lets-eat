import axios from 'axios'
import { useState, useEffect } from 'react'

function Home(props)
{
    const[articles,setArticles]=useState([]);
    const[ArticleThumbnail,setArticleThumbnail]=useState([]);
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
<div className='main'>Main Dishes</div>
<div className='desserts'>Desserts</div>
<div className='drinks'>Drinks</div>
<div className='appetizers'>Appettizers</div>
</nav>
</div>

<div className='homeArticle'>
{articles.map( (x) => <ArticleThumbnail key={x.id} {...x} />
            )}
    
    </div>
    </div>
)
}
export default Home;