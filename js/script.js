let menu = document.getElementById('menu')
let listItem = document.getElementById('listItem')

menu.addEventListener('click',function(){
    if(listItem.style.display === 'none'){
        listItem.style.display = 'block'
    }
    else{
        listItem.style.display = 'none'
    }
})
