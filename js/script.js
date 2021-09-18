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
