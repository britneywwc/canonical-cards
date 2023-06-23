import React, { useEffect, useState } from 'react';
import { Row, Col } from '@canonical/react-components';
import BlogCard from './BlogCard';


const Page = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch ("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json");
            const newData = await response.json();
            setArticles(newData);
        };
        fetchData();
    }, []);
    
    return (
        <div style={{margin: '5%'}}>        
            {console.log(articles)}
            <Row > 
                {articles.map((article) => 
                    <Col small={10} medium={3} size={4} key={article.id}>
                        <BlogCard article={article}/>
                    </Col>
                )}                    
            </Row>
        </div>
    );
}


export default Page;