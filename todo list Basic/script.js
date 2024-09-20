let btn = document.getElementById('btn');
let Input = document.getElementById('input_area');
let List = document.getElementById('list_ele');

btn.addEventListener('click', function(){

var li_ele = document.createElement('li');

  // For Getting ther inner Html of input box we use .value
li_ele.innerHTML = Input.value;
if(Input.value.trim()==='')
{
    alert('Pls Enter the Task First');
}
else{List.appendChild(li_ele);
    Input.value ='';}

 
li_ele.addEventListener('click',()=>{
    if (li_ele.style.textDecoration === 'line-through') {
        li_ele.style.textDecoration = 'none';
    } else {
        li_ele.style.textDecoration = 'line-through';
    }
})
li_ele.addEventListener('dblclick',()=>{
    li_ele.remove();
})

})