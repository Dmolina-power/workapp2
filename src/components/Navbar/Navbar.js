import React from 'react';
import { Box, Flex, HStack, Text, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});

const ChakraNavbar = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    return (
        <Box bg="gray.800" color="white" px={4} py={2} position="fixed" top="0" width="full" zIndex="1000">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box>
                    <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">NoName</Link>
                </Box>
                
                {currentUser ? (
                    <HStack spacing={8} alignItems="center">
                        <Link as={RouterLink} to="/feed">
                            <Text>Feed</Text>
                        </Link>
                        <Button colorScheme="teal" onClick={signOut}>Sign out</Button>
                    </HStack>
                ) : (
                    <HStack spacing={8} alignItems="center">
                        <Link as={RouterLink} to="/signin">
                            <Text>Login</Text>
                        </Link>
                    </HStack>
                )}
            </Flex>
        </Box>
    );
};

export default ChakraNavbar;
