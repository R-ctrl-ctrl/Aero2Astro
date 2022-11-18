import { Box, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { collection, getDocs, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'

const DisplayProject = () => {

  const [projets, setprojects] = useState([])
  useEffect(() => {
    loadprojects()
  }, [])

  const loadprojects = async () => {
    const q = query(collection(firestore, "projects"))
    const querysnapshot = await getDocs(q)
    setprojects([])
    setprojects(querysnapshot.docs.map(docsnap => {
      return {
        ...docsnap.data()
      }
    }))



  }

  return (
    <Box w="full">
      <Box>
        <Heading>All Projects</Heading>
      </Box>
      <Box >
        {
          <SimpleGrid  columns={{sm:"1",lg:"2",md:"2",base:"1"}} rowGap={"4vh"} columnGap={"3vw"} marginTop="2vh">
            {
              projets
              &&
              projets.map((project, key) => {
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
    </Box>
  )
}

export default DisplayProject
