import { Box } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from './Login'
import Register from './Register'

const userenter = () => {
    return (
        <Box w="100vw" h="100vh" bg="blue.100" display={"flex"} justifyContent="center" alignItems={"center"}>
            <Box borderRadius={15} w={{lg:"45%",md:"60%" , sm:"80%",base:"90%"}}  bg="white" p={5}>
                <Tabs w="full" variant='soft-rounded' >
                    <TabList>
                        <Tab w="50%"_selected={{ color: 'white', bg: 'blue' }}>Login</Tab>
                        <Tab w="50%" _selected={{ color: 'white', bg: 'blue' }}>Register</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <Register/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Box>
    )
}

export default userenter
