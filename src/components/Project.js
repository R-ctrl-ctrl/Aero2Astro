import { Box, Button, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DisplayProject from './DisplayProject'

const Project = ({ projectval }) => {

    const navigate = useNavigate()
    const handleclick = async () => {
        navigate('/createproject')
    }
    return (
        <Box w="full" h="full" pl={2}>
            <Box>
                <Heading>Projects</Heading>
            </Box>
            <Box marginTop={"4vh"} w="full" display={"flex"} flexDir={{ md: "column", lg: "row", sm: "column" , base:"column"}} h={{lg:"21vh"}} justifyContent={{ lg: "space-between" }} alignItems={{ md: "center", sm: "center" , base:"center" }}>
                <SimpleGrid  w={{lg:"70%" , md:"full",sm:"full",base:"full"}} marginBottom={"3vh"} columns={{lg:"4",md:"2",sm:"1",base:"1"}} columnGap={{lg:"2vh",md:"3vh"}} rowGap={{md:"3vh",sm:"2vh",base:"1vh"}}>
                    <GridItem>
                        <Box  h="full" bg="blue.50" borderRadius={"10px"} display="flex" justifyContent={"center"} alignItems="center">
                            <Box p={4}>
                                <Text textAlign={"center"} fontWeight={"semibold"}>Total Projects</Text>
                                <Text textAlign={"center"} textColor="blue" fontWeight={"bold"}>10</Text>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box  h="full" bg="orange.100" borderRadius={"10px"} display="flex" justifyContent={"center"} alignItems="center">
                            <Box p={4}>
                                <Text textAlign={"center"} fontWeight={"semibold"}>Pending Projects</Text>
                                <Text textAlign={"center"} fontWeight="bold" textColor={"orange"}>3</Text>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box  h="full" bg="green.100" borderRadius={"10px"} display="flex" justifyContent={"center"} alignItems="center">
                            <Box p={4}>
                                <Text textAlign={"center"} fontWeight={"semibold"}>Ongoing Projects</Text>
                                <Text textAlign={"center"} fontWeight="bold" textColor={"green"}>2</Text>
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box  p={4} h="full" bg="red.100" borderRadius={"10px"} display="flex" justifyContent={"center"} alignItems="center">
                            <Box>
                                <Text textAlign={"center"} fontWeight={"semibold"}>Completed Projects</Text>
                                <Text textAlign={"center"} fontWeight="bold" textColor={"red"}>5</Text>
                            </Box>
                        </Box>
                    </GridItem>
                </SimpleGrid>
                <Box w={{ lg: "25%", md: "37%", sm: "60%" , base:"75%" }} borderRadius="15px" p={3} h="full"  display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Button  bg="blue" textColor={"white"} w="95%" _hover={{ bg: "blue" }} onClick={handleclick} >Create new project</Button>
                </Box>
            </Box>

            <Box>
                {(() => {
                    if (projectval === 1) {
                        return <DisplayProject />;
                    } else {
                        return <Box></Box>;
                    }
                })()}
            </Box>
        </Box>
    )
}

export default Project
