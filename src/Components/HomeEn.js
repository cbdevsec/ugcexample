import React from 'react'
import Navbar from './Navbar'
import './styles.css'
import photo1 from './../assets/photo1.png'
import {AiFillInstagram, AiFillTikTok, AiFillMail} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import vid1 from './../assets/videos/vid1.mp4'
import vid2 from './../assets/videos/vid2.mp4'
import vid3 from './../assets/videos/vid3.mp4'
import photo2 from './../assets/photo2.png'
import { useEffect, useState } from "react";
import Footer from './Footer'

function HomeEn() {
    function useIsMobile(breakpoint = 640) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
    );

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= breakpoint);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
    }
    const isMobile = useIsMobile()
  return (
    <>
    <Navbar/>
    {isMobile ? (
    <div className='home-mobile'>
        <div className='hero-mobile'>
            <div className='hero-img-mobile'><img src={photo1}/></div>
            <div className='hero-title-mobile'>
                <h2>UGC Creator</h2>
                <h1>Creator Name</h1>
                <div className='socials'>
                    <Link to='https://www.instagram.com'><h1><AiFillInstagram/></h1></Link> <Link to='https://www.gmail.com'><h1><AiFillMail/></h1></Link> <Link to='https://www.tiktok.com'><h1><AiFillTikTok/></h1></Link>
                </div>
            </div>
        </div>
        <div className='desc-mobile'>
            <div className='desc-img-mobile'>
                <img src={photo2} />
            </div>
            <div className='desc-text-mobile'>
                <p>Hi! I’m [Your Name], a <b>UGC (User-Generated Content) creator</b> passionate about helping brands connect with <b>real people</b> through <b>authentic</b>, scroll-stopping content.<br/> <br/>I specialize in creating <b>short-form videos</b> that feel native to <b>TikTok, Reels, and YouTube Shorts</b> — whether it’s unboxings, voiceovers, aesthetic product showcases, or relatable storytelling.</p>
            </div>
        </div>

        

        <div className='videos-mobile'>
            <video controls="controls" autoplay="true" src={vid1}/>
            <video controls="controls" autoplay="true" src={vid2}/>
            <video controls="controls" autoplay="true" src={vid3}/>
        </div>
    </div>
    ) : (
    <div className='home'>
        <div className='hero'>
            <div className='hero-img'><img src={photo1}/></div>
            <div className='hero-title'>
                <h2>UGC Creator</h2>
                <h1>Creator Name</h1>
                <div className='socials'>
                    <Link to='https://www.instagram.com'><h1><AiFillInstagram/></h1></Link> <Link to='https://www.gmail.com'><h1><AiFillMail/></h1></Link> <Link to='https://www.tiktok.com'><h1><AiFillTikTok/></h1></Link>
                </div>
            </div>
        </div>
        <div className='desc'>
            <div className='desc-img'>
                <img src={photo2} />
            </div>
            <div className='desc-text'>
                <p>Hi! I’m [Your Name], a <b>UGC (User-Generated Content) creator</b> passionate about helping brands connect with <b>real people</b> through <b>authentic</b>, scroll-stopping content.<br/> <br/>I specialize in creating <b>short-form videos</b> that feel native to <b>TikTok, Reels, and YouTube Shorts</b> — whether it’s unboxings, voiceovers, aesthetic product showcases, or relatable storytelling.</p>
            </div>
        </div>

        

        <div className='videos'>
            <video controls="controls" autoplay="true" src={vid1}/>
            <video controls="controls" autoplay="true" src={vid2}/>
            <video controls="controls" autoplay="true" src={vid3}/>
        </div>
    </div>
    )}
    <Footer/>
    </>
  )
}

export default HomeEn