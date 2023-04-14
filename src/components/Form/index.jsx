import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";

const Form = ( { addExpense } ) => {

    const categorys = ['Путешествия', 'Развлечения', 'Образование', 'Еда', 'Одежда', 'Коммунальные платежи', 'Авто', 'Прочие расходы']

    const [ cost, setCost ] = useState('')
    const [ category, setCategory ] = useState(categorys[0])
    const [ selectedDate, setSelectedDate ] = useState(null)
    
    const handleClick = event => {
        event.preventDefault()
        
        if (category, selectedDate, cost) {
        const expense = {
            category,
            data: selectedDate,
            cost,
            id: uuidv4()
        }
        addExpense(expense)
        setCost('')
        setCategory(categorys[0])
        setSelectedDate(null)
        //const expensesJson = JSON.stringify(expenses)
        //localStorage.setItem('expenses', expensesJson) 
    }
    }

        return (
            <div>
                <form>
                    <div className="mx-10 my-4 flex justify-center flex-col md:flex-row md:justify-center text-stone-700 gap-4">
                        <div className="flex flex-col">
                            <input 
                                onChange={(event) => {
                                    setCost(event.target.value.replace(/\D/, ""))}}
                                placeholder="00.00"
                                value={cost} 
                                name="cost" 
                                type="text"                                  
                                className="col-span-2 border border-solid border-gray-400 rounded-md h-8 pl-1 md:w-full" 
                            />
                        </div>
            
                        <div className="flex flex-col">
                            <select 
                                onChange={(event) => setCategory(event.target.value)}
                                value={category} 
                                className="col-span-2 border border-solid border-gray-400 rounded h-8 pl-1 md:w-full" >
                                {categorys.map(category => (
                                    <option key={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <Datepicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}
                                //onSelect = {(event) => setData(event.target.value)}
                                //onChange={(event) => setData(event.target.value)}
                                dateFormat="dd.MM.yyyy"
                                maxDate={ new Date()} 
                                value={selectedDate} 
                                locale="es"
                                name="selectedDate" 
                                placeholderText="ДД.ММ.ГГГГ"
                                className="col-span-2 border w-full border-solid border-gray-400 rounded h-8 pl-1" 
                                />
                        </div>
                            
                        <button onClick={handleClick} type="submit" className="border border-emerald-800 bg-emerald-800 text-stone-50 rounded-md px-4 py-1 mb-4" >Добавить</button>
            
                    </div>
                </form>
            </div>
        )
    }

export default Form