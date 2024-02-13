import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        picture: ""
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

    return (
        <VStack>
            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    name="name"
                    placeholder='Enter your name'
                    value={data.name}
                    onChange={handleChange}
                />
            </FormControl>
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
            <FormControl id="confirm-password" isRequired>
                <FormLabel>confirm password</FormLabel>
                <InputGroup>
                    <Input
                        name="confirmPassword"
                        placeholder='Enter your confirm password'
                        value={data.confirmPassword}
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
            <FormControl id="pic" isRequired>
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                className="border-none outline-none "
                    name="picture"
                    type='file'
                    accept='image/*'
                    onChange={handleChange}
                />
            </FormControl>
            <Button colorScheme='blue'
            width="100%"
            style={{marginTop: 15}}
            onClick={handleSubmit}
            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default SignUp
