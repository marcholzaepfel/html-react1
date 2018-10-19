import React from 'react';






export class Parent6 extends React.Component {


    render(){
        const { display6 } = this.props;

        const div6 = {
                background:'black',
                height: '600px',
                width: '100%',
              
                div61 : {
                
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '400px',
                    width: '100%',
            
                    div611 : {
                
                        color:'gray',
                        height:'250px',
                        width:'350px',
                    },
            
                    div612 : {
                        color:'gray',
                        height:'200px',
                        width:'300px',
                
                    },
            
                    div613 : {
                        color:'gray',
                        height:'200px',
                        width:'300px',  
                    }
                },
                
                div62 : {
                    display: 'flex',
                    justifyContent: 'center',
                    borderTop: '1px solid gray',
                    color: 'gray',
                    margin: '0 20%',
                }   

             }


        return(
             <div>
                {display6}
             </div>
           
           )
        }   
    }