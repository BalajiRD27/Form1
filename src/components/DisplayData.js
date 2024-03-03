import React, { useContext } from 'react'
import { Table,TableContainer,TableCell,TableHead,TableBody,TableRow } from '@mui/material'
import {stateContext} from './StepContext'
const DisplayData = () => {
    const {finalData} =useContext(stateContext)
  return (
    <div>
        <TableContainer style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
            <Table border="1" style={{justifyContent:'center'}} size='small' aria-label="caption-table">
            <TableHead>
                <TableRow style={{backgroundColor:"orange"}}>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>District</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Land Mark</TableCell>
                <TableCell>Postal Code</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {finalData.map((data)=>
                (
                <TableRow key={data.email}>
                   <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.contact}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.district}</TableCell>
                <TableCell>{data.city}</TableCell>
                <TableCell>{data.landmark}</TableCell>
                <TableCell>{data.postalcode}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default DisplayData