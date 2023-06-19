import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMIRawRdfR7OzTb28-cnLmIhz7aw4gPmk",
  authDomain: "clone-832f5.firebaseapp.com",
  projectId: "clone-832f5",
  storageBucket: "clone-832f5.appspot.com",
  messagingSenderId: "8623952126",
  appId: "1:8623952126:web:7912620f4cb9298dbfd5af"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider }




// import { Close } from '@mui/icons-material'
// import { Button } from '@mui/material'
// import React from 'react'
// import './SendMail.css'
// import { useForm } from 'react-hook-form'
// import { closeSendMessage } from './features/mailSlice'
// import { useDispatch } from 'react-redux'
// import firebase from 'firebase/compat/app';
// import { db } from './firebase'


// function SendEmail() {
//     const {register, handleSubmit, formState: { errors }} = useForm();
//     const dispatch = useDispatch();
    
//     const onSubmit = (formData) => {
//         console.log(formData)
//         db.collection("emails").add(
//             {
//                 to:formData.to,
//                 subject: formData.subject,
//                 message: formData.message,
//                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),


//         });

//         dispatch(closeSendMessage());
//     }
//   return (
//     <div className='send_email'>
//         <div className="send_emailHeader">
//             <h3>New message</h3>
//             <Close onClick= {() => dispatch(closeSendMessage())} className='send_emailClose'/>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)}>

//             <input name='to' placeholder='To' type="email" {...register('to' , {required: true}) } />
//             {errors.to && <p className='send_emailError'>To is required</p>}

//             <input  name='subject' placeholder='Subject' type="text" {...register('subject', { required: true })} />
//             {errors.subject && <p className='send_emailError'>Subject is required</p>}

//             <input name='message' placeholder='Message...' type="text" className='send_emailMessage' {...register('message', { required: true })}/>
//             {errors.message && <p className='send_emailError'>Message is required</p>}



//             <div className="send_emailOptions">
//                 <Button className='send_emailSend'
//                 variant='contained'
//                 color='primary'
//                 type='submit'
//                 >

//                 send

//                 </Button>
//             </div> 
//         </form>
//     </div>
//   )
// }

// export default SendEmail