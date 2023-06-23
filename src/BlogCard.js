import React from "react";
import { Card } from "@canonical/react-components";

const BlogCard = (props) => {
    const article = props.article;

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', { month: 'long' });
      }

    function capitalizeFirstLowercaseRest(str) {
        return (
            str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        );
    };

    function getArticleCategory(data) {
        if (data[2].length > 0) {
            return (data[2][0]?.name)
        } else {
            return (data[1][0]?.name)
        }
    }

    function getCardClassname() {
        const res = getArticleCategory(article?._embedded['wp:term']).toLowerCase();
        if (res === "people and culture") {
            return "card-pnc"
        } else if (res === "canonical announcements") {
            return "card-announce";
        } else {
            return "card-default";
        }
    }
      
      
    return (
        <Card className={getCardClassname()} highlighted='true' >
        
            <div style={{minHeight: '400px'}}>
                <p class="p-text--small-caps">
                    {getArticleCategory(article?._embedded['wp:term']).toUpperCase()}                
                </p>
                
                <hr style={{backgroundColor: 'transparent', borderBottom: 'dotted 1px #D9D9D9'}}/>
                <p class="p-heading--4">
                    <img src={article?.featured_media} alt="content 1"/>
                    <a href={article?.link}>{article?.title?.rendered}</a>
                </p>

                <p class="p-heading--6">
                    <i>By <a href={article?._embedded.author[0].link}> {article?._embedded.author[0]?.name} </a>
                        on {article?._start_day} {getMonthName(article?._start_month)} {article?._start_year}</i>
                </p>
            </div>
            <hr style={{backgroundColor: 'transparent', borderBottom: 'dotted 1px #D9D9D9'}}/>            
            <p>{capitalizeFirstLowercaseRest(article?.type)}</p>
        </Card>
    )
}

export default BlogCard;