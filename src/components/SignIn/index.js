import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText,
  Heading,
  Text,
  VStack,
  HStack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import classNames from 'classnames';
import backgroundImage from '../../assets/images/ryan-johns-1MPHndKoQQ4-unsplash.jpg'; // Import the image

// AuthWrapper remains the same
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
          Sign in to your account to continue
        </Text>
      </VStack>
      {children}
    </Box>
  );
};

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = ({ onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      // 1. Check for onClose before calling it
      if (onClose) {
        onClose();
      }
      // 2. Redirect to the homepage after successful login
      history.push('/');
    }
  }, [currentUser, history, onClose]);

  useEffect(() => {
    // This hook is for opening the modal on a dedicated sign-in page, if you're not using a modal on the home page.
    if (!currentUser) {
      setIsModalOpen(true);
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const signInPageClasses = classNames({
    'sign-in-page-wrapper': true,
    'blur-effect': isModalOpen,
  });

  return (
    <div
      className={signInPageClasses}
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
      <AuthWrapper headline="Welcome Back">
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                borderColor="gray.300"
                focusBorderColor="blue.500"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
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
              <FormHelperText>
                <Link to="/passwordReset">
                  <Text color="blue.500" fontWeight="medium">Forgot password?</Text>
                </Link>
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              rounded="lg"
              width="full"
              mt={4}
            >
              Sign In
            </Button>
            <Button
              leftIcon={<FaGoogle />}
              colorScheme="gray"
              size="lg"
              rounded="lg"
              width="full"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </Button>
            <HStack spacing={1} justify="center" mt={4}>
              <Text>Don't have an account?</Text>
              <Link to="/registration">
                <Text color="blue.500" fontWeight="bold">Register</Text>
              </Link>
            </HStack>
          </VStack>
        </form>
      </AuthWrapper>
    </div>
  );
};

export default SignIn;