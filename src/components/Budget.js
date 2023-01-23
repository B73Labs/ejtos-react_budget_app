import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses } = useContext(AppContext);
    const [budget, setBudget] = useState('');

    function handleChange(e) {
        e.preventDefault();

        if(budget < expenses) {
            alert("The budget cannot be less than the existing expenses of £"+expenses);
            return;
        }
        let maxBudget = 20000;
        if(budget > maxBudget) {
            alert("The budget cannot exceed £"+maxBudget);
            return;
        }
        console.log(budget.value);
        setBudget(budget.value);

      }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <form onChange={handleChange}>
                    <input
                    type="number"
                    onChange={(e) => handleChange(e.target.value)}
                    value={budget}
                    step="10"
                    />
                </form>
          </span>
        </div>
    );
};

export default Budget;