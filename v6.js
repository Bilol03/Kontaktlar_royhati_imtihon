let datas = []
let reg = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/

document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault()

    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let ul = document.getElementById('contactList')
    console.log(name, phone, email);

    if(name.length < 4 || !reg.test(phone)) return alert("Ism yoki telefon raqam noto'g'ri")
    
    let data = {
        name,
        phone,
        email
    }
    datas.push(data)

    for(let data of datas) {
        let li = document.createElement('li')
        let name_el = document.createElement('span')
        let phone_el = document.createElement('span')
        let email_el = document.createElement('span')
        let img = document.createElement('img')
        img.className = 'delete'

        img.src = './delete.png'
        name_el.textContent = data.name
        phone_el.textContent = data.phone
        email_el.textContent = data.email

        li.append(name_el, phone_el, email_el, img)
        ul.append(li)
        

    }
    
})