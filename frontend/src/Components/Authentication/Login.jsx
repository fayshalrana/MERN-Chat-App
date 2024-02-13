import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    // handle change function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    //show password
    const handleClick = () => {
        setShow(!show);
    }

    //handle form submission
    const handleSubmit = ()=>{

    }

    // handle guest login 
    const handleGuestLogin = ()=>{
        setData(prevData => ({
            ...prevData,
            email:"imfayshalrana@gmail.com",
            password: "123456"
        }));
    }

    return (
        <VStack>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    name="email"
                    placeholder='Enter your email'
                    value={data.email}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        name="password"
                        placeholder='Enter your password'
                        value={data.password}
                        type={show ? "text" : "password"}
                        onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hidden" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button colorScheme='blue'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={handleSubmit}
            >
                Login
            </Button>
            <Button colorScheme='orange'
                width="100%"
                style={{ marginTop: 15 }}
                onClick={handleGuestLogin}
            >
               Get Guest Profile
            </Button>
        </VStack>
    )
}

export default Login
