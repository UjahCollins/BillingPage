import { useState } from 'react';
import './App.css';
import "tailwindcss/tailwind.css"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  cardName: yup.string().required('Name is required'),
  cardNumber: yup.string().max(12, 'maximum of 12 characters').min(12, 'minimum of 12 characters'),
  expiryDate: yup.string().required("can't be blank").max(2, 'maximum of 2 characters').min(2, 'minimum of 2 characters'),
  expiryDate1: yup.string().required("can't be blank").max(2, 'maximum of 2 characters').min(2, 'minimum of 2 characters'),
  crvCode: yup.string().required("can't be blank").max(3, 'maximum of 3 characters').min(3, 'minimum of 3 characters')
});

function App() {
  const [cardName, setCardName] = useState("CARDHOLDER NAME")
  const [cardNumber, setCardNumber] = useState("0000  0000 0000 0000")
  const [expiryDate, setExpiryDate] = useState ("00 / ")
  const [expiryDate1, setExpiryDate1] = useState (" 00")
  const [crvCode, setCrvCode] = useState("123")
  

  const {handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('Form data Submitted:', data);
  };

  const handleNameChange =(e)=> {
    const cardName= e.target.value.toUpperCase()
    setCardName(cardName)
    
}

  const handleCardNumberChange =(e)=> {
    const cardNumber = e.target.value.replace(/(.{4})/g, '$1 ')
    setCardNumber(cardNumber)
}

  const handleExpireDate =(e)=> {
    const expiryDate = e.target.value
    setExpiryDate(expiryDate)
}
  const handleExpireDate1 =(e)=> {
    const expiryDate1 = e.target.value
    setExpiryDate1(expiryDate1)
}
  const handleCrvCode =(e)=> {
    const  crvCode = e.target.value
    setCrvCode(crvCode)
}

  return (
    <div className="App2 bg-black">
      <div className='App'>
          <div className='mainContainer'>
             <div className='sec1'></div> 
             <div className='sec2'></div>
           </div>
      </div>
      <div className='content'>
        <div className='contentWrapper'>
          <div className='card'>
              <div className='cardFrontHolder'>
                  <div className='cardFront'>

                      <div className='circleHolder'>
                        <div className='circle1'></div>
                        <div className='circle2'></div>
                      </div>
                      <div className='numHolder'>{cardNumber}</div>
                      <div className='otherDetails'>
                          <div className='odName'>{cardName}</div>
                          <div className='odName1'>
                            <div>{expiryDate}</div>
                            <div>{expiryDate1}</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='cardBackHolder'>
                  <div className='cardBack'>
                    <div className='blackBox'></div>
                    <div className='secondBox'>
                      <div className='crvHolder'>{crvCode}</div>
                    </div>
                  </div>
              </div>
          </div>
          
          <div className='cardDetails' >
                  <form onSubmit={handleSubmit(onSubmit)} className='form1'>
                  <div className='details1'>
                     <label> CARDHOLDER NAME</label>
                    <input type='text' placeholder='e.g ujah collins'  onChange={handleNameChange} />
                    <p>{errors.cardName?.message}</p>
                 </div>
                <div className='details1'>
                    <label> CARD NUMBER</label>
                    <input type='tel' placeholder='e.g 1234 5678 9123 0000' maxLength={16} onChange={handleCardNumberChange}/>
                    <p>{errors.cardNumber?.message}</p>
                </div>
                <div className='details3'>
                  <div className='date'>
                    <label>EXP. DATE [MM/YY]</label>
                    <div className='MMYYHolder'>
                      <input type='tel' placeholder='MM' maxLength={2} onChange={handleExpireDate} />
                      <p>{errors.expiryDate?.message}</p>
                      <input type='tel' placeholder='YY' maxLength={2} onChange={handleExpireDate1} />
                      <p>{errors.expiryDate1?.message}</p>
                    </div>
                  </div>
                  <div className='crv'>
                    <label>CRV</label>
                    <input type='tel' placeholder='e.g 123' maxLength={3} onChange={handleCrvCode} />
                    <p>{errors.crvCode?.message}</p>
                  </div>
                </div>
                <button className='button'>Confirm</button>
                    </form>                        
                </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;


