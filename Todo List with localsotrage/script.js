let input = document.getElementById('txt_area');
let btn = document.getElementById('btn');
let element = document.getElementById('do_ele');

// function Inputask() {
//     let value = input.value.trim();
//     if (value) {
//         addtask(value);
//         input.value = '';
//         store();
//     } else {
//         alert('Pls Enter the Value');
//     }
// }

// btn.addEventListener('click', Inputask);

// function addtask(value) {
//     let li = document.createElement('li');
//     li.innerHTML = value;
//     element.appendChild(li);

//    let buttn = document.createElement('Button');
// //    buttn.className ='button-36';

//    buttn.innerHTML = 'Delete';
//    buttn.style.marginLeft = '100%';
  


//    buttn.addEventListener('click',()=>{
// element.removeChild(li);
//  store();
//    })

//    li.appendChild(buttn);
// }

// function store() {
//     let result = [];
//     element.querySelectorAll('li').forEach((val) => {
//         result.push(val.textContent.replace('Delete','').trim());
//     });
//     localStorage.setItem('result', JSON.stringify(result)); 
// }
// // This is for loading the task from the local storage
// function loadTasks() {
//     let storedTasks = JSON.parse(localStorage.getItem('result')) || []; // Retrieve tasks from localStorage
//     storedTasks.forEach(task => addtask(task)); // Add each task to the DOM
// }

// window.onload = loadTasks; // Load tasks when the window loads



// Do again and again to get the every ounce of the learning
// This code is without toggle effect


// function Input() {
//     const input_value = input.value.trim();
//     if (input_value) {
//         addValue(input_value);
//         input.value = '';
//         saveTask();
//     } else {
//         alert('Please enter a value first');
//     }
// }

// btn.addEventListener('click', Input);

// function addValue(input_value) {
//     // List Element added
//     let list_ele = document.createElement('Li');
//     list_ele.textContent = input_value;

//     // Adding a span for styling purpose
//     let span = document.createElement('span');
//     span.className = 'span';

//     // Creation of delete button
//     let dele_btn = document.createElement('button');
//     dele_btn.className = 'delete-button';
//     dele_btn.textContent = 'Delete';

//     // Append the list element to the main element
//     element.appendChild(list_ele);
//     list_ele.appendChild(span);
//     list_ele.appendChild(dele_btn);

//     // Delete the element from the list
//     dele_btn.addEventListener('click', function () {
//         element.removeChild(list_ele);
//         saveTask();
//     });

//     // This is the edit button in the list
//     let Edt_btn = document.createElement('button');
//     Edt_btn.className = 'edit-button';
//     Edt_btn.textContent = 'Edit';

//     list_ele.appendChild(Edt_btn);

//     // Edit Function
//     Edt_btn.addEventListener('click', () => {
//         let edt_input = document.createElement('input');
//         edt_input.type = 'text';
//         edt_input.value = list_ele.textContent.replace('DeleteEdit', '').trim(); // Correctly replace text

//         let save_btn = document.createElement('button');
//         save_btn.textContent = 'Save';

//         // Replace list item content with input and save button
//         list_ele.innerHTML = '';
//         list_ele.appendChild(edt_input);
//         list_ele.appendChild(save_btn);

//         save_btn.addEventListener('click', () => {
//             list_ele.textContent = edt_input.value; // Update list item with new value
//             list_ele.appendChild(span); // Re-add the span
//             list_ele.appendChild(dele_btn); // Re-add the delete button
//             list_ele.appendChild(Edt_btn); // Re-add the edit button
//             saveTask(); // Save the updated list
//         });
//     });
// }

// // Adding event listener for Enter key
// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         Input();
//     }
// });

// function saveTask() {
//     let dataList = [];
//     element.querySelectorAll('Li').forEach((val) => {
//         dataList.push(val.textContent.replace('DeleteEdit', '').trim());
//     });
//     localStorage.setItem('Value', JSON.stringify(dataList));
// }

// function loadTask() {
//     let tasks = JSON.parse(localStorage.getItem('Value')) || []; // Retrieve data from localStorage
//     tasks.forEach((data) => addValue(data)); // Add each task to the DOM
// }

// window.onload = loadTask; // Load tasks when window loads


// Now with the toggle Effect



function Input() {
    const input_value = input.value.trim();
    if (input_value) {
        if (isDuplicate(input_value)) {
            alert('This item already exists in the list.');
        } else {
            addValue(input_value);
            input.value = '';
            saveTask();
        }
    } else {
        alert('Please enter a value first');
    }
}
function isDuplicate(input_value) {
    let isDuplicate = false;
    element.querySelectorAll('li').forEach((list_ele) => {
        const currentText = list_ele.textContent.replace('DeleteEdit', '').trim();
        if (currentText === input_value) {
            isDuplicate = true;
        }
    });
    return isDuplicate;
}

btn.addEventListener('click', Input);

function addValue(input_value) {
    // List Element added
    let list_ele = document.createElement('li');
    list_ele.textContent = input_value;

    // Adding a span for styling purpose
    let span = document.createElement('span');
    span.className = 'span';

    // Creation of delete button
    let dele_btn = document.createElement('button');
    dele_btn.className = 'delete-button';
    dele_btn.textContent = 'Delete';

    // Append the list element to the main element
    element.appendChild(list_ele);
    list_ele.appendChild(span);
    list_ele.appendChild(dele_btn);

    // Delete the element from the list
    dele_btn.addEventListener('click', function () {
        element.removeChild(list_ele);
        saveTask();
    });

    // Toggle button for Edit/Save functionality
    let toggle_btn = document.createElement('button');
    toggle_btn.className = 'toggle-button';
    toggle_btn.textContent = 'Edit';

    list_ele.appendChild(toggle_btn);

    // Edit/Save Function
    toggle_btn.addEventListener('click', () => {
        if (toggle_btn.textContent === 'Edit') {
            // Switch to edit mode
            let edt_input = document.createElement('input');
            edt_input.type = 'text';
            edt_input.value = list_ele.textContent.replace('DeleteEdit', '').trim(); // Get text without buttons

            // Replace list item content with input field
            list_ele.innerHTML = '';
            list_ele.appendChild(edt_input);
            list_ele.appendChild(span);
            list_ele.appendChild(dele_btn);
            list_ele.appendChild(toggle_btn);

            toggle_btn.textContent = 'Save'; // Change button text to Save
        } else {
            // Save the changes
            let edt_input = list_ele.querySelector('input');
            if(edt_input.value.trim() ==='')
            {
                alert('pls enter the some value ')
            }
            else{
                list_ele.textContent = edt_input.value; // Update list item with new value
                list_ele.appendChild(span); // Re-add the span
                list_ele.appendChild(dele_btn); // Re-add the delete button
                list_ele.appendChild(toggle_btn); // Re-add the toggle button
            
                toggle_btn.textContent = 'Edit'; // Change button text back to Edit
    
                saveTask(); 
            }
           // Save the updated list
        }
    });
}

// Adding event listener for Enter key
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        Input();
    }
});

function saveTask() {
    let dataList = [];
    element.querySelectorAll('li').forEach((val) => {
        dataList.push(val.textContent.replace('DeleteEdit', '').trim());
    });
    localStorage.setItem('Value', JSON.stringify(dataList));
}

function loadTask() {
    let tasks = JSON.parse(localStorage.getItem('Value')) || []; // Retrieve data from localStorage
    tasks.forEach((data) => addValue(data)); // Add each task to the DOM
}

window.onload = loadTask; // Load tasks when window loads
