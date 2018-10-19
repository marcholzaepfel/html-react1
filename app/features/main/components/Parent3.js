import React, { Component } from 'react';


const styles = 
{
    display: 'flex',
    flexDirection: 'column',
    height: '1350px',
    width: '100%',
   
    firstDivision: 
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '350px',
        width: '100%',
        marginTop: '100px',
        
        title: 
        {
            fontSize: '40px',
            textTransform: 'uppercase',
            color: 'gainsboro',
        },

        wording:
         {
            textAlign: 'center',
            color: 'rgb(190, 180, 180)',
            fontSize: '17px',
        }
    },

     secondDivision: 
     {
         display: 'flex',
         justifyContent: 'space-around',
         alignItems: 'center',
         marginBottom: '50px',
         
         article1:
          {
             height: '350px',
             width: '350px',
             background: 'rgb(190, 180, 180)',
             padding: '25px',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             opacity: '0.6',
             borderRadius: '20px',
             border: '1px solid black',
         },

         article2:
          {
             height: '350px',
             width: '350px',
             background: 'rgb(190, 180, 180)',
             padding: '25px',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             opacity: '0.6',
             borderRadius: '20px',
             border: '1px solid black',
         },

         article3: 
         {
             height: '350px',
             width: '350px',
             background: 'rgb(190, 180, 180)',
             padding: '25px',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             opacity: '0.6',
             borderRadius: '20px',
             border: '1px solid black',
         }
     },

     thirdDivision:
      {
         display: 'flex',
         justifyContent: 'space-around',
         alignItems: 'center',
         
          article1:
          {
             height: '350px',
             width: '350px',
             background: 'rgb(190, 180, 180)',
             padding: '25px',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             opacity: '0.6',
             borderRadius: '20px',
             border: '1px solid black',
         },

         article2: 
         {
             height: '350px',
             width: '350px',
             background: 'rgb(190, 180, 180)',
             padding: '25px',
             display: 'flex',
             flexDirection: 'column',
             alignitems: 'center',
             opacity: '0.6',
             borderRadius: '20px',
             border: '1px solid black',
         },

         article3: 
         {
             height: '350px',
             width: '350px',
             background: 'rgb(190, 180, 180)',
             padding: '25px',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             opacity: '0.6',
             borderRadius: '20px',
             border: '1px solid black',
         }
     }
 }  
 




export default class Parent3 extends Component {



 render(){

   return(

            <div style={styles}>
                <div style={styles.firstDivision}>
                    <div style={styles.firstDivision.title}></div>
                    <div style={styles.firstDivision.wording}></div>
                </div>
                <div style={styles.secondDivision}>
                    <div style={styles.secondDivision.article1}></div>
                    <div style={styles.secondDivision.article2}></div>
                    <div style={styles.secondDivision.article3}></div>
                 </div>
                <div style={styles.thirdDivision}>
                    <div style={styles.thirdDivision.article1}></div>
                    <div style={styles.thirdDivision.article2}></div>
                    <div style={styles.thirdDivision.article3}></div>
                </div>
            </div>
        )
    }
}