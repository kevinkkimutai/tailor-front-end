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
                  <a href="/products" class="text-gray-600">Add Expense</a>
                </li>
              </ol>
            </nav> 
            <!-- breadcrumb end -->
 
    <div class="lg:flex justify-center items-center mb-3 ms-2">
              <p class="text-2xl font-semibold mb-2 lg:mb-0 text-black">Add New Expense</p> 
            </div>
 
 
 <!-- card -->
 
 <div class="formbold-main-wrapper">
 
   <div class="formbold-form-wrapper bg-gray-300 rounded-lg">
     <h1 class="text-black mb-2 text-center font-bold">ADD EXPENSE</h1>
     <form action="https://formbold.com/s/FORM_ID" method="POST" class="p-2">
         <div class="formbold-input-flex">
           <div>
               <label for="design" class="formbold-form-label"> Expense Name </label>
               <input
               type="text"
               name="design" 
               id="design"
               placeholder="Expense Name"
               class="formbold-form-input"
               />
           </div>
         </div>
         <label for="design" class="formbold-form-label"> Amount </label>
         <div class="relative mb-6">
            
  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-black">
  Ksh: 
  </div>
  <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
</div>
         <div>
             <label for="message" class="formbold-form-label"> Expense Description </label>
             <textarea
                 rows="4"
                 name="message"
                 id="message"
                 placeholder="Type the Description here"
                 class="formbold-form-input"
             ></textarea>
         </div>
 
         <button class="formbold-btn">
             Add Expense    
         </button>
     </form>
   </div>
 </div>
 
 
 
 <!-- end of card -->
 
         
     </div>
     </div>
 </template>
 <script>
 export default {
     
 }
 </script>
 <style scoped>
       @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   body {
     font-family: "Inter", sans-serif;
   }
   .formbold-main-wrapper {
     display: flex;
     align-items: center;
     justify-content: center;
 
   }
 
   .formbold-form-wrapper {
     margin: 0 auto;
     max-width: 550px;
     width: 100%;
   }
 
   .formbold-input-flex {
     display: flex;
     gap: 20px;
     margin-bottom: 15px;
   }
   .formbold-input-flex > div {
     width: 100%;
   }
 
   .formbold-input-radio-wrapper {
     margin-bottom: 28px;
   }
   .formbold-radio-flex {
     display: flex;
     align-items: center;
     gap: 15px;
   }
   .formbold-radio-label {
     font-size: 14px;
     line-height: 24px;
     color: #07074D;
     position: relative;
     padding-left: 25px;
     cursor: pointer;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
   }
   .formbold-input-radio {
     position: absolute;
     opacity: 0;
     cursor: pointer;
   }
   .formbold-radio-checkmark {
     position: absolute;
     top: -1px;
     left: 0;
     height: 18px;
     width: 18px;
     background-color: #FFFFFF;
     border: 1px solid #DDE3EC;
     border-radius: 50%;
   }
   .formbold-radio-label .formbold-input-radio:checked ~ .formbold-radio-checkmark {
     background-color: #6A64F1;
   }
   .formbold-radio-checkmark:after {
     content: "";
     position: absolute;
     display: none;
   }
 
   .formbold-radio-label .formbold-input-radio:checked ~ .formbold-radio-checkmark:after {
     display: block;
   }
 
   .formbold-radio-label .formbold-radio-checkmark:after {
     top: 50%;
     left: 50%;
     width: 10px;
     height: 10px;
     border-radius: 50%;
     background: #FFFFFF;
     transform: translate(-50%, -50%);
   }
 
   .formbold-form-input {
     width: 100%;
     padding: 8px 14px;
     border-radius: 5px;
     border: 1px solid #DDE3EC;
     background: #FFFFFF;
     font-weight: 500;
     font-size: 16px;
     color: #07074D;
     outline: none;
     resize: none;
   }
   .formbold-form-input::placeholder {
     color: #536387;
   }
   .formbold-form-input:focus {
     border-color: #6a64f1;
     box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
   }
   .formbold-form-label {
     color: #07074D;
     font-size: 16px;
     font-weight: bold;
     line-height: 14px;
     display: block;
     margin-bottom:8px;
   }
 
   .formbold-btn {
     text-align: center;
     width: auto;
     font-size: 16px;
     border-radius: 5px;
     padding: 8px 16px;
     border: none;
     font-weight: 500;
     background-color: #6A64F1;
     color: white;
     cursor: pointer;
     margin-top: 6px;
     margin-bottom: 6px;
     float: right;
   }
   .formbold-btn:hover {
     box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
   }
 
 </style>