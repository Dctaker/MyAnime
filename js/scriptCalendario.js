function tabMenu(){
    
    const menu = document.querySelectorAll('[data-calendario="menu-dias"] li')
    const section = document.querySelectorAll('[data-calendario="tab-menu"]')
    section[0].classList.add('ativo')
    menu[0].classList.add('ativo')

    function tabContent(index){
        section.forEach((div)=>{
            div.classList.remove('ativo')
        })
        menu.forEach((div)=>{
            div.classList.remove('ativo')
        })
        section[index].classList.add('ativo')
        menu[index].classList.add('ativo')
    }

    menu.forEach((dia, index)=>{
        dia.addEventListener('click', ()=>{
            tabContent(index)
        })
    })

}

tabMenu()


