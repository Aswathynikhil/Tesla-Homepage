const openMenu= ()=>{
   document.querySelector('.backdrop').className='backdrop active';
   document.querySelector('sidebar').className='active';
}
const closeMenu= ()=>{
    document.querySelector('.backdrop').className='backdrop';
    document.querySelector('sidebar').className='';
}
document.getElementById('menubtn').onclick=e =>{

openMenu();
}
document.getElementById('menubtn-mobile').onclick=e =>{

    openMenu();
    }
document.querySelector('sidebar .sidebar-button').onclick=e =>{
    closeMenu();
}
document.querySelector('.backdrop').onclick=e =>{
    closeMenu();
}




