import NewsItem from './NewsItem'
import Axios from 'axios';
import React, { useState } from 'react'

function News() {
    // let articles = [
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Kathleen Parker",
    //         "title": "Mitt Romney reminds us of what we’ve lost in American politics",
    //         "description": "Romney's criticism of the New York prosecution against Trump is a reminder of how we got here, and how far we have fallen in U.S. politics.",
    //         "url": "https://www.washingtonpost.com/opinions/2023/04/07/romney-trump-indictment-unprecedented-revenge-obama/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BQRG64NI3REYZFS7MW7LV72PXQ.jpg&w=1440",
    //         "publishedAt": "2023-04-07T16:32:33Z",
    //         "content": "Comment on this story\r\nComment\r\nWhen Sen. Mitt Romney stepped up to criticize the criminal case against his arch-nemesis Donald Trump, he reminded us how far weve fallen since the cleanest-cut man in… [+5444 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "independent",
    //             "name": "Independent"
    //         },
    //         "author": "Kate Devlin",
    //         "title": "Labour doubles down with second Sunak attack ad despite accusations of ‘nasty politics’",
    //         "description": "Follows outcry over party’s claims prime minister does not think child sex abusers should go to prison",
    //         "url": "http://www.independent.co.uk/news/uk/politics/labour-sunak-attack-ad-nasty-b2316106.html",
    //         "urlToImage": "https://static.independent.co.uk/2023/04/07/15/FtHcPUhXwAAx7TM.jpeg?quality=75&width=1200&auto=webp",
    //         "publishedAt": "2023-04-07T14:40:16Z",
    //         "content": "Sign up for the View from Westminster email for expert analysis straight to your inbox\r\nGet our free View from Westminster email\r\nLabour has doubled down on its controversial attacks on Rishi Sunak d… [+1517 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "newsweek",
    //             "name": "Newsweek"
    //         },
    //         "author": "Mark Davis",
    //         "title": "Newsweek",
    //         "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
    //         "url": "https://www.newsweek.com/",
    //         "urlToImage": "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
    //         "publishedAt": "2023-03-01T12:07:28.8517009Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-times",
    //             "name": "The Washington Times"
    //         },
    //         "author": "The Washington Times https://www.washingtontimes.com",
    //         "title": "Latest Quizzes",
    //         "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
    //         "url": "https://www.washingtontimes.com/quiz/",
    //         "urlToImage": null,
    //         "publishedAt": "2022-08-30T16:37:43.8583104Z",
    //         "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-american-conservative",
    //             "name": "The American Conservative"
    //         },
    //         "author": null,
    //         "title": "Politics Archives - The American Conservative",
    //         "description": "null",
    //         "url": "https://www.theamericanconservative.com/category/politics/",
    //         "urlToImage": null,
    //         "publishedAt": "2022-07-07T21:37:27.3936289Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-jerusalem-post",
    //             "name": "The Jerusalem Post"
    //         },
    //         "author": null,
    //         "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
    //         "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
    //         "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
    //         "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
    //         "publishedAt": "2019-11-13T04:41:00Z",
    //         "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    //     }
    // ]
    let [articless, setArticless] = useState([]);
    let [heading, setHeading] = useState("Select your desired news");
    let getNews = (url) => {
        Axios.get(url).then((response) => {

            setArticless(response.data.articles);
            console.log("checking", articless);
            console.log("data = ", response.data);
        })
    }

    let handleGeneral = () => {
        getNews("https://newsapi.org/v2/top-headlines?country=in&apiKey=116904c450ef4ed5a4523798a3675738");
        setHeading("General News");
    }

    let handleSports = () => {
        getNews("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=116904c450ef4ed5a4523798a3675738");
        setHeading("Sports News");
    }

    let handleEntertainment = () => {
        getNews("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=116904c450ef4ed5a4523798a3675738");
        setHeading("Entertainment News");
    }

    let handleHealth = () => {
        getNews("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=116904c450ef4ed5a4523798a3675738");
        setHeading("Health News");
    }

    let handleTechnology = () => {
        getNews("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=116904c450ef4ed5a4523798a3675738");
        setHeading("Technology News");
    }

    let handleScience = () => { 
        getNews("https://newsapi.org/v2/top-headlines?category=science&apiKey=116904c450ef4ed5a4523798a3675738");
        setHeading("Science News");
    }

return (
    <div className='container my-2 whole-div'>
        <div className='news-heading'>
            <h2>{heading}</h2>
            <div className='buttons-div'>
            <button className="btn btn-primary newsBtn" onClick={handleGeneral}>General News</button>
            <button className="btn btn-primary newsBtn" onClick={handleSports}>Sports</button>
            <button className="btn btn-primary newsBtn" onClick={handleEntertainment}>Entertainment</button>
            </div>
            <div className='buttons-div'>
            <button className="btn btn-primary newsBtn" onClick={handleHealth}>Health</button>
            <button className="btn btn-primary newsBtn" onClick={handleTechnology}>Technology</button>
            <button className="btn btn-primary newsBtn" onClick={handleScience}>Science</button>
            </div>
        </div>
        <div>
            <div className="row">
                {articless.filter(element => element.urlToImage != null && element.title != null && element.description != null).map((element) => {
                    console.log(articless);
                    let ttitle = element.title !== null ? element.title.slice(0, 45) : "no title";
                    // console.log("ttitle = ", ttitle);
                    let tdesc = element.description != null ? element.description.slice(0, 88) : "- no description -";
                    return (<div className="col-md-4" key={element.url}>
                        <NewsItem title={ttitle} description={tdesc} imgadd={element.urlToImage} newsUrl={element.url} />
                    </div>);
                })}
            </div>
        </div>
    </div>
)
}

export default News
