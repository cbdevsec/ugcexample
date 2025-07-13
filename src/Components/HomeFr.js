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



function HomeFr() {
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
                <h2>UGC Createur</h2>
                <h1>Nom Createur</h1>
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
                <p>Salut ! Je suis [Votre Nom], une <b>créatrice de contenu UGC (User-Generated Content)</b> passionnée par l’idée d’aider les marques à se connecter avec de <b>vraies personnes</b> grâce à du contenu <b>authentique</b> qui capte l’attention dès les premières secondes.<br/><br/>Je suis spécialisée dans la création de <b>vidéos courtes</b> pensées pour <b>TikTok, Reels et YouTube Shorts</b> — que ce soit des unboxings, des voix off, des présentations esthétiques de produits ou des storytelling engageants.</p>
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
                <h2>UGC Createur</h2>
                <h1>Nom Createur</h1>
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
                <p>Salut ! Je suis [Votre Nom], une <b>créatrice de contenu UGC (User-Generated Content)</b> passionnée par l’idée d’aider les marques à se connecter avec de <b>vraies personnes</b> grâce à du contenu <b>authentique</b> qui capte l’attention dès les premières secondes.<br/><br/>Je suis spécialisée dans la création de <b>vidéos courtes</b> pensées pour <b>TikTok, Reels et YouTube Shorts</b> — que ce soit des unboxings, des voix off, des présentations esthétiques de produits ou des storytelling engageants.</p>
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

export default HomeFr