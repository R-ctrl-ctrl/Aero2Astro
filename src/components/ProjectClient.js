import { Box, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'

const ProjectClient = () => {

    const [client1info, setclient1info] = useState([])
    const [client2info, setclient2info] = useState([])
    const [client3info, setclient3info] = useState([])
    const [client4info, setclient4info] = useState([])

    useEffect(()=>{
        loadinfo()
    },[])

    const loadinfo = async () => {
        // client - 1
        const q1 = query(collection(firestore, "projects"), where("client", "==", "client1"))
        const querysnapshot1 = await getDocs(q1)
        setclient1info([])
        setclient1info(querysnapshot1.docs.map(docsnap => {
            return {
                ...docsnap.data()
            }
        }))

        // client-2
        const q2 = query(collection(firestore, "projects"), where("client", "==", "client2"))
        const querysnapshot2 = await getDocs(q2)
        setclient2info([])
        setclient2info(querysnapshot2.docs.map(docsnap => {
            return {
                ...docsnap.data()
            }
        }))

        // client-3
        const q3 = query(collection(firestore, "projects"), where("client", "==", "client3"))
        const querysnapshot3 = await getDocs(q3)
        setclient3info([])
        setclient3info(querysnapshot3.docs.map(docsnap => {
            return {
                ...docsnap.data()
            }
        }))

        // client-4
        const q4 = query(collection(firestore, "projects"), where("client", "==", "client4"))
        const querysnapshot4 = await getDocs(q4)
        setclient4info([])
        setclient4info(querysnapshot4.docs.map(docsnap => {
            return {
                ...docsnap.data()
            }
        }))
    }
    return (
        <Box w="full">
            <Box m={"2vh"}><Text fontSize={"24px"} fontWeight="semibold">Client 1 projects</Text></Box>

            {
                <SimpleGrid columns={{sm:"1",lg:"2",md:"2",base:"1"}} rowGap={"4vh"} columnGap={"3vw"} marginTop="2vh">
                    {
                        client1info
                        &&
                        client1info.map((project, key) => {
                            return (
                                <GridItem bg="blue.300" fontSize={"18px"} fontWeight={'semibold'} p={3} borderRadius="10px" boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}>
                                    <Text>Project Id : {project.Id}</Text>
                                    <Text>Project Title : {project.title}</Text>
                                    <Text>Client Assigned : {project.client}</Text>
                                    <Text>Project Department : {project.department}</Text>
                                    <Text>Project status : {project.status}</Text>
                                    <Text>Project Priority : {project.priority}</Text>
                                </GridItem>
                            )
                        })
                    }
                </SimpleGrid>
            }
            <Box m={"2vh"}><Text fontSize={"24px"} fontWeight="semibold">Client 2 projects</Text></Box>
            {
                <SimpleGrid columns={{sm:"1",lg:"2",md:"2",base:"1"}} rowGap={"4vh"} columnGap={"3vw"} marginTop="2vh">
                    {
                        client2info
                        &&
                        client2info.map((project, key) => {
                            return (
                                <GridItem bg="blue.300" fontSize={"18px"} fontWeight={'semibold'} p={3} borderRadius="10px" boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}>
                                    <Text>Project Id : {project.Id}</Text>
                                    <Text>Project Title : {project.title}</Text>
                                    <Text>Client Assigned : {project.client}</Text>
                                    <Text>Project Department : {project.department}</Text>
                                    <Text>Project status : {project.status}</Text>
                                    <Text>Project Priority : {project.priority}</Text>
                                </GridItem>
                            )
                        })
                    }
                </SimpleGrid>
            }
            <Box m={"2vh"}><Text fontSize={"24px"} fontWeight="semibold">Client 3 projects</Text></Box>
            {
                <SimpleGrid columns={{sm:"1",lg:"2",md:"2",base:"1"}} rowGap={"4vh"} columnGap={"3vw"} marginTop="2vh">
                    {
                        client3info
                        &&
                        client3info.map((project, key) => {
                            return (
                                <GridItem bg="blue.300" fontSize={"18px"} fontWeight={'semibold'} p={3} borderRadius="10px" boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}>
                                    <Text>Project Id : {project.Id}</Text>
                                    <Text>Project Title : {project.title}</Text>
                                    <Text>Client Assigned : {project.client}</Text>
                                    <Text>Project Department : {project.department}</Text>
                                    <Text>Project status : {project.status}</Text>
                                    <Text>Project Priority : {project.priority}</Text>
                                </GridItem>
                            )
                        })
                    }
                </SimpleGrid>
            }
            <Box m={"2vh"}><Text fontSize={"24px"} fontWeight="semibold">Client 4 projects</Text></Box>
            {
                <SimpleGrid columns={{sm:"1",lg:"2",md:"2",base:"1"}} rowGap={"4vh"} columnGap={"3vw"} marginTop="2vh">
                    {
                        client4info
                        &&
                        client4info.map((project, key) => {
                            return (
                                <GridItem bg="blue.300" fontSize={"18px"} fontWeight={'semibold'} p={3} borderRadius="10px" boxShadow={"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}>
                                    <Text>Project Id : {project.Id}</Text>
                                    <Text>Project Title : {project.title}</Text>
                                    <Text>Client Assigned : {project.client}</Text>
                                    <Text>Project Department : {project.department}</Text>
                                    <Text>Project status : {project.status}</Text>
                                    <Text>Project Priority : {project.priority}</Text>
                                </GridItem>
                            )
                        })
                    }
                </SimpleGrid>
            }
        </Box>
    )
}

export default ProjectClient
