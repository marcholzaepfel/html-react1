import React, { Component } from 'react';


const styles = {
   
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '800px',
    width: '100%',
    marginTop: '250px',
    position:'relative',  
    
    image:
     {
        position: 'absolute',
    },

    design:
     {
        display: 'flex',
        background: 'linearGradient(135deg, #ce1b28 0%, #111111 74%)',
        opacity: '0.6',
        width: '100%',
        height: '800px',
        position: 'absolute',
        top: '0', 
     },

    content:
     {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color:'white',
        zIndex:'2',        
        
        title: 
        {
            fontSize:'70px',
         },  

        wording: 
         {
            textAlign:'center',
            fontSize: '26px',
            color:'rgb(170, 160, 160)',      
          }
       }
    }


export default class Parent2 extends Component {



    render(){
         return(
             <div style={styles}>
                <div style={styles.image}></div>
                <div style={styles.design}></div>
                <div style={styles.content}>
                    <div style={styles.content.title}></div>
                    <div style={styles.content.wording}></div> 
                </div>
             </div>
        )
    }
}
