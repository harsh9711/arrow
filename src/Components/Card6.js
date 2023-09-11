import React, { useState } from 'react';
import data1 from "/Users/harshsahcdeva/Documents/GitHub/arrow/src/data/data6.json";
import "../Styles/Card6.css";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Todolist from './Todolist';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

function Card6() {
  const [clickOnVisible, setClickOnVisible] = useState(false);

  // Function to toggle the visibility of "click on" section
  const toggleClickOn = () => {
    setClickOnVisible(!clickOnVisible);
  };

  return (
    <div className="container1">
      <div className="card-column">
        <h4>Select Vault</h4>
        {data1.map((data6, i) => (
          <div className="carrd11" key={i}>

              <div onClick={toggleClickOn} className="clickoff">
                <div className="phlirow">
                  <div className="serialno">
                    <h1>{data6.serialno}</h1>
                  </div>
                  <div className="tvl">
                    <h2>TVL $0 USDC</h2>
                  </div>
                </div>
                <div className="secondrow">
                  <div className="namedate">
                    <div className="name">
                      <h1>{data6.name}</h1>
                    </div>
                    <div className="dates">
                      <h2>EXP. SEP 1, 2023  </h2>
                    </div>
                  </div>
                </div>
                <div className="expected">
  <div className="simulated1">
    <div className="simulated2">
      <h2>{data6.simulate}</h2>
    </div>
    <div className="simulated3">
    <div className="text-and-icon">
      <h2>SIMULATED GAIN</h2>
      <AiOutlineQuestionCircle className="iconss" />
      </div>
    </div>
  </div>
  <div className="expected1">
    <div className="expected2">
      <h2>{data6.expected}</h2>
    </div>
    <div className="expected3">
      <div className="text-and-icon">
        <h2>EXPECTED YIELD</h2>
        <AiOutlineQuestionCircle className="iconss" />
      </div>
    </div>
  </div>
</div>
                 <div className="calls">
                <div className="calls1">
                    <div className="seecall">
                    <h2>{data6.seecall}</h2>
                    </div>
                    <div className="seecallname">
                    <h2>SELL CALL</h2>
                    </div>
                    </div>
                    <div className="calls2">
                    <div className="seecall">
                    <h2>{data6.buycall}</h2> 
                    </div>
                    <div className="seecallname">
                    <h2>BUY CALL</h2>
                    </div>
                    </div>
                    <div className="calls3">
                    <div className="seecall">
                    <h2>{data6.seecall1}</h2>
                    </div>
                    <div className="seecallname">
                    <h2>SELL CALL</h2>
                    </div>
                    </div>
                    </div>

              </div>

              {/* Conditionally render "click on" section when clickOnVisible is true */}
              {clickOnVisible && (
                <div className="clickon">
                  {/* Content for "click on" section */}
                  <div className="chothirow">
                    <div className="chothirow1">
                      <h2>{data6.simulator1}</h2>
                      <div className="chothirow3">
                        <h2>RESET</h2>
                      </div>
                    </div>
                    <div className="chothirow2">
                      <h2>Break-even if ETH expires at: $1,733.16</h2>
                    </div>
                  </div>
                  <div className="paanchvirow">
                    <div className="paanchvirow1">
                      <div className="paanchang">
                        <h2>AMOUNT</h2>
                      </div>
                      <div className="baxa">
                        <Todolist />
                      </div>
                    </div>
                    <div className="paanchvirow1">
                      <div className="paanchang">
                        <h2>AVERAGE PREMIUM</h2>
                      </div>
                      <div className="baxa">
                        <Todolist />
                      </div>
                    </div>
                  </div>
                  <div className="sixthrow">
                    <div className="sixthrow1">
                      <div className="sixthrow2">
                      <div className="text-and-icon">
                        <h2>CONTRACTS SOLD</h2>
                        <AiOutlineQuestionCircle className="iconss1" />
                        </div>
                      </div>
                      <div className="sixthrow3">
                      <div className="text-and-icon">
                        <h2>0/0</h2>
                        </div>
                      </div>
                    </div>
                    <Box sx={{ width: 280, backgroundColor: '#141414' }}>
                    <Slider
  defaultValue={0}
  aria-label="black"
  valueLabelDisplay="auto"
  sx={{ backgroundColor: '#141414' }}
/>
</Box>

                  </div>
                </div>
              )}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card6;
