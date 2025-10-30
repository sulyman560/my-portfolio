import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const About = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[10%] py-2 scroll-mt-20 mt-4'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Introduction
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>About me
            </motion.h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center justify-center gap-10 mt-5'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='sm:w-80 rounded-3xl max-w-none'

                >
                    <Image src={assets.profile3} alt="user" className='w-full rounded-3xl border border-gray-200' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className='mb-4 max-w-3xl font-Ovo'>
                        I am a Professional MERN full stack frontend & backend web developer. I am Sincere, Honest, Hardworking, self-motivated and reasonably presentable person having positive attitude towards working with good interpersonal relations with different nationals and religions.
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:shadow-black hover:-translate-y-1 duration-500 dark:border-white 
                        dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Image src={isDarkMode ? iconDark : icon} className='w-7 mt-3' alt='title' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                            </motion.li>
                        ))

                        }
                    </motion.ul>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use
                    </motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                key={index} className='flex items-center justify-center w-12 sm:w-14 aspaect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 p-2'>
                                <Image src={tool} className='w-5 sm:w-7' alt='title' />

                            </motion.li>
                        ))

                        }
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
