const createContactPage = () =>{
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const form = document.createElement('form')
    form.classList.add('contact-form')

    const headingInput = document.createElement('input')
    headingInput.type='text'
    headingInput.placeholder='Enter Heading'
    form.appendChild(headingInput)

    const addressInput = document.createElement('input')
    addressInput.type='text'
    addressInput.placeholder='Enter Address'
    form.appendChild(addressInput)

    const phoneInput = document.createElement('input')
    phoneInput.type='text'
    phoneInput.placeholder='Enter Phone Number'
    form.appendChild(phoneInput)

    pageContent.appendChild(form)
    content.appendChild(pageContent)
}
export default createContactPage;