import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info = {
    contact: [["assets/fb.png", "https://www.facebook.com/shrisailaesh.raja"],
              ["assets/insta.png", "https://instagram.com/sailaeshraman?igshid=YmMyMTA2M2Y="],
              ["assets/wa.png", "https://wa.me/918939620275"],
              ["assets/in.png", "https://www.linkedin.com/in/shri-sailaesh-bb321220a/"],
              ["assets/twitter.png", "https://twitter.com/SSailaesh?s=08"]],
    education: [{
                  degree: "B.E",
                  university_name: "RAJALAKSHMI ENGINEERING COLLEGE",
                  course: "Computer Science Engineering",
                  score: "7.58 CGPA",
                  period: "2018-2022"
                },{
                  degree: "HSC",
                  university_name: "D.A.V MATRICULATION HIGHER SECONDARY SCHOOL",
                  course: "Computer Science (102)",
                  score: "72.5%",
                  period: "2016-2018"
                },{
                  degree: "SSLC",
                  university_name: "D.A.V SENIOR SECONDARY SCHOOL",
                  course: "TN State Board",
                  score: "85%",
                  period: "2015-2016"
                }],
    projects: [
                {
                  project_name: "QR based 24/7 Pickup Service for Online Products",
                  tech_used: "Python & java",
                  proj_img: "assets/zxc.jpeg",
                  proj_desc: "A fully automatic dispensary mechanism which reduces risk factors and increases flexibilty over the normal delivery system.",
                  proj_link: "https://drive.google.com/file/d/1QZrelXdbJeCI5VktUg8RobP5y8dVB_9Q/view?usp=sharing"
                },
                {
                  project_name: "Personal Portfolio",
                  tech_used: "Html, Css & JS",
                  proj_img: "assets/qwe.jpg",
                  proj_desc: "It is a portfolio of myself which has minimal features.",
                  proj_link: "https://shrisailaeshraja.netlify.app"
                },
                {
                  project_name: "IOT Forest Fire Detection System",
                  tech_used: "C++ & Raspberry Pi",
                  proj_img: "assets/asd.jpeg",
                  proj_desc: "To detect the forest fire we propose the IOT based Forest Fire deductor using temperature and humidity sensors .This is a model prototype . This sensing system uses Arduino. ",
                  proj_link: "https://drive.google.com/file/d/1cmZ9v1okqBu_NIac9YO1ZpLY7DvUaiAN/view?usp=sharing"
                }
              ],
    skills: [["Python", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png", "Expert"],
              ["IoT", "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Raspberry_Pi_Logo.svg/100px-Raspberry_Pi_Logo.svg.png", "Expert"],                 
              ["HTML", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png", "Intermediate"],
              ["CSS", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png", "Intermediate"],
              ["JS", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433", "Intermediate"],
              ["Java", "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png", "Intermediate"],
              ["C++", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/120px-ISO_C%2B%2B_Logo.svg.png", "Beginner"],
              ["SQL", "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/100px-MySQL_logo.svg.png", "Beginner"]],
    connect: ["gkramanshrivijay@gmail.com", "91+ 8939620275"], //Connect Fixed Size, Only 2 is allowed
    intro: ["CS Engineer", "A Python developer", "IoT Proficient"] //Intro Fixed Size, Only 3 is allowed
  }
}
