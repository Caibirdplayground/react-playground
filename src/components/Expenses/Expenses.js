import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.item.filter(
        expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        }
    );

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onFilterChange = {filterChangeHandler} selected = {filteredYear}/>
                <ExpensesList items={filteredExpense}/>
            </Card>
        </div>
        );
}

export default Expenses;