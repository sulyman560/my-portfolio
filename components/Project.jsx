import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { assets } from '@/assets/assets'


const Project = ({ isDarkMode }) => {
    return (
        <div id='project1' className='w-full px-[10%] py-2 scroll-mt-20 mt-4'>
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

            <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-10 mt-5'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='sm:w-80 rounded-3xl max-w-none'

                >
                    <Image src={assets.greencart} alt="user" className='w-full rounded-3xl border border-gray-200' />
                </motion.div>
                <div>

                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        className='text-3xl font-Ovo mb-5 font-semibold'>GreenCart
                    </motion.h3>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='flex items-center justify-center gap-3 sm:gap-5 lg:gap-8 mb-5'>
                        <li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 
                        aspaect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 p-2'>Mongoose</li>
                        <li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 
                        aspaect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 p-2'>Express</li>
                        <li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 
                        aspaect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 p-2'>React</li>
                        <li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 
                        aspaect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 p-2'>node.js</li>

                    </motion.ul>


                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.05, duration: 1 }}
                        className='text-center mx-auto mt-2 max-w-2xl font-Ovo'>
                        Here are the main functions of the GreenCart eCommerce website 👇
                        Product Listing – Displays products with images, names, and prices.Add to Cart – Allows users to add selected items to their shopping cart.Cart Management – Users can increase, decrease, or remove items from the cart.Checkout System – Lets users confirm their order (may be demo-based).Responsive Design – Works smoothly on both mobile and desktop devices.
                    </motion.p>
                    <div className='flex sm:flex-col lg:flex-row items-start gap-10'>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            href="" className='bg-red-600 items-center justify-center text-white y-3 px-8 py-3 hover:bg-red-700 hover:text-white transition'>
                            View Github
                        </motion.a>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            href="" className='flex items-center gap-2 justify-center text-gray-700 border-[0.5px] 
                                            border-gray-700 rounded-full y-3 px-10 py-3 transition dark:text-white dark:border-white'>
                            View Project <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='right-arrow' className='w-4' />
                        </motion.a>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Project
