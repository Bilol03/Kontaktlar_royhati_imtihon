let datas = []
let reg = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
let ul = document.getElementById('contactList')


function createEl(datas) {

    ul.innerHTML = ""
    for(let data of datas) {
        let li = document.createElement('li')
        let name_el = document.createElement('span')
        let phone_el = document.createElement('span')
        let email_el = document.createElement('span')


        name_el.className = "ism"
        let img = document.createElement('img')
        img.className = 'delete'
        let btn = document.createElement('button')
        btn.className = 'delete_btn'
        btn.style.background = '#f9f9f9'

        img.src = './delete.png'
        name_el.textContent = data.name
        phone_el.textContent = data.phone
        email_el.textContent = data.email
        
        btn.append(img)
        li.append(name_el, phone_el, email_el, btn)
        ul.append(li)
        

    }
}
document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault()

    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value

    if(name.length < 4 || !reg.test(phone)) return alert("Ism yoki telefon raqam noto'g'ri")
    
    let data = {
        name,
        phone,
        email
    }
    datas.push(data)
    createEl(datas)

    document.querySelector('.delete_btn').addEventListener('click', event => {
        let closest = event.target.closest('li')
        let name = closest.querySelector('.ism')
        datas = datas.filter(el => el.name != name.textContent)
        console.log(datas);
        
        createEl(datas)
        
    })
    
})

