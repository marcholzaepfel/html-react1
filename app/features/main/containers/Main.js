import React from 'react';

import MainComponent from "../components/MainComponent";


const display1 = {
  title: 'Industrious: A modern business-oriented design with a video banner.',
  message: 'Posted on January 2, 2018 in Responsive HTML5 Templates',
  header:'Download'
}
const display2 = [
  {
    id:20,
     image: '<img src="banner.jpg" alt="banner" width="100%" height="800px">',
  },
  {
    id:211,
     message: 'Industrious',
  },
  {
    id:212,
     message: 'A responsive business oriented template with a video backgrounddesigned by TEMPLATED and released under the Creative Commons License',
  } 
]

const display3 = [
 {
   id:311,
     header: 'SEM TURPIS AMET SEMPER',
 },
 {
   id:312,
   message: 'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'
 },
 {
   id:321,
     header: 'FEUGIAT CONSEQUAT',
     image :'test.jpeg',
     message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.',  
 },
 {
   id:322,
     header: 'ANTE SEM INTEGER',
     image: 'test2.jpeg',
     message:'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
 },
 {
   id:323,
     header: 'IPSUM CONSEQUAT',
     image: '',
     message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus'
  },
  {
    id:331,
     header: 'INTERDUM GRAVIDA',
     image: 'img src="reactlogo.png" alt="image" width="100px" height="100px"',
     message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
  },
  {
   id:332,
    header: 'FAUCIBUS CONSEQUAT',
    image: 'img src="reduxlogo.png" alt="image" width="100px" height="100px"',
    message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
 },
 {
   id:333,
    header: 'ACCUMSAN VIVERRA',
    image: 'img src="angularlogo.png" alt="image" width="100px" height="100px"',
    message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
 }
]

const display4 = [
 {
   id:41,
    header: 'CURABITUR ULLAMCORPER ULTRICIES',
    message: 'Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit<br> adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.'
 },
 {
   div:42,
   image: 'img src="image3.png" alt="image" width="100%" height="400px"'
 }
] 

const display5 = [
 {
   id:511,
     header: 'Faucibus Consequat Lorem',    
 },
 {
   id:512,
     message: 'In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.'
 },
 {
   id:5212,
     message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
 },
 {
   id:52111,
     image: 'img class = "imgcircle" src="pic01.jpg" alt="image" width="50px" height="50px"',
 },
 {
   id:52112,
     message: 'class="highlighted">Jane Doe</span> CEO - ABC Inc'   
 },
 {
   id:5222,
     message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
 },
 {
   id:52211,
     image: 'img class = "imgcircle" src="pic03.jpg" alt="image" width="50px" height="50px"',
 },
 {
   id:52212,
     message: 'class="highlighted">John Doe</span> CEO - ABC Inc'
 },
 {
   id:5232,
     message: 'Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
 },
 {
   id:52311,
     image: 'img class = "imgcircle" src="pic02.jpg" alt="image" width="50px" height="50px"',
 },
 {
   id:52312,
     message: 'class="highlighted">Janet Smith</span> CEO - ABC Inc' 
 }   
]

const display6 = [
 {
   id:611,
     header: 'ACCUMSAN MONTES VIVERRA',
     message: 'Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.'
 },
 {
   id:612,
     header: 'SEM TURPIS AMET SEMPER',
     message: 'Dolor pulvinar sed etiam.',
     message: 'Etiam vel lorem sed amet.',
     message: 'Felis enim feugiat viverra',
     message: 'Dolor pulvinar magna etiam.',
 },
 {
   id:613,
     header: 'MAGNA SED IPSUM',
     message: 'Twitter',
     message: 'Facebook',
     message: 'Instagram',
     message: 'Github'  
 },
 {
   id:6-2,
     message: '© Untitled. Photos Unsplash, Video Coverr.'
 }
]



export class MainContainer extends React.Component {

  
  render() {     
    return (
      <div>
        <MainComponent/>
      </div>
    );
  }
}
