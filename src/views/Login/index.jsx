import { useContext, useState } from 'react';
import { Button } from '../../components/Buttons';
import { Form } from '../../components/FormElements/Form';
import { Input } from '../../components/FormElements/Input';
import { LoginConponent } from '../../components/FormElements/Login';
import { UsersContext } from '../../context/users';
import Logo from '../../logo.png';

export const Login = () =>{

    const[formData, setFormData]=useState({
        user: '',
        pass:''
    })

    const { users } = useContext(UsersContext);

    const handleChange=({target:{name, value}}) => name === 'user' ? setFormData({...formData, user: value}) : setFormData({...formData, pass: value});

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(users.filter( user => user.user === formData.user && user.pass === formData.pass )[0])
    }
    return(
        <LoginConponent>
            <img src={Logo} alt="" />
            <Form>
                <Input type='text' placeholder='User' name='user' value={formData.user} onChange={handleChange}/>
                <Input type='password' placeholder='Password' name='pass' value={formData.pass} onChange={handleChange}/>
                <Button onClick={handleClick} >Log in</Button>
            </Form>
        </LoginConponent>
    )
}