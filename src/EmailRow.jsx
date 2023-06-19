import React from 'react'
import './EmailRow.css'
import { IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { CheckBox } from '@mui/icons-material';
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMAil } from './features/mailSlice';

function EmailRow({title, discription, id, subject, time}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMAil({
            id,
            title,
            subject,
            discription,
            time,
        }));
        navigate('/mail')
    };
  return (
    <div onClick={openMail} className='emailRow'>
        <div className="emailRow_options">
            <CheckBox/>
            <IconButton>
                <StarBorderIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>

        </div>


        <div className="emailRow_title">
            <h3>{title}</h3>

        </div>

        <div className="emailRow_message">
            <h4>{subject} {" "}
            <span className='emailRow_description'>-
                {" "}{discription}
            </span>
            </h4>

        </div>

        <div className="emailRow_time">
            <p>{time}</p>

        </div>
    

    </div>
  )
}

export default EmailRow