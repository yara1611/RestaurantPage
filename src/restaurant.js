
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
    img.src='https://ca-times.brightspotcdn.com/dims4/default/5eb6513/2147483647/strip/true/crop/2880x1920+0+0/resize/1440x960!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F5b%2Fdced3ab54ebab4a1477f4168f737%2F938247-tn-wknd-me-outdoor-patio-dining-chachas-20220410-12.jpg'
    img.width='300'
    pageContent.appendChild(img)

    

    //Description
    const desc = document.createElement('p');
    desc.textContent="Best Restaurant Ever!!"
    pageContent.appendChild(desc)
    content.appendChild(pageContent)
}
export default createRestHomePage;