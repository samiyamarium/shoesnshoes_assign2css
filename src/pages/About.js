import React from 'react';
import './App.css';
import i1 from './i1.jfif';
import i2 from './i2.jfif';import i3 from './i3.jfif';import i4 from './i4.jfif';import i5 from './i5.jfif';

import i6 from './i6.jfif';
import i7 from './i7.jfif';
import i8 from './i8.jfif';
import i9 from './i9.jfif';
import i10 from './i10.jfif';
const About=()=>{
    return(
        <div>
            <div className='back'><b className='back'>ABOUT</b></div>
            <div className='back' ><p><b><i className='hom'>'Shoesnshoes',as the name implies, is a dedicated online business for shoes deals!!We are facilitating our customers by offering all varieties i.e.formal/casual/party/comfort/orthopaedic under one roof for all ages and group..<br/><br/>Come and grab your choice!!<br/><br/>Below is given the sample list of some of our collection..<br/><br/> we will be launching our complete collection soon, so stay connected ..</i></b></p></div>
             <div className='d'><div class="out"><div class="in"><img src={i1} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$100</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i2} alt="shoes"/><p className='d1'><b>New Arrival <br/><br/>$80</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i3} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$40</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i4} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$90</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i5} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$130</b><br/><br/>5%  Discount for first 50
             customers</p></div></div></div>
             <div className='d'><div class="out"><div class="in"><img src={i6} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$100</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i7} alt="shoes"/><p className='d1'><b>New Arrival <br/><br/>$80</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i8} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$40</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i9} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$90</b><br/><br/>5%  Discount for first 50
             customers</p></div></div><div class="out"><div class="in"><img src={i10} alt="shoes"/><p className='d1'><b>New Arrival<br/><br/>$130</b><br/><br/>5%  Discount for first 50
             customers</p></div></div></div>
        </div>
    )

}
export default About;