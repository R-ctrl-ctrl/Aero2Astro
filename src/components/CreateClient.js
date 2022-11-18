import { Box, Button, FormControl, FormLabel, Input, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { firestore } from '../firebase'
import { async } from '@firebase/util'

const CreateClient = () => {

    const [name, setname] = useState("")
    const [company, setcompany] = useState("")
    const [phone, setphone] = useState()
    const [email, setemail] = useState("")

    const navigate = useNavigate()
    const toast = useToast()
    const [loading, setloading] = useState(false)
    const handleclick = async () => {
        setloading(true)
        if (!name || !company || !phone || !email) {
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

        const dbRef = collection(firestore, "clients");
        const data = {
            name,
            company,
            phone,
            email
        }

        try {
            await addDoc(dbRef, data)
            setloading(false)
            toast({
                title: 'Message',
                description: "Client added successfully",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate('/')
        } catch (err) {
            toast({
                title: 'Message',
                description: err.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
            return
        }

        setloading(false)


    }



    return (
        <Box w="100vw" h="100vh" display={"flex"} justifyContent="center" alignItems={"center"}>
            <Box w={{base:"80%" , "md":"65%" , "lg":"50%"}}>
                <VStack rowGap={"1vh"}>
                    <FormControl>
                        <FormLabel>Enter client name:</FormLabel>
                        <Input onChange={(e) => setname(e.target.value)} type='text' placeholder='client name' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter client company:</FormLabel>
                        <Input type='text' placeholder='company name' onChange={(e) => setcompany(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter client phone number:</FormLabel>
                        <Input type='number' placeholder='client number' onChange={(e) => setphone(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email client email:</FormLabel>
                        <Input type='email' placeholder='client email' onChange={(e) => setemail(e.target.value)} />
                    </FormControl>
                    <Button w={{'sm':"70%"}} isLoading={loading} fontSize={"20px"} onClick={handleclick} bg="blue" textColor={"white"} _hover="blue">Create client</Button>

                </VStack>

            </Box>
        </Box>
    )
}

export default CreateClient
