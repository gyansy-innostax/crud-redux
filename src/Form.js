import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from './features/crudSlice';
import { useEffect, useState } from 'react';

const Form = () => {
  const dispatch = useDispatch();

  const initialUpdate = useSelector(state => state.inputFormUpdate)
  const [user, setUser] = useState({id:'',name:'',phone:'',email:''});


  useEffect(()=>{
    if(initialUpdate) setUser(initialUpdate)
  },[initialUpdate])

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(user.id){
      dispatch(updateUser(user))
    }
    else {
      dispatch(addUser(user))
    }
    setUser({ id: '', name: '', phone: '', email: '' })
  }

  return (
    <>
      <form className='forms'>
        <label className='label'>Name :
          <input
            type="text"
            name="name"
            placeholder='Enter your full name'
            value={user.name}
            onChange={handleInput}
          />
        </label>
        <label className='label'>Phone :
          <input
            type="number"
            name="phone"
            placeholder='Phone Number'
            value={user.phone}
            onChange={handleInput}
          />
        </label>
        <label className='label'>Email :
          <input
            type="email"
            name="email"
            placeholder='Emaild Id'
            value={user.email}
            onChange={handleInput}
          />
        </label>
        <button className='submit-bttn' onClick={handleSubmit} >{user.id ? "Update" : "Submit"}</button>
      </form>
    </>
  );
}

export default Form;