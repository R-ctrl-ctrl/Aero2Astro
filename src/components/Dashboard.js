import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Emptydash from './Emptydash'
import Project from './Project'
import Client from './Client'

const Dashboard = () => {

  const [bg1, setbg1] = useState("white")
  const [bg2, setbg2] = useState("white")
  const [bg3, setbg3] = useState("white")

  const [val, setval] = useState(1)
  const [clientval, setclientval] = useState(0)
  const [projectval, setprojectval] = useState(0)

  const [color1, setcolor1] = useState("black")
  const [color2, setcolor2] = useState("black")
  const [color3, setcolor3] = useState("black")

  const handlemanager = () => {
    setclientval(1)
  }

  const handleClientdetails = () => {
    setclientval(2)
  }

  const handleprojectdetails = () => {
    setprojectval(1)
  }

  const { isOpen, onOpen, onClose } = useDisclosure()


  const handleone = async () => {
    setbg1("purple.200")
    setbg2("white")
    setbg3("white")
    setval(1)
    setclientval(0)
    setprojectval(0)
    setcolor1("purple")
    setcolor2("black")
    setcolor3("black")
  }

  const handletwo = async () => {
    setbg1("white")
    setbg2("purple.200")
    setbg3("white")
    setval(2)
    setclientval(0)
    setcolor1("black")
    setcolor2("purple")
    setcolor3("black")
  }

  const handlethree = async () => {
    setbg1("white")
    setbg2("white")
    setbg3("purple.200")
    setval(3)
    setprojectval(0)
    setcolor1("black")
    setcolor2("black")
    setcolor3("purple")
  }
  const navigate = useNavigate()

  const handlenew = () => {
    navigate('/createproject')
  }

  useEffect(() => {
    const curruser = auth.currentUser;

    if (!curruser) {
      navigate('/userenter')
    }
  }, [])

  const handlelogout = async () => {
    await signOut(auth)
    navigate('/userenter')
  }



  return (
    <Box minH="100vh" w="100vw" bg="blue.100" p={4} display="flex" justifyContent={"space-between"}>
      <Box h="90vh" w="22%" p={6} bg="white" display={{ lg: "block", md: "none", sm: "none", base: "none" }}>
        <VStack rowGap={"2vh"}  >

          <Accordion allowToggle w="full" >

            <AccordionItem onClick={handleone} marginTop={"1vh"} marginBottom={"1vh"}>
              <h2>
                <AccordionButton bg={bg1} _hover={{ bg: bg1 }} textColor={color1} borderRadius="5px" p={4}  >
                  <Box flex='1' textAlign='left'>
                    Dashboard
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
            </AccordionItem>

            <AccordionItem onClick={handletwo} marginTop={"1vh"} marginBottom={"1vh"} >
              <h2>
                <AccordionButton bg={bg2} _hover={{ bg: bg2 }} textColor={color2} borderRadius="5px" p={4} >
                  <Box flex='1' textAlign='left'>
                    Projects
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box onClick={handleprojectdetails} cursor="pointer">Project Detail</Box>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <Box onClick={handlenew} cursor="pointer">New Project</Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem onClick={handlethree} w="full" marginTop={"1vh"} marginBottom={"1vh"}  >
              <h2>
                <AccordionButton w="full" bg={bg3} _hover={{ bg: bg3 }} textColor={color3} borderRadius="5px" p={4} >
                  <Box flex='1' textAlign='left'>
                    Clients
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box onClick={handlemanager} cursor="pointer">Manager Client</Box>
              </AccordionPanel>
              <AccordionPanel pb={4}>
                <Box onClick={handleClientdetails} cursor="pointer">Client Details</Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem w="full" marginTop={"1vh"}   >
              <h2>
                <Button onClick={handlelogout} w="full" bg="red" color="white" fontSize={"20px"} borderRadius="5px" p={4} >
                  Logout
                </Button>
              </h2>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Box>


      {/* Drawer */}

      <Box display={{ lg: "none", md: "block", sm: "block", base: "block" }}>
        <Button colorScheme='blue' onClick={onOpen}>
          <HamburgerIcon fontSize={"20px"} />
        </Button>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Features drawer</DrawerHeader>
            <DrawerBody>
              <VStack rowGap={"2vh"} >

                <Accordion allowToggle w="full" >

                  <AccordionItem onClick={handleone} marginTop={"1vh"} marginBottom={"1vh"}>
                    <h2>
                      <AccordionButton bg={bg1} _hover={{ bg: bg1 }} borderRadius="5px" p={4}  >
                        <Box flex='1' textAlign='left'>
                          Dashboard
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>

                  <AccordionItem onClick={handletwo} marginTop={"1vh"} marginBottom={"1vh"} >
                    <h2>
                      <AccordionButton bg={bg2} _hover={{ bg: bg2 }} borderRadius="5px" p={4} >
                        <Box flex='1' textAlign='left'>
                          Projects
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box onClick={handleprojectdetails} cursor="pointer">Project Detail</Box>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Box onClick={handlenew} cursor="pointer">New Project</Box>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem onClick={handlethree} w="full" marginTop={"1vh"} marginBottom={"1vh"}  >
                    <h2>
                      <AccordionButton w="full" bg={bg3} _hover={{ bg: bg3 }} borderRadius="5px" p={4} >
                        <Box flex='1' textAlign='left'>
                          Clients
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box onClick={handlemanager} cursor="pointer">Manager Client</Box>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Box onClick={handleClientdetails} cursor="pointer">Client Details</Box>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem w="full" marginTop={"1vh"}   >
                    <h2>
                      <Button onClick={handlelogout} w="full" bg="red" color="white" fontSize={"20px"} borderRadius="5px" p={4} >
                        Logout
                      </Button>
                    </h2>
                  </AccordionItem>
                </Accordion>
              </VStack>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>







      <Box w={{ lg: "75%", md: "85%", sm: "85%", base: "85%" }}>
        {(() => {
          if (val === 1) {
            return <Emptydash />;
          } else if (val === 2) {
            return <Project projectval={projectval} />;
          } else {
            return <Client clientval={clientval} />;
          }
        })()}
      </Box>
    </Box>
  )
}

export default Dashboard
