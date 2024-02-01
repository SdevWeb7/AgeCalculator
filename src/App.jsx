import { useState } from "react";

function App() {

   const [day, setDay] = useState('')
   const [month, setMonth] = useState('')
   const [year, setYear] = useState('')
   const [validForm, setValidForm] = useState(true)
   const [diff, setDiff] = useState({})


   const calculAge = () => {
      if (/^[0-9]{4}$/.test(year) &&
         /^[0-9]{2}$/.test(day) &&
         /^[0-9]{2}$/.test(month)) {
         setValidForm(true)

         let dateNaissance = new Date(Number(year), Number(month)-1, Number(day))
         let today = new Date();

         let diff = new Date(today.getTime() - dateNaissance.getTime())
         let years = diff.getUTCFullYear() - 1970
         let months = diff.getUTCMonth()
         let days = diff.getUTCDate() - 1
         setDiff({days: days, months: months, years: years})

      } else {
         setValidForm(false)
      }
   }

   if (diff.years) {
      console.log(diff)
   }

  return (
    <div className={'card'}>

       {!validForm && <p style={{marginBottom: '40px'}}>Veuillez entrer le bon format</p>}


       <div className="inputs">
          <div className="input">
             <label htmlFor={'day'}>DAY</label>
             <input type="text" id={'day'} placeholder={'DD'} onChange={e => setDay(e.target.value)} />
          </div>

          <div className="input">
             <label htmlFor={'month'}>MONTH</label>
             <input type="text" id={'month'} placeholder={'MM'} onChange={e => setMonth(e.target.value)} />
          </div>

          <div className="input">
             <label htmlFor={'year'}>YEAR</label>
             <input type="text" id={'year'} placeholder={'YYYY'} onChange={e => setYear(e.target.value)} />
          </div>
       </div>


       <div className="separation">
          <div className="trait"></div>
          <img src="/public/icon-arrow.svg" alt="arrow" onClick={calculAge} />
       </div>


       <div className="part3">
          <h1><span>{diff.years ?? "--"}</span>years</h1>
          <h1><span>{diff.months ?? "--"}</span>months</h1>
          <h1><span>{diff.days ?? "--"}</span>days</h1>
       </div>

    </div>
  )
}

export default App
