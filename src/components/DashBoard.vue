<template >
      <div class="p-2 sm:ml-52 bg-gray-50 dark:text-gray-500 dark:bg-gray-900">
   <div class="p-1 shadow-sm-gray-200 shadow-sm-dashed rounded-sm dark:shadow-sm-gray-700 mt-1 dark:text-gray-500">
          

            <div class="lg:flex justify-between items-center mb-1 ms-" v-if="user">
              <p class="text-2xl font-semibold mb-2 lg:mb-0 text-black">Good afternoon, <span class="text-green-500">{{user.name}}.</span></p>
              <!-- <button class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Logs</button> -->
            </div>

      <div class="flex flex-wrap -mx-3 mb-4 dark:text-gray-500">

<div class="w-1/2 xl:w-1/4 px-3 ">
  <div class="w-full dark:bg-gray-800 dark:text-blue-400 shadow-lg text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
    </svg>

    <div class="dark:text-gray-300">
      <p class="font-semibold text-3xl">{{ designCount }}</p>
      <p class="dark:text-gray-400">Total Designs</p>
    </div>

  </div>
</div>

<div class="w-1/2 xl:w-1/4 px-3">
  <div class="w-full dark:bg-gray-800 shadow-sm text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
    </svg>

    <div class="text-gray-300">
      <p class="font-semibold text-3xl">177</p>
      <p class="dark:text-gray-400">Designs Reviews</p>
    </div>
  </div>
</div>

<div class="w-1/2 xl:w-1/4 px-3">
  <div class="w-full dark:bg-gray-800 shadow-sm text-blue-400 rounded-lg flex items-center p-6">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path>
    </svg>

    <div class="text-gray-300">
      <p class="font-semibold text-3xl">31</p>
      <p class="dark:text-gray-400">New Enquiries</p>
    </div>
  </div>
</div>

<div class="w-1/2 xl:w-1/4 px-3">
  <div class="w-full dark:bg-gray-800 shadow-sm text-blue-400 rounded-lg flex items-center p-6">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
    </svg>

    <div class="text-gray-300">
      <p class="font-semibold text-3xl">{{ expenseCount }}</p>
      <p class="dark:text-gray-400">Expenses</p>
    </div>

  </div>
</div>

</div>


<div class="flex flex-wrap -mx-3 mb-4 dark:text-gray-500">

<div class="w-1/2 xl:w-1/4 px-3 ">
  <div class="w-full dark:bg-gray-800 dark:text-blue-400 shadow-lg text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
    </svg>

    <div class="dark:text-gray-300">
      <p class="font-semibold text-3xl">237</p>
      <p class="dark:text-gray-400">Products Sold</p>
    </div>

  </div>
</div>

<div class="w-1/2 xl:w-1/4 px-3">
  <div class="w-full dark:bg-gray-800 shadow-sm text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
    </svg>

    <div class="text-gray-300">
      <p class="font-semibold text-3xl">177</p>
      <p class="dark:text-gray-400">Product Reviews</p>
    </div>
  </div>
</div>

<div class="w-1/2 xl:w-1/4 px-3">
  <div class="w-full dark:bg-gray-800 shadow-sm text-blue-400 rounded-lg flex items-center p-6">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path>
    </svg>

    <div class="text-gray-300">
      <p class="font-semibold text-3xl">31</p>
      <p class="dark:text-gray-400">New Enquiries</p>
    </div>
  </div>
</div>

<div class="w-1/2 xl:w-1/4 px-3">
  <div class="w-full dark:bg-gray-800 shadow-sm text-blue-400 rounded-lg flex items-center p-6">
    <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
      <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
    </svg>

    <div class="text-gray-300">
      <p class="font-semibold text-3xl">1,653</p>
      <p class="dark:text-gray-400">Product Views</p>
    </div>

  </div>
</div>

</div>

<div class="flex flex-wrap -mx-3 mb-4">

<div class="w-full xl:w-1/3 px-3">

  <div class="w-full dark:bg-gray-800 shadow-sm rounded-lg p-4 mb-8 xl:mb-0">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Sales</h5>
   </div>
    <canvas id="buyers-chart" width="600" height="400"></canvas>
    <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">Dtails about the graph</p>
         </div>
  </div>
  
