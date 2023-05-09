const container = document.getElementById('container');
const btn = document.querySelectorAll('.btn');
let rank;
const submit = document.getElementById('submit');

btn.forEach((botao)=>{
  botao.addEventListener('click', ()=>{
    btn.forEach((item)=>{
      item.classList.remove('ativado')
    })
    botao.classList.add('ativado')
    rank = botao.value
    console.log(rank)
  })
})

submit.addEventListener('click', ()=>{
  if(rank){
    container.innerHTML = `<main class="container" id="container">
    <section class="card">
      <section class="card-container">
        <img class="thank-img" src="./images/illustration-thank-you.svg" alt="">
        <div class="seletor"><p>You selected ${rank} out of 5</p></div>
        <div class="text-thank">
          <h1 class="thank-you">Thank you!</h1>
          <p>We appeciate you taking the time to give a
            rating.If you ever need more supoort, don't 
            hesitate to get in touch!
          </p>
        </div>
      </section>

    </section>

  </main>`
  }else{
    
      alert('Selecione um número porfavor!!');
    }
})




