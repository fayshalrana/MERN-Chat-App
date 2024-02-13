import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../Components/Authentication/Login'
import SignUp from '../Components/Authentication/SignUp'

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        className='justify-center flex'
      >
        <Text fontSize="4xl" fontFamily="Work sans">Talk-A-Live</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth='1px'>
        <Tabs variant='unstyled'>
          <TabList mb="1em">
            <Tab width="50%" _selected={{ color: 'white', bg: 'blue.500' }}>Login</Tab>
            <Tab width="50%" _selected={{ color: 'white', bg: 'green.400' }}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Home
