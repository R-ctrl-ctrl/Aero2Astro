import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ProjectClient from './ProjectClient'
import DisplayClients from './DisplayClients'


const Client = ({ clientval }) => {

    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/createclient')
    }

    

    return (
        <Box w="full" h="full" >
            <Box>
                <Heading>Client Details</Heading>
            </Box>
            <Box marginTop={"4vh"} display={"flex"} flexDir={{lg:"row" ,md:"column" , sm:"column" , base:"column"}} h={{lg:"18vh"}}  alignItems={{md:"center",lg:"center"}} justifyContent={"space-between"}>
                <Box p={4} alignItems={{base:"center" , sm:"center"}} marginBottom={{md:"5vh",base:"5vh",sm:"5vh",lg:"0"}} flexDir={{base:"column" , sm:"column" , md:"row",lg:"row"}}  borderRadius={"10px"} w={{lg:"70%" , md:"full"}} h="full" bg="white" display={"flex"}  justifyContent={"space-between"}>
                    <Box mb={{base:"3vh", sm:"2vh",lg:"0vh"}} w={{lg:"30%" , md:"40%" , sm:"60%" , base:"70%"}} p={2} h="full" bg="blue.100" borderRadius={"10px"} display="flex" justifyContent={"center"} alignItems="center">
                        <Box p={2}>
                            <Text fontWeight={"semibold"}>Total Clients</Text>
                            <Text textAlign={"center"} fontWeight="bold" textColor={"blue"}>4</Text>
                        </Box>
                    </Box>
                    <Box p={2} w={{lg:"30%" , md:"40%" ,sm:"60%" , base:"70%"}} h="full" bg="orange.100" borderRadius={"10px"} display="flex" justifyContent={"center"} alignItems="center">
                        <Box p={2}>
                            <Text fontWeight={"semibold"}>Current Clients</Text>
                            <Text textAlign={"center"} fontWeight="bold" textColor={"orange"}>4</Text>
                        </Box>
                    </Box>
                </Box>
                <Box p={2}  w={{lg:"25%" , md:"40%"}} borderRadius="15px" h="full"  display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Button bg="blue" textColor={"white"} w="90%" _hover={{ bg: "blue" }} onClick={handleclick} >Create new Client</Button>
                </Box>
            </Box>
            <Box>
                {(() => {
                    if (clientval === 1) {
                        return <DisplayClients/>;
                    } else if (clientval === 2) {
                        return <ProjectClient />;
                    } else {
                        return <Box></Box>;
                    }
                })()}
            </Box>
        </Box>
    )
}

export default Client
