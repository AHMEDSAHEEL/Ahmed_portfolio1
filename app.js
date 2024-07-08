const score = document.querySelector('.score');
const heading = document.querySelector('.education-type');
const btns = document.querySelectorAll('.btn')
const imgList =["CGPA: 8.3","74.5%","92.6%"]
const headList=["Under Graduate - BE","12th - State Board","10th - State Board"]




var index=0;
btns.forEach((button)=>{
  button.addEventListener('click',()=>{
    console.log(button);
    console.log(btns);
      if(button.classList.contains('btn-left')){
          index--;
          
          
          if(index<0){
              index = imgList.length-1;
              console.log(index);
          }
          
             score.innerHTML=imgList[index];
             heading.innerHTML=headList[index];
      }
      else{
          index++;
          if(index===imgList.length){
              index = 0;
          }
          score.innerHTML=imgList[index];
          heading.innerHTML=headList[index];
      }
  })
})