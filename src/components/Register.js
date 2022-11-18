import { Box, Button, FormControl, FormLabel, Input, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'


const Register = () => {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [conpassword, setconpassword] = useState("")
    const toast = useToast()
    const[loading,setloading] = useState(false)
    const navigate = useNavigate()

    const handlesubmit = async () => {
        setloading(true)
        if (!fname || !lname || !email || !password || !conpassword) {
            toast({
                title: 'Message',
                description: "All fields are compulsory",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
            return;
        }

        if (password !== conpassword) {
            toast({
                title: 'Message',
                description: "Password Mismatch",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            setloading(false)
            return;
        }

        try {
             await createUserWithEmailAndPassword(auth,email, password)

            await updateProfile(auth.currentUser, {
                displayName: fname + lname
            })
            setloading(false)
            navigate('/')
        }catch(err){
            toast({
                title: 'Error',
                description: err.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
        setloading(false)
        
    }


    return (
        <Box w="full">
            <VStack rowGap={"1vh"}>
                <Box w="full" display={"flex"} justifyContent="space-between">
                    <FormControl w="45%">
                        <FormLabel>First Name :</FormLabel>
                        <Input onChange={(e) => setfname(e.target.value)} type='text' placeholder='first name' />
                    </FormControl>
                    <FormControl w="45%">
                        <FormLabel>Last Name :</FormLabel>
                        <Input onChange={(e) => setlname(e.target.value)} type='text' placeholder='last name' />
                    </FormControl>
                </Box>
                <FormControl>
                    <FormLabel>Enter Email :</FormLabel>
                    <Input onChange={(e) => setemail(e.target.value)} type='email' placeholder='email here' />
                </FormControl>

                <FormControl>
                    <FormLabel>Enter Password :</FormLabel>
                    <Input type='password' placeholder='password' onChange={(e) => setpassword(e.target.value)} />
                </FormControl>

                <FormControl>
                    <FormLabel>Enter Pasword Again :</FormLabel>
                    <Input type='password' placeholder='password' onChange={(e) => setconpassword(e.target.value)} />
                </FormControl>
                <Button isLoading={loading} onClick={handlesubmit} w="full" bg="blue" textColor="white" fontSize="20px">Register</Button>
            </VStack>

        </Box>
    )
}

export default Register
