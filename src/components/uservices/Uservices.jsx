import React from 'react'
import homee from '../../assets/images/homee.jpg'

import image1 from '../../assets/images/image1.jpg';


import image2 from '../../assets/images/image2.jpg';

import image3 from '../../assets/images/image3.jpg';

import image5 from '../../assets/images/image5.jpg';

import image4 from '../../assets/images/image4.jpg';
import image6 from '../../assets/images/image6.jpg';





const Uservices = () => {
  return (
    <div className='w-full'>
    <hr/>
    <h1 className='font-bold text-white text-2xl text-center px-3 pb-4 pt-10'>Transforming Ideas into Reality with Quality Services</h1>


    <div className='grid grid-cols-2 grid-rows-3 px-5 py-3  md:grid-cols-5 md:grid-rows-3'>

    <div className='bg-green-300 w-36 flex flex-col justify-center items-center mb-4'>
        <img className='w-20 h-20 pt-2'
        style={{
            animation: 'moveX 2s infinite'
        }} src={image1} alt="Error" />
        <p className='flex text-center p-2 text-1xl'>Color Changing</p>
       </div>


       <div className='bg-green-300 w-36 flex flex-col justify-center items-center mb-4'>
        <img className='w-20 h-20 pt-2'
        style={{
            animation: 'moveX 2s infinite'
        }} src={image2} alt="Error" />
        <p className='flex text-center p-2 text-1xl'>Color Changing</p>
       </div>





       <div className='bg-green-300 w-36 flex flex-col justify-center items-center mb-4'>
        <img className='w-20 h-20 pt-2'
        style={{
            animation: 'moveX 2s infinite'
        }} src={image3} alt="Error" />
        <p className='flex text-center p-2 text-1xl'>Color Changing</p>
       </div>

       <div className='bg-green-300 w-36 flex flex-col justify-center items-center mb-4'>
        <img className='w-20 h-20 pt-2'
        style={{
            animation: 'moveX 2s infinite'
        }} src={image4} alt="Error" />
        <p className='flex text-center p-2 text-1xl'>Color Changing</p>
       </div>

       <div className='bg-green-300 w-36 flex flex-col justify-center items-center mb-4'>
        <img className='w-20 h-20 pt-2'
        style={{
            animation: 'moveX 2s infinite'
        }} src={image5} alt="Error" />
        <p className='flex text-center p-2 text-1xl'>Color Changing</p>
       </div>

       <div className='bg-green-300 w-36 flex flex-col justify-center items-center mb-4'>
        <img className='w-20 h-20 pt-2'
        style={{
            animation: 'moveX 2s infinite'
        }} src={image6} alt="Error" />
        <p className='flex text-center p-2 text-1xl'>Color Changing</p>
       </div>

       <div className='bg-green-300 w-36 flex flex-col justify-center items-center mb-4'>
        <img className='w-20 h-20 pt-2'
        style={{
            animation: 'moveX 2s infinite'
        }} src={homee} alt="Error" />
        <p className='flex text-center p-2 text-1xl'>Color Changing</p>
       </div>
    </div>
    </div>
  )
}

export default Uservices
