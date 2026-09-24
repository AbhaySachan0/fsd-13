import React from 'react'
import ICard from './ICard'
import deer from '../images/aesthetic_deer.png'

function ICardGallery() {

    // const student = {
    //     name:"Abhay",
    //     roll:"12345",
    //     branch:"CSE",
    //     college:"ABES ENGINEERING COLLEGE",
    //     pic:deer
    // }

    const students = [
    {
        name: "Abhay",
        roll: "12345",
        branch: "CSE",
        college: "ABES ENGINEERING COLLEGE",
        pic: deer
    },
    {
        name: "Rahul",
        roll: "12346",
        branch: "CSE",
        college: "ABES ENGINEERING COLLEGE",
        pic: deer
    },
    {
        name: "Ankit",
        roll: "12347",
        branch: "ECE",
        college: "ABES ENGINEERING COLLEGE",
        pic: deer
    },
    {
        name: "Priya",
        roll: "12348",
        branch: "IT",
        college: "ABES ENGINEERING COLLEGE",
        pic: deer
    },
    {
        name: "Neha",
        roll: "12349",
        branch: "CSE",
        college: "ABES ENGINEERING COLLEGE",
        pic: deer
    }
];

    return (
        <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
        }} >
            {students.map( ele => (
                <ICard data={ele} />
            ))}
            
        </div>
    )
}

export default ICardGallery