
import { useState } from 'react'
import useCurrencyInfo from './custom hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('inr')
  const [to, setTo] = useState('usd')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) //hook called. API data will be received here

  const options = Object.keys(currencyInfo)

  function swap(){
    setFrom(to)
    setTo(from)
  }

  function convert(){
    const rate = currencyInfo[to]
    const convertedAmount = (amount * rate).toFixed(2)
    setConvertedAmount(convertedAmount)
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbi2yIoQTAsbDzXaFjEnYUMnhjoJcFMs86TA&s')`,
        }}
    >
      <h1 className='text-6xl font-bold text-amber-50'>Currency Converter</h1>
      
      <div className="w-full">

        
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray-800/40 -translate-y-25">
              
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
                          currencyOptions={options}
                          onAmountChange = {(newAmount) => setAmount(newAmount)}
                          onCurrencyChange = {(newCurrency) => setTo(newCurrency)} //
                          selectedCurrency = {from}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-700 text-white px-2 py-0.5 hover:bg-blue-900 transition duration-200 ease-in-out"
                          onClick={swap}            
                        >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount = {convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange = {(currency) => setTo(currency)}
                          selectedCurrency = {to}
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-900 transition duration-200 ease-in-out">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
  )
}

export default App
