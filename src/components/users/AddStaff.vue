<template>
    <div class="p-1 sm:ml-52 ">
   <div class="p-1 border-gray-200 border-dashed rounded-sm dark:border-gray-700 mt-1">

     
 <!-- breadcrumb -->
 <nav class="text-sm font-semibold mb-1" aria-label="Breadcrumb">
              <ol class="list-none p-1 inline-flex">
                <li class="flex i text-blue-400">
                  <a href="/Dashboard" class="text-gray-500">Dashboard</a>
                  <svg class="fill-current w-4 h-4 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                </li>
                <li class="flex items-center">
                  <a href="/addstaff" class="text-gray-600">Add Staff</a>
                </li>
              </ol>
            </nav> 
            <!-- breadcrumb end -->
 
 
 
 
 <!-- card -->
 <!-- form strat -->
 <div class="formbold-main-wrapper">
  
    <div class="formbold-form-wrapper bg-gray-300 dark:bg-gray-800 rounded-lg">
      <div class="lg:flex justify-center items-center mb-3 ms-2">
              <p class="text-2xl font-semibold mb-2 pt-2 lg:mb-0 dark:text-gray-200 text-black">Add New Staff</p> 
            </div>
<form class="p-2">
    <div class="grid gap-4 mb-3 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-1    text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="dark:bg-gray-700 block py-2 px-3 w-full text-sm text-gray-900 rounded-lg border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="John" required>
        </div>
        <div>
            <label for="last_name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="dark:bg-gray-700 block py-2 px-3 w-full text-sm text-gray-900 rounded-lg border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Doe" required>
        </div>
        
        <div>
            <label for="company" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Position</label>
            <input type="text" id="company" class="dark:bg-gray-700 block py-2 px-3 w-full text-sm text-gray-900 rounded-lg border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Flowbite" required>
        </div>  
        <div>
            <label for="phone" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="dark:bg-gray-700 block py-2 px-3 w-full text-sm text-gray-900 rounded-lg border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="+254746645142" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
        </div>
    </div>
    <div class="mb-3">
        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="dark:bg-gray-700 block py-2 px-3 w-full text-sm text-gray-900 rounded-lg border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="john.doe@company.com" required>
    </div> 
    <label class="block mb-1 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Profile Photo</label>
    <input class="dark:bg-gray-700 block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file">
    <!-- password -->
    <div class="grid gap-6 mb-3 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="floating_password" id="floating_password" class="dark:bg-gray-700 block py-2 px-3 w-full text-sm text-gray-900 rounded-lg border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="•••••••••" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comfirm Pasword</label>
            <input type="password" name="repeat_password" id="floating_repeat_password" class="dark:bg-gray-700 block py-2 px-3 w-full text-sm text-gray-900 rounded-lg border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="•••••••••" required />
        </div>
        
    </div>
    
    <button type="submit" class="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5    text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btnsubmit">Submit</button>
</form>
</div>
</div>
 <!-- for, end -->
     </div>
     </div>
 </template>
 <script>
 export default {
     
 }
 </script>
 <style scoped>
 .formbold-main-wrapper {
     display: flex;
     align-items: center;
     justify-content: center;
 
   }    
   .formbold-form-wrapper {
     margin: 0 auto;
     max-width: 650px;
     width: 100%;
   }
   .btnsubmit {
    float: right;
   }
 
 </style>