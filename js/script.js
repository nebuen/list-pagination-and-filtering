/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Get the 'ul' list of student and store it to 'studentList' using this variable to manipulate the DOM
// number of items to show on page which is 10.
const studentList = document.querySelectorAll('.student-item');
// console.log(studentList.length);
const itemPerPage = 10;
let pages = 0;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
   start = (page * itemPerPage) - itemPerPage;
   end = page * itemPerPage;
   listOfStudents = [];
   for(let i = 0; i < list.length; i += 1){
      if (i >= start && i < end){
         listOfStudents.push(list[i]);
      }
   }
   return listOfStudents;
}
console.log(showPage(studentList, 1));
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   //determine how many pages needed base on number of students
   for(let i = 0; i < list.length; i += 9){
      pages += 1;
   }
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
      // a.addEventListener('click', function(e){
      //    showPage(list, pages);
      //    e.target.className ='active';
         
      // });
      // console.log(li.childNodes[0]);
      // const event = a.target;
      // event.classList.add('active');
      // li.event.target = li.classList.add('active');
   }
   //get all anchor tag then add class 'active' on the first anchor tag only
   a = document.querySelectorAll('div.pagination ul li a');
   a[0].className = 'active';
   // loop through anchor tag and add all 'a' addEventListener and another loop to remove class 'active' to all anchor tag
   for(let i = 0; i < a.length; i += 1){
      a[i].addEventListener('click', function(e){
         //removing 'active' class to all 'a'
         for(let j = 0; j < a.length; j += 1){
            a[j].classList.remove('active');
         }
         e.target.className = 'active';
      });
   }
   
   
   
}


console.log(appendPageLinks(studentList));
console.log('pages: ' + pages);
// Remember to delete the comments that came with this file, and replace them with your own code comments.