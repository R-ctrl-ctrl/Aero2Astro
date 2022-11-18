import { Box, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { collection, getDocs, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'

const DisplayClients = () => {

    const [clients, setclients] = useState([])

    useEffect(() => {
        loadclients()
    }, [])

    const loadclients = async () => {
        const q = query(collection(firestore, "clients"))
        const querysnapshot = await getDocs(q)
        setclients([])
        setclients(querysnapshot.docs.map(docsnap => {
            return {
                ...docsnap.data()
            }
        }))

    }

    return (
        <Box w="full">
            <Box>
                <Heading>All clients</Heading>
            </Box>
            <Box w="full">
                <SimpleGrid columns={{sm:"1",lg:"2",md:"2",base:"1"}} rowGap={"4vh"} columnGap={"3vw"} marginTop="2vh">
                {
                    clients
                    &&
                    clients.map((client, key) => {
                        return (
                            <GridItem  bg="blue.300" fontSize={"18px"} fontWeight={'semibold'} p={3} borderRadius="10px" boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}>
                                <Text>Client Name : {client.name}</Text>
                                <Text>Company Name: {client.company}</Text>
                                <Text>Phone number : {client.phone}</Text>
                                <Text>Email address : {client.email}</Text>
                            </GridItem>
                        )
                    })
                }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default DisplayClients