</div>

<div class="w-full xl:w-1/3 px-3">

  <div class="w-full dark:bg-gray-800 shadow-sm rounded-lg p-4 mb-8 xl:mb-0">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Reviews</h5>
   </div>
    <canvas id="reviews-chart" width="600" height="400"></canvas>
    <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">Dtails about the graph</p>
         </div>
  </div>
</div>


<!-- Latest Products -->
<div class="w-full xl:w-1/3 px-3">
    <div class="w-full max-w-md  bg-white  rounded-lg shadow sm:p-4 p-4 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Products</h5>
        <a href="#" class="text-sm font-medium  text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 me-4 dark:divide-gray-700">
            <li class="w-full py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>

                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
            <li class="w-full py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Bonnie image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                    </div>
                </div>
            </li>
            <li class="w-full py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Michael image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                </div>
            </li>
            <li class="w-full py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Lana image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                    </div>
                </div>
            </li>
            <li class="w-full pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Thomas image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>




  </div>
</div>

<!-- end of row -->




</div>

<!-- Third row -->
<div class="flex flex-wrap -mx-3 mb-4">
<!-- all users section -->
<div class="w-full xl:w-2/3 px-3 mb-3">
  <div class="w-full dark:bg-gray-800 shadow-sm rounded-lg p-3">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Expenses</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
    <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1 mb-4">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Kelvin Brent</p>
            <p class="text-gray-500 dark:text-gray-400">Product 1</p>
        </div>
        <span class="text-green-400 font-semibold text-lg">$25.00</span>
    </div>

    <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1 mb-4">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Joseph Brent</p>
            <p class="text-gray-500 dark:text-gray-400">Product 34</p>
        </div>
        <span class="text-red-500 font-semibold text-lg">$74.99</span>
    </div>

    <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1 mb-4">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Jacob Bator</p>
            <p class="text-gray-500 dark:text-gray-400">Product 23</p>
        </div>
        <span class="text-green-400 font-semibold text-lg">$14.95</span>
    </div>

    <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Alex Mason</p>
            <p class="text-gray-500 dark:text-gray-400">Product 66</p>
        </div>
        <span class="text-green-400 font-semibold text-lg">$44.99</span>
    </div>
  </div>
</div>

<!-- resent transactions card -->
<div class="w-full xl:w-1/3 px-3">
  <div class="w-full dark:bg-gray-800 shadow-sm rounded-lg p-3">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Transactions</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1 mb-4">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Kelvin Brent</p>
            <p class="text-gray-500 dark:text-gray-400">Date and time</p>
        </div>
        <span class="text-green-400 font-semibold text-lg">$25.00</span>
    </div>

    <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1 mb-4">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Joseph Brent</p>
            <p class="text-gray-500 dark:text-gray-400">Date and time</p>
        </div>
        <span class="text-red-500 font-semibold text-lg">$74.99</span>
    </div>

    <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1 mb-4">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Jacob Bator</p>
            <p class="text-gray-500 dark:text-gray-400">Date and time</p>
        </div>
        <span class="text-green-400 font-semibold text-lg">$14.95</span>
    </div>

    <div class="w-full bg-gray-700 shadow-sm rounded-lg flex justify-between items-center px-4 py-1">
        <div>
            <p class="font-semibold text-xl text-gray-900 dark:text-gray-200">Alex Mason</p>
            <p class="text-gray-500 dark:text-gray-400">Date and time</p>
        </div>
        <span class="text-green-400 font-semibold text-lg">$44.99</span>
    </div>

    
  </div>
</div>

</div>


<!-- Fourth row -->
<div class="flex flex-wrap -mx-3  mb-4">
<!-- all users section -->
<div class="w-full xl:w-2/3 px-3 mb-3">
  <div class="dark:bg-gray-800 rounded-lg">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl ms-4 mt-4 font-bold leading-none text-gray-900 dark:text-white">Recent Transactions</h5>
        <a href="#" class="text-sm me-5 font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="relative overflow-x-auto shadow-lg sm:rounded-lg">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Color
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Category
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Price
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="flex items-center">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="dark:bg-gray-800 shadow-sm-b dark:bg-gray-800 dark:shadow-sm-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="dark:bg-gray-800 shadow-sm-b dark:bg-gray-800 dark:shadow-sm-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="dark:bg-gray-800 dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="dark:bg-gray-800 dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="dark:bg-gray-800 dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="dark:bg-gray-800 dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4 ">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  </div>
</div>

