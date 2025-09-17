import { useState } from 'react'
import CurrencyConverter from './hooks/CurrencyConverter'
import {InputBox} from './components'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyinfo = CurrencyConverter(from)
  const options = Object.keys(currencyinfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => { setConvertedAmount(amount * currencyinfo[to]) }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.pinimg.com/1200x/c8/a2/41/c8a2412143d771ac44f970859f0d0a7a.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                selectCurrency={from}
                onCurrencyChange={(currency)=>setFrom(currency)}
                onamountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-800 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                
                amount={convertedAmount}
                amountDisable
                currencyOption={options}
                selectCurrency={to}
                onCurrencyChange={(currency)=>setTo(currency)}
              />
            </div>
            <button type="submit" className="w-full bg-green-800 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
