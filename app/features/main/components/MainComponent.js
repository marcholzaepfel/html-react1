import React from 'react';
import Parent1 from './Parent1';
import Parent2 from './Parent2';
import Parent3 from './Parent3';
import Parent4 from './Parent4';
import Parent5 from './Parent5';
import Parent6 from './Parent6';

export default class MainComponent extends React.Component {


    render() {
        return (
         <div>
            <div>
              <Parent1/>
            </div>
            <div>
              <Parent2/>
            </div>
            <div>
              <Parent3/>
            </div>  
            <div>
              <Parent4/>
            </div>   
            {/* <div>
              <Parent5/>
            </div>    */}
          </div>
        )
    }
}