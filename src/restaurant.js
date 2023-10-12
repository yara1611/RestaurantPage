
const createRestHomePage = () =>{
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    //Headline
    const headline = document.createElement('h1');
    headline.textContent="Welcome"
    pageContent.appendChild(headline)

    //Image
    const img = document.createElement('img')
    img.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60'
    img.width='300'
    pageContent.appendChild(img)

    

    //Description
    const desc = document.createElement('p');
    desc.textContent="Best Restaurant Ever!!"
    pageContent.appendChild(desc)
    content.appendChild(pageContent)
}
export default createRestHomePage;