import React, { Component } from 'react';



const styles =
{
    display: 'flex',
    flexDirection: 'column',

    firstDivision:
    {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        marginTop: '120px',

        title:
        {
            fontSize: '40px',
            textTransform: 'uppercase',
            color: 'rgb(170, 160, 160)',
        },

        wording:
        {
            width: '45%',
            textAlign: 'center',
            color: 'rgb(170, 160, 160)',
            fontSize: '16px',
        }
    },

    secondDivision:
    {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

        article1:
        {
            background: 'rgb(190, 180, 180)',
            height: '300px',
            width: '300px',
            padding: '40px',
            margin: '70px',
            opacity: '0.6',
            borderRadius: '20px',
            border: '1px solid black',

            wording:
            {
                height: '200px',
                width: '300px',
                fontSize: '25px',
                borderLeft: '13px solid rgb(65, 60, 60)',
                paddingLeft: '20px',
                marginBottom: '20px',
                fontStyle: 'italic',
                color: 'rgb(65, 60, 60)',
            },

            author:
            {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',



                image:
                {
                    borderRadius: '50%',
                },

                name:
                {
                }
            }
        },


        article2:
        {
            background: 'rgb(190, 180, 180)',
            height: '300px',
            width: '300px',
            padding: '40px',
            margin: '70px',
            opacity: '0.6',
            borderRadius: '20px',
            border: '1px solid black',

            wording:
            {
                height: '200px',
                width: '300px',
                fontSize: '25px',
                borderLeft: '13px solid rgb(65, 60, 60)',
                paddingLeft: '20px',
                marginBottom: '20px',
                fontStyle: 'italic',
                color: 'rgb(65, 60, 60)',
            },

            author:
            {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',

                image:
                {
                },

                name:
                {
                }
            }
        }
    },

    article3:
    {
        background: 'rgb(190, 180, 180)',
        height: '300px',
        width: '300px',
        padding: '40px',
        margin: '70px',
        opacity: '0.6',
        borderRadius: '20px',
        border: '1px solid black',

        wording:
        {
            height: '200px',
            width: '300px',
            fontSize: '25px',
            borderLeft: '13px solid rgb(65, 60, 60)',
            paddingLeft: '20px',
            marginBottom: '20px',
            fontStyle: 'italic',
            color: 'rgb(65, 60, 60)',
        },

        author: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

            image: {
            },

            name: {
            }
        }
    }
}


export default class Parent5 extends Component {


    render() {



        return (
            <div style={styles}>
                <div style={styles.firstDivision}>
                    <div style={styles.firstDivision.title}></div>
                    <div style={styles.firstDivision.wording}></div>
                </div>
                <div style={styles.secondDivision}>
                    <div style={styles.secondDivision.article1}>
                         <div style={styles.secondDivision.article1.wording}></div>
                         <div style={styles.secondDivision.article1.author}>
                            <div style={styles.secondDivision.article1.author.image}></div>
                            <div style={styles.secondDivision.article1.author.name}></div>
                         </div>
                    </div>    
                    <div style={styles.secondDivision.article2}>
                         <div style={styles.secondDivision.article2.wording}></div>
                         <div style={styles.secondDivision.article2.author}>
                            <div style={styles.secondDivision.article2.author.image}></div>
                            <div style={styles.secondDivision.article2.author.name}></div>
                         </div>
                    </div>
                    <div style={styles.secondDivision.article3}>
                         <div style={styles.secondDivision.article3.wording}></div>
                         <div style={styles.secondDivision.article3.author}>
                             <div style={styles.secondDivision.article3.author.image}></div>
                             <div style={styles.secondDivision.article3.author.name}></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
} 