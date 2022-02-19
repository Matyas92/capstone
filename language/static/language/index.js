document.addEventListener('DOMContentLoaded', function () {

 let overview =  document.querySelector('#overview')
 let list_quizzes = document.querySelector('#list_quizzes')
 let button_quizzes = document.querySelector('#button_quizzes')

 let reviews = document.querySelector('#reviews')
 let coursesButton = document.querySelector('#coursesButton')
 let coursesButton1 = document.querySelector('#coursesButton1')

 overview.addEventListener('click', () => {load_overwiev()})
 list_quizzes.addEventListener('click', () => {load_quizzes()})
 button_quizzes.addEventListener('click', () => {load_quizzes()})

 reviews.addEventListener('click', () => {load_reviews()})
 coursesButton.addEventListener('click', () => {load_courses()})
 coursesButton1.addEventListener('click', () => {load_courses()})
});

function load_overwiev() {

  document.querySelector(".kurs").style.display = 'none';
  document.querySelector(".rews").style.display = 'none';
  document.querySelector(".courses").style.display = 'none';
  console.log()
  element.innerHTML = ""

}


let element = document.createElement('article');
console.log(element)


function load_quizzes() {
  document.querySelector(".kurs").style.display = 'inline';
  document.querySelector(".rews").style.display = 'none';
  document.querySelector(".courses").style.display = 'none';



fetch('/quizzes')
      .then(response => response.json())
      .then(kurzus => {
        kurzus.forEach(kurz => {

            let text = `

            <div class="col-sm-20">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">${kurz.title}</h5>
              <p class="card-text">${kurz.subject} </p>
              <a href="language-quiz/${kurz.title}">
              <button id="" class="btn btn-primary btn-lg" type="button">Click to start</button>
            </a>  

              </div>
            </div>
          </div>


            `

            element.innerHTML += text

        })
        document.querySelector(".kurs").append(element)

    })
    element.innerHTML = ""


}



let elementrev = document.createElement('div');
let commentRev = document.createElement('div');

let elementCourse = document.createElement('div');

function load_reviews() {


    document.querySelector(".kurs").style.display = 'none';
    document.querySelector(".rews").style.display = 'block';
    document.querySelector(".toComment").classList.remove("d-none")

    document.querySelector(".courses").style.display = 'none';


 


    fetch('/reviews')
          .then(response => response.json())
          .then(reviews => {
            reviews.forEach(review => {
                const text = `
                <div class="p-5 mb-4 bg-light rounded-3 border border-3">
                <div class="container-fluid py-5">
                <h3 class="display-6 fw-bold">${review.title}</h3>
                  <h4 class="display-6 fw-bold">${review.comment}</h4>
                  <h4 class="display-6 fw-bold">${review.date}</h4>

                </div>
              </div>
                `
                elementrev.innerHTML += text

            })


            document.querySelector(".rews").append(elementrev)

        })

        elementrev.innerHTML = ""


    }

 
    function load_courses() {
      console.log("WORK")
      document.querySelector(".kurs").style.display = 'none';
      document.querySelector(".rews").style.display = 'none';
      document.querySelector(".courses").style.display = 'block';

  
      fetch('/courses')
            .then(response => response.json())
            .then(courses => {
              courses.forEach(course => {
                  const text = `
                  <div class="p-5 mb-4 bg-light rounded-3">
                  <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">${course.title}</h1>
                    <p class="col-md-8 fs-4">${course.content} </p>
                    
                    <a href="oncourse/${course.title}">
                    <button id="" class="btn btn-primary btn-lg" type="button">Click to start</button>
                  </a>  


                  </div>
                </div>
                  `
                  elementCourse.innerHTML += text
              })
  
              document.querySelector(".courses").append(elementCourse)
          })
          elementCourse.innerHTML = ""
      }
  
  