<!-- recent transactions card -->
<div class="w-full xl:w-1/3 px-3">
  <div class="">
  
<div class="w-full max-w-l p-1 dark:bg-gray-800 shadow-sm shadow-sm-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:shadow-sm-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Reviews</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
 
   <div class="flow-root">
        <ul role="list" class="dark:divide-gray-700">
            <li class="py-3 sm:py-4 shadow-sm-b dark:bg-gray-800 dark:shadow-sm-gray-700">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500  dark:text-gray-400">
                            email@windster.com    email@windster.com    email@windster.com
                        </p>
                    </div>
                   
                </div>
            </li>
            <li class="py-3 sm:py-4 shadow-sm-b dark:bg-gray-800 dark:shadow-sm-gray-700">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500  dark:text-gray-400">
                            email@windster.com    email@windster.com    email@windster.com
                        </p>
                    </div>
                   
                </div>
            </li>
            <li class="py-3 sm:py-4 shadow-sm-b dark:bg-gray-800 dark:shadow-sm-gray-700">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500  dark:text-gray-400">
                            email@windster.com    email@windster.com    email@windster.com
                        </p>
                    </div>
                   
                </div>
            </li>
            <li class="py-3 sm:py-4 shadow-sm-b dark:bg-gray-800 dark:shadow-sm-gray-700">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="../assets/team-1-800x800.jpg" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500  dark:text-gray-400">
                            email@windster.com    email@windster.com    email@windster.com
                        </p>
                    </div>
                   
                </div>
            </li>
        </ul>
   </div>
</div>


  </div>
</div>

<!-- end of row -->

</div>
      <div class="grid grid-cols-2 gap-4">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
      </div>
   </div>
</div>
</template>

<script>
import Chart from 'chart.js/auto';
import {mapGetters} from 'vuex';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  computed: {
      ...mapGetters(['user'])
   },

  methods: {
    // total expenses fetch
    async fetchExpenseCount() {
      try {
        const response = await axios.get('expenses');
        this.expenseCount = response.data.length;
      } catch (error) {
        console.error('Error fetching expense count:', error);
      }
    },

    async fetchDesignCount() {
      try {
        const response = await axios.get('designs');
        this.designCount = response.data.length;
      } catch (error) {
        console.error('Error fetching design count:', error);
      }
    },
  },


  mounted () {
        new Chart(document.getElementById('buyers-chart'), this.buyersData)
        new Chart(document.getElementById('reviews-chart'), this.reviewsData)
        this.fetchExpenseCount();
        this.fetchDesignCount();
    },

  data() {
        return {
            expenseCount: 0,
            designCount: 0,

            buyersData: {
                type: 'line',
                data: {
                    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
                    datasets:[{
                        backgroundColor : "rgba(99,179,237,0.4)",
                        strokeColor : "#63b3ed",
                        pointColor : "#fff",
                        pointStrokeColor : "#63b3ed",
                        data : [203,156,99,251,305,247,256]
                    },
                    {
                        backgroundColor : "rgba(198,198,198,0.4)",
                        strokeColor : "#f7fafc",
                        pointColor : "#fff",
                        pointStrokeColor : "#f7fafc",
                        data : [86,97,144,114,94,108,156]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display:false
                            },  
                            ticks: {
                                display: false
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }
            },
            reviewsData: {
                type: 'bar',
                data: {
                    labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
                    datasets:[{
                        backgroundColor : "rgba(99,179,237,0.4)",
                        strokeColor : "#63b3ed",
                        pointColor : "#fff",
                        pointStrokeColor : "#63b3ed",
                        data : [203,156,99,251,305,247,256]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display:false
                            },  
                            ticks: {
                                display: false
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }

            }
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
