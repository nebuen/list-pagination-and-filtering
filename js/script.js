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
// console.log(showPage(studentList, 6));
// console.log(studentList.length);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
   //determine how many pages needed base on number of students
   for(let i = 0; i < list.length; i += 9){
      pages += 1;
   }
   let div = document.createElement('DIV');
   div.className = "pagination";
   let div_page = document.querySelector('.page');
   div_page.appendChild(div);
   let ul = document.createElement('UL');
   div.appendChild(ul);
   let a = document.getElementsByTagName('a');
   
   for(let i = 0; i < pages; i += 1){
      let li = document.createElement('LI');
    
      let a = document.createElement('A');
      a.href = '#';
      console.log(pages[0]);
      a.innerHTML = i + 1;
      li.appendChild(a);
      a.addEventListener('click', showPage(list, pages));
      ul.appendChild(li);
      for(let i = 0; i < div.length; i += 1){
         a[i].classList.remove("active");
      }
      console.log(li.childNodes);
      a.event.target.className = "active";
      // li.event.target = li.classList.add('active');
   }
   
   
}


console.log(appendPageLinks(studentList));
console.log('pages: ' + pages);
// Remember to delete the comments that came with this file, and replace them with your own code comments.