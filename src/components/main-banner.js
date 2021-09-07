import React from "react";
import ReactTypingEffect from 'react-typing-effect';

export default function Banner(){
  const htmltext = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, nitial-scale=1.0"><title>Document</title></head><body>'
  const htmlendtext = "</body></html>"
    return(
        <section className='banner' id="home">
            <div className="text banner-left">
                <div className='slide-left banner-text'>
                    <h2>Srinath<br />Unta</h2>
                </div>
                <div className="vl"></div>
                <div className='slide-right banner-text'><h2>Full-stack<br />Developer</h2></div>
            </div>
            <div className="code banner-right">
            {htmltext}
            <ReactTypingEffect
        text={["<h1>Hello Wolrd!!!</h1>","<h1>Hello World!!!</h1>"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        
        displayTextRenderer={(text, i) => {
          return (
            <p>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </p>
          );
        }}        
      />
      {htmlendtext}
            </div>
        </section>
    )
}