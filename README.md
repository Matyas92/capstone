# What is it about?

This is and educational site for learners. People who are registered and logged in, can do built-in (by admin) quizzes 
and also take courses and also create courses. The back-end stores the data of how many quizzes, coures (created or did)
they made, and many things as well that I will elaborate below.

Link of my video on the the final project:  Uploaded on [Youtube](https://youtu.be/iAnBZCSZy5g/).

# Distinctiveness and Complexity

##### Why I believe my project satisfies the distinctiveness and complexity requirements: #####

- My web application has different login, logout, register forms and apprehensions. Altough the learned methods was used
  by me, and always applied them when I felt the need.

- When the user was not logged in, when visiting the page, it redirects the user to the login form in order to use the equipments.

- The main site, the home shows the datas which was rendered using back-end django in that case. When clicked on the quiz it
  redirects to a new page where javascript shows with a control flow(condition) what to add to the page content, using DOM here.
  The Javascript looks for the form when submit steps into action, and inside the form it searches the name of the inputs in order
  to valuate the values put in them. A next (or retry) button appears according to the result. Meaning when clicked on next It 
  gives to the backend django the result to increment the given data. It depends on the context of course. This proves the complexity
  and distinctiveness of using back-end (Django) and front-end (Javascript) in this case. I added some css in this to animate a little.
  
 - The info anchor/list on the navbar directs the user to the info panel, where only the admin can post anything, mostly for the purpose
  of conveying information about the news and informations. The javascript brings the page with DOM, it uses front-end features. User stays
  in the same html page as in the case of the home site.
  
  -When clicked on the courses as mentioned above, here also the javascript front-end steps into action and using DOM it renders the page
  using display block/none approach. When the 'click to start' pressed on any given course introduction, it also functions with DOM nad djago 
  uses back-end to redirect the user to the page designed to the course-page. When clicked on a course, it renders the video and text.
  The video embedded using here the EmbedVideoField which was installed by django-embed-video from pip.
  
  - When clicked on the rounded profile picture the bootstrap feature appear and lists the selections. When clicking on 'New Project..' or 'Profile'
   It step into another html page using back-end django here. A left-arrow shows the way back to the javascript lead page.
   The clickable logout in the dropdown menu also gives a new page with the selectable choices. And a message with infos shows up using Javascript
   as well.
   
   The abovementioned statements - in my opinion - proves the distinctiveness and complexity of my projects. 
  
  
  # What’s contained in each file I created.
  1. Language
    - static\language - I stored here tha css and js parts.
    
     - headers.css -> Little adjustment on the navbar.
     
     - index.js -> DOM contents whick loads the quiz, info, courses contents in the index.html and with the help of DOM it displays 
       with block or none the give datas. In order not to increment the number or datas, everytime when clicked on a button, the innerHTML of the given variable 
       will be nullified after in loads all the contents that were needed. Fetch API was used here with Js. Jsonified datas was sent back to display in HTML.
        
     - language-quiz.css -> Uses animation keyframes style, with transition to make it more appealing.
     
     - language-quiz.js -> Control flow method (condition precisely in this case) if the give condition is met, the DOM put into HTML and displays on the
       language-quiz.html. A from is given here, when submitted the form gives the input name and its values when met with the request of the DOM here.
       It uses loop to compare the correct answers with the given answers in the quiz. Submitting this from according to the result it gives the next button
       ( in case above 75% ) or retry button. In case of 'Next' backend will save the result and django will keep it. In case of the retry, it loads the page 
       again in order to fill it once more. InnerText, ForEach, arrays, append method were used here mostly.
     
     - login.css -> Basic bootstrap 5 codes here used.
   

   - Templates
   
     - created_course.html -> Django redirect here and gives datas so that it lists the courses from database. When clicked on a course it will render into another
       on_course.html page. 
       
     - index.html -> It is the basic html which was used by index.js. Is shows the quiz, info, course datas. It also displays the finished courses and quizzes and 
       furthermore the number of all the coures, quizzes.
       
     - language-quiz.html -> This page is used by language-quiz.js which activates DOMs to give HTML datas according to the abovementioned conditions.
     
     - layout.htm -> Basic template to use in pages.
     
     - login_register.html -> bootstrap page to use login form. The form is POST method which goes to django so that it saves in back-end .
     
     - on_course.html -> Renders the give course which was clicked on the previous page, displays the data and text, videos as well.
      
     - profile_edit.html -> Projects the editable forms here using django to save the changed data.
     
     - profile.html -> Profile with all the informations about the profile rendered with django.
     
   - admin.py -> registered sites imported from models.py.
   
   - forms.py -> Register forms here with super method with widgets, edit forms with the same features as preceding. Course creation form with the same, and review
     form creation which is a comment style section for the admin to add texts here.
     
   - models.py -> Profile,Course,Quiz, Review, Comment. All with datas, some serialized which was rendered by Javascript. In Profile there is a CreateProfile form 
     which creates a profile everytime a user registered. Also when deleting profile, the user deleted as well and vice versa. upDateProfile will give the opportunity
     to edit the profile. The Comment class uses ordering by -date so that the newest post will be on top.
     
   - urls.py -> Used several urlpatterns here imported from views.
   
   - views.py -> Imported all the models, User, login_required method, login,logout,authenticate, reverse, render, redirect. Login required requirements are contributed
     to the classes that renders to the unauthenticated user to the login form.
  

 #  How to run my application. #
- [x] git repository   
- [x]  Django, python installed check
- [x]  python manage.py runserver    

#### Login as admin -> username: 1 - password : 1 ####

  ### Landing page here to navigate ###

![This is an image](https://i.postimg.cc/5tVBrVYN/1.png)


  ### When clicked on quiz this was displayed ###

![This is an image](https://i.postimg.cc/kg09871s/2.png)


  ### When coosing on any quiz by clicing on a button, here comes the page ###

![This is an image](https://i.postimg.cc/hvZRGnQ9/3.png)


  ### Going back to the Home click on 'Info' on navbar this page shows up (only admin can comment) ###

![This is an image](https://i.postimg.cc/bwtfqKyt/4.png)

  ### Click on navbar ' back to the Home click on 'Courses' displays all the courses ###

![This is an image](https://i.postimg.cc/7L1v20TP/5.png)


  ### Click on for example the spanish the datas of this course displayed ###

![This is an image](https://i.postimg.cc/PxdgzJmW/6.png)


  ### Click on the rounded image options displayed ###

![This is an image](https://i.postimg.cc/gJ4fMpDf/7.png)


  ### Clicking on 'Create course' form displayed ###

![This is an image](https://i.postimg.cc/QCyv3qvm/8.png)


  ### Clicking on 'Profile' form profile site shows up ###

![This is an image](https://i.postimg.cc/44LDVJnc/9.png)

  ### When on 'Logout' was clicked, the login form displayed here ###

![This is an image](https://i.postimg.cc/MKgg3d7K/10.png)

