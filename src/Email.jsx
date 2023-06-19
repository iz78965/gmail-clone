import React, { useEffect, useState } from 'react'
import './Email.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import SectionOptions from './SectionOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import EmailRow from './EmailRow';
import { db } from './firebase';
import EmailRow from './EmailRow'

function Email() {
    const [emails, setEmails] = useState([]);

   useEffect(() => {
    db.collection("emails").orderBy("timestmp", "desc").onSnapshot((snapshot) => setEmails(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),

    }))));
   },[])

    return (
    <div className='emails'>
        
        <div className="emails_settings">
            <div className="emails_settingsleft">
                <CheckBoxOutlineBlankIcon/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>

            </div>
            
            <div className="emails_settingright">
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>

            </div>


        </div>
        <div className="emails_sections">

            <SectionOptions Icon={InboxIcon} title='Primary' color='red' selected/>
            <SectionOptions Icon={PeopleIcon} title='Social' color='Blue' />
            <SectionOptions Icon={LocalOfferIcon} title='Promotions' color='green' />


        </div>

        <div className="emails_list">
           {emails.map(({ id, data: { to, subject, message, timestamp }}) => (
            <EmailRow
            key={id}
            title={to}
            subject={subject}
            description= {message}
            time={timestamp}
            />
            ))}
            {console.log(emails.id)}

            <EmailRow title='first email' subject='hey this is first email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Second email' subject='hey this is Second email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Third email' subject='hey this is Third email' discription='this is a test' time= '10pm'/>
            <EmailRow title='first email' subject='hey this is first email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Second email' subject='hey this is Second email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Third email' subject='hey this is Third email' discription='this is a test' time= '10pm'/>
            <EmailRow title='first email' subject='hey this is first email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Second email' subject='hey this is Second email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Third email' subject='hey this is Third email' discription='this is a test' time= '10pm'/>
            <EmailRow title='first email' subject='hey this is first email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Second email' subject='hey this is Second email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Third email' subject='hey this is Third email' discription='this is a test' time= '10pm'/>
            <EmailRow title='first email' subject='hey this is first email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Second email' subject='hey this is Second email' discription='this is a test' time= '10pm'/>
            <EmailRow title='Third email' subject='hey this is Third email' discription='this is a test' time= '10pm'/>
            
        </div>
    </div>
    )
}

export default Email