import { useState } from "react"
import DatePicker from "react-datepicker"
import { Form } from "../../components/FormElements/Form"
import { Step } from "../../components/FormElements/Step"
import { Steps } from "../../components/FormElements/Steps"
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '../../components/Buttons';
import { useNavigate } from "react-router-dom"
import { knowMoth } from "../../helpers/knowMoth"
import { useContext } from "react"
import { ContextCycles } from '../../context/cycles';
import { theme } from "../../theme"

export const NewCycle = () =>{
    const navigate = useNavigate();

    const {cycles, setCycles} = useContext(ContextCycles);

    const[stepStatus, setStepStatus]=useState([
        {
            id: 1,
            status: 'focus'
        },
        {
            id: 2,
            status: 'pendiente'
        }
    ]);
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleNextStepClick = () =>{
        setStepStatus([
            {
                id: 1,
                status: 'ok'
            },
            {
                id: 2,
                status: 'focus'
            }
        ])
    }

    const handleReturn = () =>{
        setStepStatus([
            {
                id: 1,
                status: 'focus'
            },
            {
                id: 2,
                status: 'pendiente'
            }
        ])
    }

    const handleSaveCycle = () =>{
        setCycles([...cycles, {date: `${knowMoth(startDate.getMonth())} - ${knowMoth(endDate.getMonth())} ${endDate.getFullYear()}`, color: theme.azul}])
        navigate('/dashboard');
    }

    return(
        <div className="container">
            <Form createSome={true} >
                <Steps>
                    <Step status={stepStatus[0].status} >Step 1 - dates</Step>
                    <Step status={stepStatus[1].status} >Step 2 - check and save</Step>
                </Steps>
                {
                    stepStatus[0].status === 'focus' ? 
                    <>
                        <p>Indicate the date start and date end of the school cycle</p>
                        <div className="dates">
                            <div className="date">
                                <p>Date To Start</p>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="date">
                                <p>Date to End</p>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                        </div>
                        <div className="btns">
                            <Button onClick={()=>navigate('/dashboard')} >Cancel</Button>
                            <Button onClick={ handleNextStepClick } >Next Step</Button>
                        </div>
                    </> : null
                    
                }
            
                {
                    stepStatus[1].status === 'focus' ? 
                    <>
                        <p>School Cycle of { knowMoth(startDate.getMonth())} - { knowMoth(endDate.getMonth())}</p>
                        <p>The new cycle start at {`${knowMoth(startDate.getMonth())} ${startDate.getDay()}`} and Cycle ends at {`${knowMoth(endDate.getMonth())} ${endDate.getDay()}`}</p>
                        <span>*If this information doesn't be correct, return to the last step and correct the errors.</span>
                        <div className="btns">
                            <Button onClick={handleReturn} >Return</Button>
                            <Button onClick={ handleSaveCycle } >Save School Cycle</Button>
                        </div>
                    </>
                    : ''
                }
                    
            </Form>
        </div>
    )
}