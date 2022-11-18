import { Box, Button, Heading, Progress, Text } from '@chakra-ui/react'
import { collection, getDocs, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { firestore } from '../firebase'

const Emptydash = () => {

  const navigate = useNavigate()
  const handleclick = async () => {
    navigate('/createproject')
  }
  const [count, setcount] = useState()

  useEffect(() => {

    loadclients()
  }, [])
  const loadclients = async () => {
    const q = query(collection(firestore, "clients"))
    const querysnapshot = await getDocs(q)
    let len = 0;
    querysnapshot.docs.map(docsnap => {
      len++;
    })
    setcount(len)

  }


  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Box marginTop={"3vh"} >
        <Button onClick={handleclick} w={{base:"70%",sm:"55%",md:"40%",lg:"30%"}} bg="blue" _hover={{ bg: "blue" }} textColor="white">Create new project</Button>
      </Box>
      <Box display={"flex"}  alignItems={{ sm: "center", md: "center" }} flexDirection={{ base:"column", sm: 'column', md: 'column', lg: 'row' }} justifyContent={{ lg: "space-evenly" }}>
        <Box fontSize={"20px"} p={3} borderRadius="10px" mt="4vh" bg="white" w={{ sm: "70%", md: "60%" , lg:"30%" }} display={"flex"} justifyContent="center" alignItems={"center"}>
          <Box fontWeight={"bold"} textAlign={"center"}>
            <Text>Total Clients</Text>
            {count && count}
          </Box>
        </Box>

        <Box p={3} fontSize="20px" borderRadius="10px" mt="4vh" bg="white" w={{ sm: "70%", md: "60%" , lg:"30%" }} display={"flex"} justifyContent="center" alignItems={"center"}>
          <Box p={2} fontWeight={"bold"} textAlign={"center"}>
            <Text mb="2vh"> Total Projects Completed</Text>
            <Progress colorScheme='blue' size='sm' value={50} />
            <Text>5 out of 10</Text>
          </Box>
        </Box>

        <Box p={4} borderRadius="10px" mt="4vh" bg="white" w={{ sm: "70%", md: "60%" , lg:"30%" }} display={"flex"} flexDir="column" justifyContent="center" alignItems={"center"}>
          <Box>
            <Text fontWeight={"bold"} fontSize="20px">Projects Category</Text>
          </Box>
          <Box w="full" display={"flex"} justifyContent="space-between" >
            <Text fontWeight={"semibold"}>Software development</Text>
            <Text fontWeight={"semibold"}>40%</Text>
          </Box>
          <Box w="full" display={"flex"} justifyContent="space-between" >
            <Text fontWeight={"semibold"}>UI/UX development</Text>
            <Text fontWeight={"semibold"}>30%</Text>
          </Box>
          <Box w="full" display={"flex"} justifyContent="space-between" >
            <Text fontWeight={"semibold"}>Graphic design</Text>
            <Text fontWeight={"semibold"}>20%</Text>
          </Box>
          <Box w="full" display={"flex"} justifyContent="space-between" >
            <Text fontWeight={"semibold"}>others</Text>
            <Text fontWeight={"semibold"}>10%</Text>
          </Box>
        </Box>
      </Box>


    </Box>
  )
}

export default Emptydash
