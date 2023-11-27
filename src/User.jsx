import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    console.log(familiar)
    let greetings;
    if(familiar ){
        greetings = <p>Welcome, my friend.</p>
    }
    else{
        greetings = <p>Who the thell are you?</p>
    }
    // javascript ternary okperator
    //const constName = props ? " if hello" : "else hello";
               // use food
    // const number = 3;
    // if(Number > 5 && familiar === true){

    // }
   

    
    return (
        <div>
            <div className="">
                <h2>Greetings</h2>
                {greetings}
                
            </div>
            <div className="">
                <h2>Food</h2>
                {
                 familiar ? <p>I will buy Food for you</p> 
                          : <p>Lets eat his whose</p>
                }
                
            </div>
            <div className="">
                <h2>Connection</h2>
                {
                    familiar && <p>Let's join my facebook.</p>
                }
                
            </div>
        </div>
    );
};

export default User;