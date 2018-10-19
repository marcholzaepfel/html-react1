import React, { Component } from 'react';



const styles =
{   
    display: 'flex',
    flexDirection: 'column',
    height: '250px',
    width: '100%',
    position: 'fixed',
    zIndex: '4',
    top: '0',
    left: '0',
    background: 'white',
    
    firstDivision: 
    {
        height:'100px',
        width:'100%',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',  
       
        content: 
        {
        
        },

        sideButton: 
        {
            background: 'black',
            height: '50px',
            width: '200px',
            textAlign: 'center',
            color: 'white',

        }
    },

    secondDivision: 
    {
        height: '100px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        icon: 
        {
            display: 'flex',

            facebook: 
            {
                height: '50px',
                width: '50px',
                background: 'rgb(190, 180, 180)',
                margin: '0 20px',
            },

            twitter:
            {
                height: '50px',
                width: '50px',
                background: 'rgb(190, 180, 180)',
                margin: '0 20px',
            },

            google:
             {
                height: '50px',
                width: '50px',
                background: 'rgb(190, 180, 180)',
                margin: '0 20px',
            }
        },

        button:
         {
            display: 'flex', 

            home:
             {
                height: '50px',
                width: '50px',
                background: 'rgb(190, 180, 180)',
                margin: '0 20px',
            },

            back: 
            {
                height: '50px',
                width: '50px',
                background: 'rgb(190, 180, 180)',
                margin: '0 20px',
            },

            next: 
            {
                height: '50px',
                width: '50px',
                background: 'rgb(190, 180, 180)',
                margin: '0 20px',
            }
        }
    },
    thirdDivision: {
        background: 'black',
        height: '25%',
        width: '100%',
        
        title: 
        {
            color: 'white',
            font: 'bold',
        }
    }
}



export default class Parent1 extends Component {
    render() {
        //  const { display1 } = this.props;
          console.log("display1");
        return (
            <div style={styles}>
                <div style={styles.firstDivision}>
                    <div style={styles.firstDivision.content}></div>
                    <div style={styles.firstDivision.sideButton}></div>
                </div>
                <div style={styles.secondDivision}>
                    <div style={styles.secondDivision.icon}>
                        <div style={styles.secondDivision.icon.facebook}></div> 
                        <div style={styles.secondDivision.icon.twitter}></div> 
                        <div style={styles.secondDivision.icon.google}></div> 
                    </div>
                    <div style={styles.secondDivision.button}>
                        <div style={styles.secondDivision.button.home}></div>
                        <div style={styles.secondDivision.button.back}></div>
                        <div style={styles.secondDivision.button.next}></div>
                     </div>
                </div>
                <div style={styles.thirdDivision}>
                    <div style={styles.thirdDivision.title}></div> 
                </div>
            </div>
        );
    }
}