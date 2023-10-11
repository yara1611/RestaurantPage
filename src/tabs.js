import createRestHomePage from "./restaurant"
import createMenuPage from './menu'
import createContactPage from './contact'
const createTabs =()=>{
    
    const content = document.querySelector('#content')
    const tabs=document.createElement('div')
    tabs.classList.add('tabs-container')

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')

    //Set ids
    div1.setAttribute('id','home-btn')
    div2.setAttribute('id','menu-btn')
    div3.setAttribute('id','contact-btn')

    //Set classes
    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')

    div1.textContent='Home'
    div2.textContent='Menu'
    div3.textContent='Contact'

    tabs.appendChild(div1)
    tabs.appendChild(div2)
    tabs.appendChild(div3)
    content.appendChild(tabs)

    div1.addEventListener('click',()=>{
        clearContent()
        createRestHomePage()
    })
    div2.addEventListener('click',()=>{
        clearContent()
        createMenuPage()
    })
    div3.addEventListener('click',()=>{
        clearContent()
        createContactPage()
    })
}
function clearContent (){
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content')
    if(pageContent){
        content.removeChild(pageContent)
    }
}
export default createTabs;