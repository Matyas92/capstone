const currentBlock = document.querySelector('.current-block')
const sendCheckButton = document.querySelector('.sendCheckButton')
const retryButton = document.querySelector('.retryButton')


var url = window.location.href.split('/').pop().toLocaleLowerCase()

let element = document.createElement('div')


if (url == "english"){
        
    let text = `
          
    <h2 class="text-center">English</h2>

    <div class="text-center resultShower">
       <div class="result">
           <p> Result: <div class="finalNumber">0% </div>  </p>
       </div>

   </div>


    <div class="wrapper">

    <form class="quizStart">

    <div class="container px-4 py-5" id="featured-3">
                
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg>
            </div>

            <h2>1. Question?</h2>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="q1" value="A" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    A
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="q1" value="B" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                 B
                </label>

              </div>

          </div>

          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"/></svg>
            </div>

            <h2>2. Question?</h2>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="q2" value="A" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    A
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="q2" value="B" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  B
                </label>

              </div>

          </div>

          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
            </div>

            <h2>3. Question ?</h2>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="q3" value="A" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    A
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="q3" value="B" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  B
                </label>

          </div>
        </div>

          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
              <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
            </div>

            <h2>4. Question ?</h2>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="q4" value="A" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    A
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="q4" value="B" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  B
                </label>
          </div>
        </div>
      </div>
      <input id="submitResultButton" type="submit" class="btn btn-warning btn-lg" value="Send">

    </div>
            </form>


     </div>


        `

        element.innerHTML += text

}

if (url == "german"){
        
  let text = `
        
  <h2 class="text-center">German</h2>

  <div class="text-center resultShower">
     <div class="result">
         <p> Result: <div class="finalNumber">0% </div>  </p>
     </div>

 </div>


  <div class="wrapper">

  <form class="quizStart">

  <div class="container px-4 py-5" id="featured-3">
              
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg>
          </div>

          <h2>1. Question?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q1" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q1" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
               B
              </label>

            </div>

        </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"/></svg>
          </div>

          <h2>2. Question?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q2" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q2" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>

            </div>

        </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
          </div>

          <h2>3. Question ?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q3" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q3" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>

        </div>
      </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
          </div>

          <h2>4. Question ?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q4" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q4" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>
        </div>
      </div>
    </div>
    <input id="submitResultButton" type="submit" class="btn btn-warning btn-lg" value="Send">

  </div>
          </form>


   </div>


      `

      element.innerHTML += text

}


if (url == "danish"){
        
  let text = `
        
  <h2 class="text-center">Danish</h2>

  <div class="text-center resultShower">
     <div class="result">
         <p> Result: <div class="finalNumber">0% </div>  </p>
     </div>

 </div>


  <div class="wrapper">

  <form class="quizStart">

  <div class="container px-4 py-5" id="featured-3">
              
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg>
          </div>

          <h2>1. Question?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q1" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q1" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
               B
              </label>

            </div>

        </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"/></svg>
          </div>

          <h2>2. Question?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q2" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q2" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>

            </div>

        </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
          </div>

          <h2>3. Question ?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q3" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q3" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>

        </div>
      </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
          </div>

          <h2>4. Question ?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q4" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q4" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>
        </div>
      </div>
    </div>
    <input id="submitResultButton" type="submit" class="btn btn-warning btn-lg" value="Send">

  </div>
          </form>


   </div>


      `

      element.innerHTML += text

}

   

if (url == "spanish"){
        
  let text = `
        
  <h2 class="text-center">Spanish</h2>

  <div class="text-center resultShower">
     <div class="result">
         <p> Result: <div class="finalNumber">0% </div>  </p>
     </div>

 </div>


  <div class="wrapper">

  <form class="quizStart">

  <div class="container px-4 py-5" id="featured-3">
              
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"/></svg>
          </div>

          <h2>1. Question?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q1" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q1" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
               B
              </label>

            </div>

        </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"/></svg>
          </div>

          <h2>2. Question?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q2" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q2" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>

            </div>

        </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
          </div>

          <h2>3. Question ?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q3" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q3" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>

        </div>
      </div>

        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
          </div>

          <h2>4. Question ?</h2>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="q4" value="A" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                  A
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q4" value="B" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                B
              </label>
        </div>
      </div>
    </div>
    <input id="submitResultButton" type="submit" class="btn btn-warning btn-lg" value="Send">

  </div>
          </form>


   </div>


      `

      element.innerHTML += text

}

  

    currentBlock.append(element)



    var form = document.querySelector('.quizStart')
    let result = document.querySelector('.finalNumber')
    let correctAnsw = ["B","B","B","B"];
    
    document.querySelector(".resultShower").style.display = 'none';

    result.classList.add('d-none')

form.addEventListener('submit', e => {
    scrollTo(0,0)

    result.classList.remove('d-none')
    document.querySelector(".resultShower").style.display = 'block';

e.preventDefault();

var score = 0;
const userTipp = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

userTipp.forEach((answ,index)=> {
if(answ === correctAnsw[index]){
    score += 25;
}
result.innerHTML = score + " %";
console.log(result)
});

//document.querySelector('finalNumber').classList.remove('d-none')




if(score >= 75){
    document.querySelector("#submitResultButton").style.display = 'none';

    sendCheckButton.classList.remove('d-none')

}else{
    document.querySelector("#submitResultButton").style.display = 'none';

    var retryText = document.createElement('div')

    retryButton.classList.remove('d-none')
    var failureText = ` <h2> You have not reached the eligible points! </h2> 

    <button class="clickToRetry btn btn-warning"> Retry </button>
    `
    retryText.innerHTML += failureText

    retryButton.append(retryText)

}
document.querySelector('.clickToRetry').addEventListener('click', () => {

    location.reload();

})


});


