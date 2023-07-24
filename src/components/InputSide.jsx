
import '../App.css';
import ButtonSend from './ButtonSend';
import InputText from './InputText';
import ButtonSuccess from './ButtonSuccess';
import ButtonDelAll from './ButtonDelAll';
import { useState } from 'react';
import SelectComp from './SelectComp';

function InputSide(props) {
    const [waiter,setWaiter] = useState({name:'',houer:'',toHouer:'',job:''});
  

        function writeWaiterName(e){

        setWaiter({...waiter,name:e.target.value})
        }
        function writeWaiterHouer(e){

        setWaiter({...waiter,houer:e.target.value})
        }

        function writeWaiterToHouer(e){

        setWaiter({...waiter,toHouer:e.target.value})
        }

        function personJob(e){

          setWaiter({...waiter,job:e.target.value})
          }

function clearWaiterState(){
    setWaiter({name:'',houer:'',toHouer:''})
}





  return (
    <div className="flexCol center">
      <br />
     <div className="flexCol center InputDiv">
      <h2>הכנס כל מלצר ושעות</h2>
     <div className="flexCol center">
<div className="flexRowToCol center">
<InputText func={writeWaiterName} valueW={waiter.name} type="שם " />   <SelectComp personJob={personJob} />

</div>
   <div className="flexRowToCol">
     <InputText func={writeWaiterHouer} inputType={'time'} valueW={waiter.houer}  type=" משעה" />   __ <InputText inputType={'time'} valueW={waiter.toHouer} func={writeWaiterToHouer}  type="עד שעה"/> 
 
   </div>
  <div className="flexRow bet w70">
 <ButtonSuccess clear={clearWaiterState} func={props.waiterFilter} waiter={waiter} /> <ButtonDelAll func={props.clearAll}/> 
  </div>
        
        </div>

<br /><br /><br />

     <div className="InputSend flexCol center">
      <h2>הזנת סכום טיפים</h2>
      <InputText func={props.getMoneyTip} inputType={'number'} type='סכום כל הטיפים'/>
     <ButtonSend func={props.startCalc} />
     </div>
     </div>



   
   
    </div>
  );
}

export default InputSide;
