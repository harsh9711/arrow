import React, { useState } from 'react';
import '../Styles/Todolist.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Todolist = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('Sorry, Zero Limit Reached');
      setNum(0);
    }
  };

  return (
    <div className="center_div">
       <div className="btn_div">
        <button onClick={incNum} className="btn_green">
          <AddIcon className="iconic1" />
        </button>
        <h1>{num}</h1>
        <button onClick={decNum} className="btn_red">
          <RemoveIcon className="iconic" />
        </button>
      </div>
    </div>
  );
};

export default Todolist;
