import { useState } from "react"
import DatePicker from "react-datepicker"
import { Form } from "../../components/FormElements/Form"
import { Step } from "../../components/FormElements/Step"
import { Steps } from "../../components/FormElements/Steps"
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '../../components/Buttons';

export const NewCycle = () =>{

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
                            <Button>Cancel</Button>
                            <Button>Next Step</Button>
                        </div>
                    </> : null
                    
                    // ? stepStatus[1].status === 'focus' : null
                }
            </Form>
        </div>
    )
}