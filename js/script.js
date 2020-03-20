/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Get the 'ul' list of student and store it to 'studentList' using this variable to manipulate the DOM
// number of items to show on page which is 10.
const studentList = document.querySelectorAll('.student-item');
const itemPerPage = 10;

//Create SEARCH BAR
const divPageHeader = document.querySelector('.page-header');
const newDiv = document.createElement('DIV');
newDiv.className = 'student-search';
divPageHeader.appendChild(newDiv);
newDiv.innerHTML = `<input placeholder="Search for students...">
                     <button>Search</button>`;
// Reference the 'input' and search 'button' element
const button = document.querySelector('.student-search button');
const inputSearch = document.querySelector('.student-search input');



// Create the `showPage` function to hide all of the items in the 
// list except for the ten you want to show. 
const showPage = (list, page) => {
   start = (page * itemPerPage) - itemPerPage;
   end = page * itemPerPage;
   for(let i = 0; i < list.length; i += 1){
      if (i >= start && i < end){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   //determine how many pages needed base on number of students
   let pages = Math.ceil(list.length/10);
   // create div with classname 'pagination'
   let div = document.createElement('DIV');
   div.className = "pagination";
   // get the div with classname 'page' and append the div.pagination we created
   let div_page = document.querySelector('.page');
   div_page.appendChild(div);
   //create ul element and append to newly created div.pagination
   let ul = document.createElement('UL');
   div.appendChild(ul);
   //loop through pages to know the number of 'li' will be added to 'ul'
   for(let i = 0; i < pages; i += 1){
      //create LI with a=href'#'
      let li = document.createElement('LI');
      let a = document.createElement('A');
      a.href = '#';
      a.innerHTML = i + 1;
      li.appendChild(a);
      ul.appendChild(li);
   }
   //get all anchor tag then add class 'active' on the first anchor tag only
   a = document.querySelectorAll('div.pagination ul li a');
   if(pages !== 0){
      //highlight the first page
      a[0].className = 'active';
      // loop through anchor tag and add all 'a' addEventListener and another loop to remove class 'active' to all anchor tag
      for(let i = 0; i < a.length; i += 1){
         a[i].addEventListener('click', function(e){
            //removing 'active' class to all 'a'
            for(let j = 0; j < a.length; j += 1){
               a[j].classList.remove('active');
            }
            e.target.className = 'active';
            showPage(list, a[i].innerHTML);
         });
      }
   }
   
   
   
}

//functions for changing the textContent in 'no result' / 'students'
const noresult = () =>{
   let body = document.querySelector('body');
   let noresult = body.firstElementChild.firstElementChild.firstElementChild;
   noresult.textContent  = 'No Results';
}
const b2normal = () =>{
   let body = document.querySelector('body');
   let noresult = body.firstElementChild.firstElementChild.firstElementChild;
   noresult.textContent  = 'Students';
}




const searching = (searchInput, list) =>{
   let pagination = document.querySelector('.pagination');
   //empty array to populate later and use this array to show all searched student
   let searchList = [];
   //get the textContent of 'h3' which is the name of the student
   let h3 = document.querySelectorAll('.student-details h3');
   // this is a reset, looping through every list, every action the display will have 'none' so we can manipulate it better later.
   for(let i = 0; i < list.length; i += 1){
      list[i].style.display ='none';
   }

   //populating the array that matches the input from user
   for(let i = 0; i < list.length; i += 1){
      if(searchInput.value.length !== 0 && h3[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
         searchList.push(list[i]);
      }
   }
   //Handle no results based on searchList
   if(searchList.length == 0 && searchInput.value.length !== 0 ){
      console.log('not included');
      noresult();
   }else {
      b2normal();
   }
   
   //removing the 'none' value for it to show in the page the matching letters/input
   for(let i = 0; i < searchList.length; i += 1){
      searchList[i].style.display = '';
   }

   

   //very important
   //if input element is empty remove() .pagination just to be sure then call appendPage and showpage to restart
   //calling the studentList
   if(searchInput.value.length === 0){
      pagination.remove();
      appendPageLinks(studentList);
      showPage(studentList, 1);
   } else{
      // else remove the pagination just to be sure then call the functions with the new list 'searchList'
      pagination.remove();
      console.log(searchList.length);
      appendPageLinks(searchList);
      showPage(searchList, 1);
   } 
   
   
   
   
}


// function for the search result, button and the keyup function
const searchBar = () =>{
   button.addEventListener('click', (event) => {
      //.preventDefault so the page do not do it's default state when clicked
      event.preventDefault();
      //Invoke searching function
      searching(inputSearch, studentList);
      console.log('Submit button is functional!');
   });

   inputSearch.addEventListener('keyup', () => {
      //Invoke searching function
      searching(inputSearch, studentList);
      console.log('keyup working');
   });

}

 



showPage(studentList, 1);
appendPageLinks(studentList);
searchBar();

