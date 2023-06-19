import React from 'react'
import "./Mail.css"
import { IconButton } from '@mui/material'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useSelector } from 'react-redux'
import { selectOpenMAil } from './features/mailSlice'

function Mail() {
    const navigate = useNavigate();
    const selectedMail =useSelector(selectOpenMAil)
  return (
    <div className='mail'>
        <div className="mail_tools">
            <div className="mail_toolsleft">

                <IconButton onClick={() => navigate('/') }>
                    <ArrowBack/>
                </IconButton>

                <IconButton>
                    <MoveToInbox/>
                </IconButton>

                <IconButton>
                    <Error/>
                </IconButton>

                <IconButton>
                    <Delete/>
                </IconButton>

                <IconButton>
                    <Email/>
                </IconButton>

                <IconButton>
                    <WatchLater/>
                </IconButton>

                <IconButton>
                    <CheckCircle/>
                </IconButton>

                <IconButton>
                    <LabelImportant/>
                </IconButton>

                <IconButton>
                    <MoreVert/>
                </IconButton>

            </div>
            <div className="mail_toolsright">
                <IconButton>
                    <UnfoldMore/>
                </IconButton>
                
                <IconButton>
                    <Print/>
                </IconButton>

                <IconButton>
                    <ExitToApp/>
                </IconButton>

            </div>
        </div>

        <div className='mail_body'>
            <div className="mail_bodyHeader">
                <h2>{selectedMail?.subject}</h2>
                <LabelImportantIcon className='mail_important'/>
                <p>{selectedMail?.title}</p>
                <p className='mail_time'>{selectedMail?.time}</p>
            </div>
            <div className='mail_message'>
                <p>{selectedMail?.discription}</p>

            </div>

        </div>
        
    </div>
  )
}

export default Mail