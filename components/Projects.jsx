import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale } from "motion/react"

const Projects = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='project' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='flex flex-col items-center gap-5'>
                <h2 className='text-center text-5xl font-Ovo'>Projects</h2>
                <div className='w-0.5 h-16 bg-black mt-2 dark:bg-white'></div>
            </motion.div>
            {/* Project 1 */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center justify-between gap-20 my-10'>

                <div className='flex-1'>
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
                        className='flex items-center gap-3 mb-5'>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Mongoose</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Express</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>React</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>node.js</motion.li>

                    </motion.ul>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.05, duration: 1 }}
                        className='mb-10 max-w-2xl font-Ovo p-4'>
                        Here are the main functions of the GreenCart eCommerce website 👇
                        Product Listing – Displays products with images, names, and prices.Add to Cart – Allows users to add selected items to their shopping cart.Cart Management – Users can increase, decrease, or remove items from the cart.Checkout System – Lets users confirm their order (may be demo-based).Responsive Design – Works smoothly on both mobile and desktop devices.
                    </motion.p>
                    <div className='flex gap-5'>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            href="" className='w-max flex bg-red-600 items-center gap-2 justify-center text-white y-3 px-10 py-3 hover:bg-red-700 hover:text-white transition'>
                            View Github
                        </motion.a>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            href="" className='w-max flex items-center gap-2 justify-center text-gray-700 border-[0.5px] 
                        border-gray-700 rounded-full y-3 px-10 py-3 transition dark:text-white dark:border-white'>
                            View Project <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='right-arrow' className='w-4' />
                        </motion.a>
                    </div>


                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-full sm:w-[40%] md:w-[60%] rounded-3xl max-w-none'>
                    <Image src={assets.greencart} alt="user" className='w-full rounded-3xl border border-gray-200' />
                </motion.div>
            </motion.div>
            <motion.hr
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className='border-gray-400'
            />
            {/* Project 2 */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center justify-between gap-20 my-10 mt-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-full sm:w-[40%] md:w-[60%] rounded-3xl max-w-none'>
                    <Image src={assets.pingup} alt="user" className='w-full rounded-3xl border border-gray-200' />
                </motion.div>
                <div className='flex-1'>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        className='text-3xl font-Ovo mb-5 font-semibold'>PingUp (Social media App)</motion.h3>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='flex items-center gap-3 mb-5'>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Mongoose</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Express</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>React</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>node.js</motion.li>

                    </motion.ul>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.05, duration: 1 }}
                        className='mb-10 max-w-2xl font-Ovo'>
                        Main Functions / Work of the Site
                        Wine Listing / Catalog – Users can see a collection of wines, often with images, names, and details.
                        Wine Details – Clicking a wine likely shows more info: description, price, origin, or rating.
                        Search / Filter (if available) – Users might filter wines by type, region, or rating.
                        Add to Favorites / Wishlist – Some apps allow saving preferred wines (though might be demo-only).
                        Responsive UI – Works well on mobile and desktop, clean modern interface.
                    </motion.p>
                    <div className='flex gap-5'>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            href="https://github.com/sulyman560/PingUp" className='w-max flex bg-red-600 items-center gap-2 justify-center text-white y-3 px-10 py-3 hover:bg-red-700 hover:text-white transition'>
                            View Github
                        </motion.a>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            href="https://ping-up-wine.vercel.app " className='w-max flex items-center gap-2 justify-center 
                            text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 py-3 transition dark:text-white dark:border-white'>
                            View Project <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='right-arrow' className='w-4' />
                        </motion.a>
                    </div>


                </div>

            </motion.div>
            <motion.hr
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className='border-gray-400'
            />
            {/* Project 3 */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center justify-between gap-20 my-10 mt-20'>

                <div className='flex-1'>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        className='text-3xl font-Ovo mb-5 font-semibold'>GoCart</motion.h3>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='flex items-center gap-3 mb-5'>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Mongoose</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Express</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>React</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>node.js</motion.li>

                    </motion.ul>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.05, duration: 1 }}
                        className='mb-10 max-w-2xl font-Ovo'>
                        It is an eCommerce website with the following main functions:
                        Product Listing: Displays a variety of products.
                        Add to Cart: Users can add selected products to their shopping cart.
                        Cart Management: Users can increase, decrease, or remove items from the cart
                        Checkout System: Allows users to confirm their orders (may be demo-based).
                        Responsive Design: Works smoothly on both mobile and desktop devices.
                    </motion.p>
                    <div className='flex gap-5'>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            href="https://github.com/sulyman560/gocart" className='w-max flex bg-red-600 items-center gap-2 justify-center text-white y-3 px-10 py-3 hover:bg-red-700 hover:text-white transition'>
                            View Github
                        </motion.a>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            href="https://gocart-ten-sigma.vercel.app " className='w-max flex items-center gap-2 justify-center 
                        text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 py-3 transition dark:text-white dark:border-white'>
                            View Project <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='right-arrow' className='w-4' />
                        </motion.a>
                    </div>


                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-full sm:w-[40%] md:w-[60%] rounded-3xl max-w-none'>
                    <Image src={assets.gocart} alt="user" className='w-full rounded-3xl border border-gray-200' />
                </motion.div>
            </motion.div>
            <motion.hr
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className='border-gray-400'
            />
            {/* Project 4 */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center justify-between gap-20 my-10 mt-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-full sm:w-[40%] md:w-[60%] rounded-3xl max-w-none'>
                    <Image src={assets.food_del} alt="user" className='w-full rounded-3xl border border-gray-200' />
                </motion.div>
                <div className='flex-1'>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        className='text-3xl font-Ovo mb-5 font-semibold'>Food-Del</motion.h3>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='flex items-center gap-3 mb-5'>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Mongoose</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>Express</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>React</motion.li>
                        <motion.li className='w-max bg-gray-700 text-white text-md flex items-center justify-between md:w-14 lg:w-24 xl:w-28 aspaect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 p-2'>node.js</motion.li>

                    </motion.ul>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.05, duration: 1 }}
                        className='mb-10 max-w-2xl font-Ovo'>
                        It is a food delivery website with the following main functions:
                        Menu Display: Shows a list of available food items.
                        Order Placement: Users can select and order their favorite food.
                        User Interaction: Provides easy navigation for a smooth user experience.
                    </motion.p>
                    <div className='flex gap-5'>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            href="https://github.com/sulyman560/food-del" className='w-max flex bg-red-600 items-center gap-2 justify-center text-white y-3 px-10 py-3 hover:bg-red-700 hover:text-white transition'>
                            View Github
                        </motion.a>
                        <motion.a
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            href="https://food-del-frontend1-5l6a.onrender.com" className='w-max flex items-center 
                        gap-2 justify-center text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 py-3 transition
                         dark:text-white dark:border-white'>
                            View Project <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='right-arrow' className='w-4' />
                        </motion.a>
                    </div>


                </div>

            </motion.div>

        </motion.div>
    )
}

export default Projects
