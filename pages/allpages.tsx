import React from 'react'
import Head from "next/head";
import Link from "next/link"
import { Modal } from '@chakra-ui/react';


function allpages() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        <link
          rel="shortcut icon"
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/favicon.png?v=29818458213238068251642580843"
          type="image/png"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/frame.scss.css?v=26842676914315532001674778629"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/home-sections.scss.css?1650"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/style.css?v=30686512873233263451654235224"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/slick.scss?v=101226323548799392701629637261"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/prettyPhoto.css?v=127577845115257541841629637244"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/animate.css?v=170469424254788653381629637215"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/font-all.min.css?v=145974524023387984911629637225"
          rel="stylesheet"
          type="text/css"
          media="all"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
        />

        <title>DAIG - Online Catering Services In Twin Cities</title>
      </Head>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/favicon.png?v=29818458213238068251642580843"
                    alt="Your Company"
                  />
                </div>
                <div className="md:block">
                  <div className="ml-10 flex flex-wrap items-baseline space-x-4">
                    {/* <a
                      href="/allpages"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page"
                    >
                      Home
                    </a> */}

                    <Link href="/allpages"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page">
                      Home
                    </Link>
                    <Link
                      href="/allpages#RabiulAwal"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Rabi ul Awal
                    </Link>
                    <Link href="/allpages#Muharram"
                      className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                      aria-current="page">
                      Muharram
                    </Link>


                    <Link
                      href="/allpages#Desserts"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Desserts
                    </Link>

                    <Link
                      href="/allpages#Dawat"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dawat
                    </Link>

                    <Link
                      href="/allpages#GiftADawat"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Gift A Dawat
                    </Link>
                    <Link
                      href="/allpages#Sadqa"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sadqa
                    </Link>
                    <Link
                      href="/allpages#Events"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Events
                    </Link>
                    <div className="p-4">
                      <div className="group relative">
                        <button className=" bg-gray-800 z-10 text-white px-6 h-10 rounded">Weddings


                        </button>
                        <nav className="z-10 border border-2 bg-lime-400 invisible border-gray-800 rounded w-42 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                          <ul className="py-1">
                            <li>
                              <Link href="/allpages#Reception" className="block px-4 py-2 hover:bg-gray-100">
                                Reception
                              </Link>
                            </li>
                            <li>
                              <Link href="/allpages#Mehndi" className="block px-4 py-2 hover:bg-gray-100">
                                Mehndi
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                                Intro
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="/40.jpg"
                          alt=""
                        />
                      </button>
                    </div>

                    <div
                      className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="hero"></div>
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <Link
                href="/allpages"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Home
              </Link>

              <Link
                href="/allpages#RabiulAwal"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Rabi ul Awal
              </Link>
              <Link
                href="/allpages#Muharram"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Muharram
              </Link>
              <Link
                href="/allpages#Desserts"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Desserts
              </Link>

              <Link
                href="/allpages#Dawat"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dawat
              </Link>

              <Link
                href="/allpages#GiftADawat"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Gift A Dawat
              </Link>

              <Link
                href="/allpages#Sadqa"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sadqa
              </Link>
              <Link
                href="/allpages#Events"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Events
              </Link>
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/40.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Rana Reebaal
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    rebaalhussain@gmail.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </a>

                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>



        <header className="bg-white shadow">

        </header>

      </div>
      <div id='RabiulAwal'>
        <div id='backRabiulAwal'></div>
      </div>
      <div id='Muharram'>
        <div id='backMuharram'></div>
      </div>
      <div id='Desserts'>
        <div id='backDesserts'></div>
      </div>
      <div id='Dawat'>
        <div id='backDawat'></div>
      </div>
      <div id='GiftADawat'>
        <div id='backGiftADawat'></div>
      </div>
      <div id='Sadqa'>
        <div id='backSadqa'></div>
      </div>
      <div id='Events'>
        <div id='backEvents'></div>
      </div>
      <div id='Reception'>
        <div id='backReception'></div>
      </div>
      <div id='Mehndi'>
        <div id='backMehndi'></div>
      </div>
      <div id='buyNow'>
        {/* <!-- component --> */}
        <body className="font-mono min-h-screen ">
          {/* <!-- Container --> */}
          <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
              {/* <!-- Row --> */}
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* <!-- Col --> */}
                <div
                  className="w-full h-auto bg-gray-400 md:hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                  id='crecard'
                >

                </div>
                <br />

                {/* <!-- Col --> */}
                <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-2xl text-center">Confirm Your Order!</h3>
                  <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">


                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Card number
                      </label>
                      <input
                        required
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="number"
                        placeholder="0000-0000-0000"
                      />
                      {/* <p className="text-xs italic text-red-500">Please Enter Your Card number.</p> */}
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        CVC/CVV
                      </label>
                      <input
                        required
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                      {/* <p className="text-xs italic text-red-500">Please choose CVC/CVV Number.</p> */}
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Expiry date
                      </label>
                      <input
                        required
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="date"
                        placeholder="******************"
                      />
                    </div>

                    <hr className="mb-6 border-t" />

                    <div className="mb-4">
                      <input required className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                      <label className="text-sm">
                        Remember Me
                      </label>
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none border-fuchsia-500 focus:shadow-outline"
                        type="button"
                      >
                        Sign In
                      </button>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                      <a
                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="#createaccount"
                      >
                        Create an Account!
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="#createaccount"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
              <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                <div className="px-12 py-5">
                  <h2 className="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
                </div>
                <div className="bg-gray-200 w-full flex flex-col items-center">
                  <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-lg text-gray-800">How was quality of the call?</span>
                    <div className="flex space-x-3">
                      <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-3/4 flex flex-col">
                    <textarea className="p-4 text-gray-500 rounded-xl resize-none">Leave a message, if you want</textarea>
                    <button className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"><Link href="mailto: rebaalhussain@gmail.com">Rate now</Link> </button>
                  </div>
                </div>
                <div className="h-20 flex items-center justify-center">
                  <a href="#" className="text-gray-600">Maybe later</a>
                </div>
              </div>


            </div>


          </div>
          <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12" id='createaccount'>
            <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="login-box">
              <h2>Login</h2>
              <form>
                <div className="user-box">
                  <input type="text" name="" required />
                  <label>Username</label>
                </div>
                <div className="user-box">
                  <input type="email" name="" required />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input type="password" name="" required />
                  <label>Password</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
            </div>


          </div>
        </body>
        {/* <!-- component --> */}

      </div>
      <div
        id="shopify-section-1590738539295"
        className="shopify-section index-section"
      >
        <div
          data-section-id="1590738539295"
          data-section-type="newsletter-block news-block-3"
          className="newsletter-block news-block-3"
        >
          <div className="newsletter-block-type-3 ">
            <div className="overlay"></div>
            <div className="container">
              <div className="mc-embedded-subscribe-form">
                <form
                  method="post"
                  action="/"
                  id="contact_form"
                  accept-charset="UTF-8"
                  className="contact-form"
                >
                  <input type="hidden" name="form_type" value="customer" />
                  <input type="hidden" name="utf8" value="✓" />

                  <input
                    required
                    type="email"
                    aria-label="Your Name"
                    className="mail"
                    placeholder="Your Name"
                  />
                  <br />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    // name="contact[email]"
                    className="mail"
                    aria-label="Email address"
                  />
                  <br />

                  <input
                    required
                    type="email"
                    aria-label="Phone No"
                    className="mail"
                    placeholder="Phone No"
                  />
                  <br />
                  <input
                    required
                    type="email"
                    aria-label="Delivery Address"
                    className="mail"
                    placeholder="Delivery Address"
                  />
                  <br />
                  <input
                    required
                    type="hidden"
                    name="contact[tags]"
                    value="newsletter"
                  />
                  <br />
                  <button
                    type="submit"
                    className="btn subscribe"
                    name="subscribe"
                    value=""
                  >
                    Book Your Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="shopify-section-footer-model-9" className="text-center shopify-section" >
        <div
          data-section-id="footer-model-9"
          data-section-type="Footer-model-9"
          className="footer-model-9"
        >
          <footer
            className="site-footer"
          // style="background-color:rgba(0,0,0,0); background-image:url('//cdn.shopify.com/s/files/1/0436/7371/4851/files/footer_1.jpg?v=1636108887');background-repeat:no-repeat;background-size:cover;background-position:center;"
          >
            <div className="container">
              <div className="grid-uniform">
                <div className="grid__item wide--one-half post-large--one-half large--one-half medium--one-half">
                  <h4 style={{ color: "#ffffff" }}>Help</h4>

                  <ul className="site-footer__links">
                    <li>
                      <a style={{ color: "#ffffff" }} href="/search">
                        Search
                      </a>
                    </li>

                    <li>
                      <a
                        style={{ color: "#ffffff" }}
                        href="/policies/terms-of-service"
                      >
                        Terms & Conditions
                      </a>
                    </li>

                    <li>
                      <a
                        style={{ color: "#ffffff" }}
                        href="/policies/privacy-policy"
                      >
                        Policies
                      </a>
                    </li>

                    <li>
                      <a style={{ color: "#ffffff" }} href="/pages/contact-us">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="grid__item wide--one-half post-large--one-half large--one-half medium--one-half">
                  <h4 style={{ color: "#ffffff" }}>Contact us</h4>

                  <div className="address">
                    <p style={{ color: "#ffffff" }}>
                      <i className="fa fa-home"></i> Hatar Road Taxila
                    </p>

                    <p style={{ color: "#ffffff" }}>
                      {" "}
                      <i className="fa fa-phone"></i>0311-512060
                    </p>
                  </div>

                  <ul className="link">
                    <li>
                      {" "}
                      <i
                        style={{ color: "#ffffff" }}
                        className="fas fa-globe-asia"
                      ></i>{" "}
                      <a
                        className="domain"
                        style={{ color: "#ffffff" }}
                        href="mailto:rebaalhussain@gmail.com"
                      >
                        Makkah_Tent_and_Catering Online_Daig_Services
                      </a>
                    </li>

                    <li>
                      {" "}
                      <i
                        style={{ color: "#ffffff" }}
                        className="fa fa-envelope"
                      ></i>{" "}
                      <a
                        className="mail"
                        style={{ color: "#ffffff" }}
                        href="mailto:rebaalhussain@gmail.com"
                      >
                        rebaalhussain@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid__item">
              <div
                className="social_icons_bg"
                style={{
                  float: "left",
                  width: "100%",
                  background: "rgba(0,0,0,0)",
                }}
              >
                <div className="grid__item wide--one-half post-large--one-half large--one-half medium--one-half">
                  <div className="footer_social_links">
                    <h4 style={{ color: "#ffffff" }}>Connect with us</h4>

                    <ul className="inline-list social-icons social-links-type-1">
                      <li>
                        <a
                          className="icon-fallback-text fb hexagon"
                          target="blank"
                          href="https://www.facebook.com/rebaal.hussain/"
                          // onmouseover="this.style.color='';"
                          // onmouseout="this.style.color='';"
                          title="Facebook"
                        >
                          <span
                            className="fab fa-facebook"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="icon-fallback-text ins"
                          target="blank"
                          href="https://www.instagram.com/abeer_rae/?hl=en"
                          // onmouseover="this.style.color='';"
                          // onmouseout="this.style.color='';"
                          title="Instagram"
                        >
                          <span
                            className="fab fa-instagram"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="icon-fallback-text youtube"
                          target="blank"
                          href="https://www.youtube.com/@millionaro5348"
                          // onmouseover="this.style.color='';"
                          // onmouseout="this.style.color='';"
                          title="YouTube"
                        >
                          <span
                            className="fab fa-youtube"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <button>
        <a href="#hero">
          <img className="go" src="/up.png" alt="go" />
        </a>
      </button>

    </>
  )
}

export default allpages