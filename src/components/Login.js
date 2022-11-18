import { Box, FormControl, VStack , FormLabel , Input , Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { auth } from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")
    const[loading,setloading] = useState(false)

    const toast = useToast()
    const navigate = useNavigate()

    const handlesubmit = async()=>{
        setloading(true)
            if(!email || !password){
                toast({
                    title: 'Message',
                    description: "All fields are compulsory",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
                setloading(false)
                return
            }

            try{
                await signInWithEmailAndPassword(auth,email,password)
                setloading(false)
                navigate('/')
            }
            catch(err){
                toast({
                    title: 'Message',
                    description: err.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
            setloading(false)


    }
    

    return (
        <Box>
            <VStack rowGap="1vh">
                <FormControl>
                    <FormLabel>Enter Email :</FormLabel>
                    <Input onChange={(e)=>setemail(e.target.value)} type='email' placeholder='email here' />
                </FormControl>
                <FormControl>
                    <FormLabel>Enter Password :</FormLabel>
                    <Input type='password' placeholder='email here' onChange={(e)=>setpassword(e.target.value)} />
                </FormControl>
                <Button isLoading={loading} onClick={handlesubmit} bg="blue" textColor="white" w="full" fontSize="20px" >Login</Button>
            </VStack>
        </Box>
    )
}

export default Login