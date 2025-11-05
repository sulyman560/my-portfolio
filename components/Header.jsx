import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2'>
      <motion.div className='mt-20'
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile} className='w-32 rounded-full' alt='' />

      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi!I'm Sulyman Ahammed
        <Image src={assets.hand_icon} className='w-6' alt='' />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[60px] font-Ovo'>
        frontend web developer & Designer based in Bangladesh
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'>
        I create modern and responsive websites that help businesses establish a strong online presence and engage their target audience effectively.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1}}
          href="#contact" className='px-10 py-3 border border-white rounded-full bg-black/90 text-white flex 
          items-center gap-2 hover:bg-black hover:bg-black transition duration-500 dark:bg-transparent'>
          Contact me <Image src={assets.right_arrow_white}
            className='w-4' alt='' /></motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Web_Dev Resume-.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex 
          items-center gap-2 transition dark:bg-white dark:text-black'>my resume <Image src={assets.download_icon} className='w-4' alt='' />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
