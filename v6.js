let datas = []
let reg = '^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$'

document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault()

    let name = document.getElementById("name")
    let phone = document.getElementById("phone")
    let email = document.getElementById("email")

    if(name.length < 4 || !reg.test(phone)) return alert("Ism yoki telefon raqam noto'g'ri")
    
    let data = {
        name,
        phone,
        email
    }
    datas.push(data)

    for(let data of datas) {
        let li = document.createElement(li)
        
    }
    
})