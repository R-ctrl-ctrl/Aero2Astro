import { border, Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Radio, RadioGroup, Select, SimpleGrid, Stack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import '../styles/basic.css'
import { useNavigate } from 'react-router-dom';
import {firestore} from '../firebase.js'
import {addDoc,collection} from 'firebase/firestore'

const CreateProject = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
     const navigate = useNavigate()

     const[Id,setId] = useState()
     const[title,settitle] = useState("")
     const[department,setdepartment] = useState("")
     const[priority,setpriority] = useState("")
     const[client,setclient] = useState("")
    const[status,setstatus] = useState("")
    const toast = useToast()
    const[loading,setloading] = useState(false)

     

     const handleclose = async()=>{
        navigate('/')
     }

     const handlesubmit = async()=>{
        setloading(true)
        if(!Id || !title || !department || !priority || !client || !status){
            toast({
                title: 'Message',
                description: "All fields are compulsory",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            setloading(false)
            return;
        }

        try{
            const data = {
                Id,title,department,priority,client,status
            }
            const dbRef = collection(firestore,"projects")
             await addDoc(dbRef,data)
             toast({
                title: 'Message',
                description: "Project added successfully",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setloading(false)
            navigate('/')
        }catch(err){
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        setloading(false)
     }

    return (
        <Box w="100vw" h="100vh" p={20} >
            <SimpleGrid columns={{sm:"1",md:"2",lg:"2"}} spacing={10} w="100%" justifyContent={"center"} >
                <GridItem>
                    <FormControl >
                        <FormLabel>Project Id:</FormLabel>
                        <Input type='number' placeholder='Enter Id' onChange={(e)=>setId(e.target.value)} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl >
                        <FormLabel>Project Title:</FormLabel>
                        <Input type='email' placeholder='Enter name' onChange={(e)=>settitle(e.target.value)} />
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>Select Department:</FormLabel>
                        <Select placeholder='Select department' onChange={(e)=>setdepartment(e.target.value)}>
                            <option value='Development department'>Development department</option>
                            <option value='Managers department'>Managers department</option>
                            <option value='Application department'>Application department</option>
                            <option value='Accounts department'>Accounts department</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl>
                        <FormLabel>Select Priority:</FormLabel>
                        <Select placeholder='Select priority' onChange={(e)=>setpriority(e.target.value)}>
                            <option value='high'>high</option>
                            <option value='medium'>medium</option>
                            <option value='low'>low</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl >
                        <FormLabel>Select Client</FormLabel>
                        <Select placeholder='Select client' onChange={(e)=>setclient(e.target.value)}>
                            <option value='client1'>client 1</option>
                            <option value='client2'>client 2</option>
                            <option value='client3'>client 3</option>
                            <option value='client4'>client 4</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem>
                </GridItem>
                <GridItem>
                    <Box display={"flex"} justifyContent="space-between">
                        <FormControl w="45%">
                            <FormLabel>From:</FormLabel>
                            <Box  >
                                <DatePicker className='datepicker' onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" selected={startDate} />
                            </Box>
                        </FormControl>
                        <FormControl w="45%">
                            <FormLabel>To:</FormLabel>
                            <Box>
                                <DatePicker className='datepicker' onChange={(date) => setEndDate(date)} dateFormat="dd/MM/yyyy" selected={endDate} />
                            </Box>
                        </FormControl>
                    </Box>
                </GridItem>
                <GridItem>
                </GridItem>
                <GridItem>
                    <FormControl >
                        <FormLabel>Select Work status:</FormLabel>
                        <RadioGroup  >
                            <Stack direction='row' onChange={(e)=>setstatus(e.target.value)}>
                                <Radio value='Completed'>Completed</Radio>
                                <Radio value='Pending'>Pending</Radio>
                                <Radio value='On Progress'>On Progress</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </GridItem>
                <GridItem>

                </GridItem>
                <GridItem>
                    <Box display={"flex"} justifyContent="space-between">
                        <Button bg="red" textColor={"white"} w="40%" fontSize={"20px"} onClick={handleclose} _hover="red">Close</Button>
                        <Button isLoading={loading} bg="blue" textColor={"white"} w="40%" fontSize={"20px"} _hover="red" onClick={handlesubmit} >Submit</Button>
                    </Box>
                </GridItem>
            </SimpleGrid>
        </Box>
    )
}

export default CreateProject
