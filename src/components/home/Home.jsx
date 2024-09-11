import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import home from '../../assets/images/homeee.png'



const Home = () => {
  return (
   <section>
     <div className='w-full px-5 text-white pt-28'>
        <p className='font-bold text-2xl pb-4'>Home</p>
        <div className=' flex flex-col md:flex-row items-center md:w-full'>

            {/* content  */}
            <div className='space-y-5 md:w-2/3'>
                <h1 className='font-bold font-serif text-white'>
                    <span className='text-yellow-400'> Plants</span> make a <br/> Positive <span className='text-yellow-400'>impact</span> on <br/> your enviroment
                </h1>
                <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam fugiat, cumque corporis voluptate modi vitae suscipit blanditiis placeat recusandae accusamus officia laborum delectus excepturi pariatur error impedit doloribus eveniet.</p>
                {/* <div className='flex gap-9 flex-row md:flex-row'>
                    <button>Ubaid</button>
                    <button>Tabassum</button>
                </div> */}
                <p className='font-bold'>you will get 30-days free Trial</p>
                <div className='flex'>
                    <ul className='flex gap-5'>
                        <li><FacebookIcon/></li>
                        <li><TwitterIcon/></li>
                        <li><InstagramIcon/></li>
                        <li><LinkedInIcon/></li>
                    </ul>
                </div>

            </div>


            {/* image  */}
            <div className='md:w-2/3 flex items-center justify-center py-10'>
                <img className='w-60 h-60 rounded-3xl z-0 ' src={home} alt="error"
                style={{
                    animation: 'moveY 2s ease-in-out infinite '
                }}
               
                />
            </div>
    

        </div>
     </div>

   </section>
  )
}

export default Home
