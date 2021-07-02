function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // vai pegar o ano com os quatro digitos vai pegar 2021 e não só 21
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')



    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //ele vai criar uma tag img para mim pelo JS
        img.setAttribute('id', 'foto')//estou atribuindo a minha tag um id = 'foto'
        if (fsex[0].checked)  {//aqui vai checar se foi masculino ou feminino
        gênero = "Homem"
        if(idade >= 0  && idade < 10){
        //criança
        img.setAttribute('src', 'bebe.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovemh.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adultoh.png')
        }else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
    }else if (fsex[1].checked){
        gênero = 'Mulher'
        if(idade >= 0  && idade < 10){
            //criança]
            img.setAttribute('src', 'bebem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemm.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultom.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
    }
    res.style.textAlign = 'center' //alinhando o texto pelo JS
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)//executar o elmento que foi criado
        }

    }
