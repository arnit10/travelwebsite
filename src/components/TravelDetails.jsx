import {React , useState }from 'react'
import ReactFlagsSelect from 'react-flags-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TravelDetails = () => {
    const [selected,setSelected] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  return (
    <div className='flex justify-center'>
        <div className='flex justify-center items-center lg:rounded-full gap-3 px-8 py-3 shadow-lg sm: flex-wrap '>
        <div className=' justify-center p-1 '>
            <span className='flex flex-col'>Country</span>
            <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            />
        </div>
        <div className=' p-2 flex flex-col '>
            <span className='flex flex-col'>From</span>
            <div className='py-1 border-2 rounded-md justify-center'>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
        <div className=' p-2 flex flex-col '>
            <span className=''>Return </span>
            <div className='py-1 border-2 rounded-md justify-center'>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>
        </div>
        <div className='flex items-center justify-center '>
            <button className='px-4 border-2 rounded-xl text-xl font-semibold bg-yellow-200  '>Search</button>
        </div>
    </div>
    </div>
  )
}

export default TravelDetails
