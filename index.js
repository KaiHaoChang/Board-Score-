let players = [
    { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
    { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
    { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
    { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
    { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
  ]
  
  const dataPanel = document.querySelector('#data-panel')
  
  
  // write your code here
  function displayPlayerList(data){
    let htmlContent = ''
        data.forEach(element => {
            htmlContent += `</tr>`
            for( let key in element){
              if(key ==='name'){
                htmlContent += `<td>${element[key]}`                  
              } else {
                htmlContent += `<td>
                                <span>${element[key]}</span>
                                <i class='fa fa-plus-circle up'></i>
                                <i class='fa fa-minus-circle down'></i>
                                </td>
                `
              }              
          }
            htmlContent += `</tr>`
        });
    dataPanel.innerHTML = htmlContent
    }

  displayPlayerList(players)
  dataPanel.addEventListener('click',event => {
    let score = event.target.parentElement.children[0]
    if(event.target.matches('.fa-plus-circle')){
      score.innerHTML++      
    } else if(event.target.matches('.fa-minus-circle')){
        if(score.innerHTML > 0){
          score.innerHTML--  
        } else {
          score.innerHTML = 0
        }
    }
  })