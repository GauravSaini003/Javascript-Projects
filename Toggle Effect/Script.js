// let toggle = document.getElementById('click_Effect');
// let heading = document.getElementById('heading');



// toggle.addEventListener('click',()=>{
// heading.classList.toggle('hidden');
// heading.classList.toggle('visible');
// })




// This is the version you get while learning 


// let toggle = document.getElementById('btn');
// let info_section = document.getElementById('info_01');
// let image = document.getElementById('img');
// let image1 = document.getElementById('img1');


// toggle.addEventListener('click',()=>{
    
//     info_section.classList.toggle('hidden');
//     // info_section.classList.toggle('visible');
// })
// image.addEventListener('click',()=>{
//     // In this you don't need to add other property also in js
//     image.classList.toggle('rotated');
 
   
// })
// image1.addEventListener('click',()=>{
//     // In this you don't need to add other property also in js
//     image1.classList.toggle('rotated');
 
   
// })
// let toggle1 = document.getElementById('btn1');
// let info_section1 = document.getElementById('info_02');


// toggle1.addEventListener('click',()=>{
    
//     info_section1.classList.toggle('hidden');
//     // info_section1.classList.toggle('visible');
// })



// Now here is the improved and clean code to do

document.addEventListener('DOMContentLoaded', () => {
    const toggleVisibility = (buttonId, sectionId) => {
        const button = document.getElementById(buttonId);
        const section = document.getElementById(sectionId);
        button.addEventListener('click', () => {
            section.classList.toggle('hidden');
        });
    };

    const toggleRotation = (imageId) => {
        const image = document.getElementById(imageId);
        image.addEventListener('click', () => {
            image.classList.toggle('rotated');
        });
    };

    // Initialize toggles for visibility and rotation
    toggleVisibility('btn', 'info_01');
    toggleVisibility('btn1', 'info_02');
    toggleRotation('img');
    toggleRotation('img1');
});
