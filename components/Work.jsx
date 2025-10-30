import { assets, serviceData, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'>My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='mb-12 text-center mx-auto mt-5 max-w-2xl font-Ovo'>
        welcome to my portfolio section. Here are some of my recent projects that showcase my skills and expertise in web development and design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='grid grid-cols-auto my-10 gap-5'>
        {
          workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index} className='aspact-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group w-60 h-60'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold text-black'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspact-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-line-300 transition p-2'>
                  <Image src={assets.send_icon} className='w-5' alt='' />


                </div>
              </div>

            </motion.div>
          ))
        }
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="" className='w-max duration-500 mx-auto flex items-center justify-center text-gray-700 
        border-[0.5px] border-gray-700 rounded-full y-3 px-10 my-10 py-3 bg-transparent text-black hover:bg-black hover:text-white 
        transition dark:border-white dark:text-white dark:hover:bg-darkHover/50'>
        Show more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='right-arrow' className='w-4 ml-2' />
      </motion.a>

    </motion.div>
  )
}

export default Work
