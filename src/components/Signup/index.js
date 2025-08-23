import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { signUpUserStart } from '../../redux/User/user.actions';
import classNames from 'classnames';
import backgroundImage from '../../assets/images/ryan-johns-1MPHndKoQQ4-unsplash.jpg';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  Text,
  VStack,
  HStack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';

const AuthWrapper = ({ headline, children }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
      <Box
        bg={cardBg}
        p={8}
        rounded="2xl"
        shadow="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.100', 'gray.600')}
        w="full"
        maxW="md"
      >
        <VStack spacing={4} align="stretch" textAlign="center" mb={6}>
          <Heading as="h1" size="xl" color="blue.600">
            {headline}
          </Heading>
          <Text color={textColor}>
            Create your account to get started
          </Text>
        </VStack>
        {children}
      </Box>
  );
};

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push('/');
    }
  }, [currentUser, history]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword,
      })
    );
  };
  
  const configAuthWrapper = {
    headline: 'Create Account',
  };

  return (
    <div
      className={classNames({
        'sign-up-page-wrapper': true,
        'blur-effect': false, // Change this to a state variable if you have a modal
      })}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AuthWrapper {...configAuthWrapper}>
        <form onSubmit={handleFormSubmit}>
          <VStack spacing={6} align="stretch">
            {errors.length > 0 && (
              <Box color="red.500" p={2} rounded="md" borderWidth="1px" borderColor="red.200">
                {errors.map((err, index) => (
                  <Text key={index}>{err}</Text>
                ))}
              </Box>
            )}

            <FormControl id="displayName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="John Doe"
                borderColor="gray.300"
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                borderColor="gray.300"
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  borderColor="gray.300"
                  focusBorderColor="blue.500"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                borderColor="gray.300"
                focusBorderColor="blue.500"
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" size="lg" rounded="lg" width="full" mt={4}>
              Register
            </Button>
          </VStack>
        </form>

        <HStack spacing={1} justify="center" mt={6}>
          <Text>Already have an account?</Text>
          <Link to="/signin">
            <Text color="blue.500" fontWeight="bold">Log In</Text>
          </Link>
        </HStack>
      </AuthWrapper>
    </div>
  );
};

export default Signup;