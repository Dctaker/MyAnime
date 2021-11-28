function caroseulA(){
    const lancamentosItens = document.querySelectorAll('[data-carousel="ultimos-lancados"]')
    const btnBack = document.querySelector('[data-carousel="lancados-back"]')
    const btnNext = document.querySelector('[data-carousel="lancados-next"]')
    const imprimir =  document.querySelector('.imprimir')
    let valor = 0

    btnNext.addEventListener('click', proximoItem)
    btnBack.addEventListener('click', itemAnterior)

    function proximoItem(){
        
        valor = valor + 170
        lancamentosItens.forEach((item)=>{
            if(valor > 510){
                valor = 0
                item.style.transform = `translateX(${-valor}px)`
            }
            else{
                item.style.transform = `translateX(${-valor}px)`
            }
        })

        let tamanhoTela = document.body.clientWidth
        
        
    }

    function itemAnterior(){
        valor = valor -170
        lancamentosItens.forEach((item)=>{
            if( valor < 0){
                valor = 510
                item.style.transform = `translateX(${-valor}px)`
            }
            else{
                item.style.transform = `translateX(${-valor}px)`
            }
        }) 
    }

}
caroseulA()

function caroseulB(){
    const adicionadosItens = document.querySelectorAll('[data-carousel="ultimos-adicionados"]')
    const btnBack = document.querySelector('[data-carousel="adicionados-back"]')
    const btnNext = document.querySelector('[data-carousel="adicionados-next"]')
    const imprimir =  document.querySelector('.imprimir')
    let valor = 0
    const info = document.querySelector('[data-informativo="info-menu"]')

    btnNext.addEventListener('click', proximoItem)
    btnBack.addEventListener('click', itemAnterior)

    function proximoItem(){
        valor = valor + 170
        adicionadosItens.forEach((item)=>{
            if(valor > 510){
                valor = 0
                item.style.transform = `translateX(${-valor}px)`
            }
            else{
                item.style.transform = `translateX(${-valor}px)`
            }
        })
    }

    function itemAnterior(){
        valor = valor -170
        adicionadosItens.forEach((item)=>{
            if( valor < 0){
                valor = 510
                item.style.transform = `translateX(${-valor}px)`
            }
            else{
                item.style.transform = `translateX(${-valor}px)`
            }
        }) 
    }

}

caroseulB()
const item = document.querySelector('.lancamentos_itens')




function exibiInfo(){
    const info = document.querySelector('[data-informativo="info-menu"]')
    const btnInfo = document.querySelector('[data-informativo="btn-menu"]')

    btnInfo.addEventListener('click', fechaInfo)

    function fechaInfo(){
        info.style.display = 'none'
    }
}

exibiInfo()


function modalHeader(){
    const searchModal = document.querySelector('[data-modal="searchAnime"]')
    const modal = document.querySelector('.modal')
    const btnCloseSearch = document.querySelector('[data-modal="btn-CloseSearch"]')
    const btnOpenSearch = document.querySelector('[data-modal="btn-OpenSearch"]')

    btnOpenSearch.addEventListener('click', exibiModal)
    btnCloseSearch.addEventListener('click', fechaModal)

    function exibiModal(){
        searchModal.classList.add('ativo')
        
    }

    function fechaModal(){
        searchModal.classList.remove('ativo')
        
    }
}

modalHeader()

function controleTitulo (){
    const titulos = document.querySelectorAll('[data-titulo="top10"] h3')
    const limiteTitulo = 16

    for(let t of titulos){
        const limite = t.innerText.length > limiteTitulo
        const validador = limite? '...' : ''
        t.innerText = t.innerText.substring(0, limiteTitulo) + validador
    }
}

controleTitulo()

function menuMobile(){
    const menu = document.querySelector('[data-mobile="menu"]')
    const nav = document.querySelector('[modal-mobile="nav_header"]')
    const btnFechar = document.querySelector('[data-mobile="fechar"]')

    menu.addEventListener('click', ()=>{
        nav.classList.add('ativo')
        menu.style.display = 'none'
        btnFechar.classList.add('ativo')
    })

    btnFechar.addEventListener('click', ()=>{
        nav.classList.remove('ativo')
        menu.style.display = 'block'
        btnFechar.classList.remove('ativo')
    })
}

menuMobile()