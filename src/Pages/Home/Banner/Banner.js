import React from 'react';
import book1 from '../../../assets/banner/book-1.jpeg'
import book2 from '../../../assets/banner/book-2.jpg'
import book3 from '../../../assets/banner/book-3.jpg'
import book4 from '../../../assets/banner/book-4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={book1} className="w-full" alt='' srcSet='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                    <h1 className='lg:text-4xl text-2xl text-white '>
                        Enjoy reading books <br />
                        by reseller program with<br />
                        <span className='lg:text-6xl text-3xl text-pink-400 font-bold lg:leading-relaxed leading-relaxed'>Lovin Book Store</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={book2} className="w-full" alt='' srcSet='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                    <h1 className='lg:text-4xl text-2xl text-white '>
                        Enjoy reading books <br />
                        by reseller program with<br />
                        <span className='lg:text-6xl text-3xl text-pink-400 font-bold lg:leading-relaxed leading-relaxed'>Lovin Book Store</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={book3} className="w-full" alt='' srcSet='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                    <h1 className='lg:text-4xl text-2xl text-white '>
                        Enjoy reading books <br />
                        by reseller program with<br />
                        <span className='lg:text-6xl text-3xl text-pink-400 font-bold lg:leading-relaxed leading-relaxed'>Lovin Book Store</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={book4} className="w-full" alt='' srcSet='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                    <h1 className='lg:text-4xl text-2xl text-white '>
                        Enjoy reading books <br />
                        by reseller program with<br />
                        <span className='lg:text-6xl text-3xl text-pink-400 font-bold lg:leading-relaxed leading-relaxed'>Lovin Book Store</span>
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;