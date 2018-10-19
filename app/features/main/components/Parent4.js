import React, { Component } from 'react';



const styles = {
    display: 'flex',
    
    title:
     {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '400px',
        width: '100%',
        position: 'absolute',
        zIndex: '1',
        color: 'rgb(190, 180, 180)',
        textAlign: 'center',
    },

    image: {
        position: 'relative',
        opacity: '0.2',
    }
}



export default class Parent4 extends React.Component {


    render() {

        return (
            <div style={styles}>
                 <div style={styles.title}></div>
                 <div style={styles.image}></div>
            </div>

        )
    }
}