import Header from '../components/Header';
import HeroPageTitle from '../components/HeroPageTitle';
import Footer from '../components/Footer';
import {
  Box,
  Flex,
  Button,
  Input,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'First Name must be at least 3 characters')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(3, 'Last Name must be at least 3 characters')
    .required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
    )
    .required('Password is required'),
});

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem('userInfo', JSON.stringify(values));
    navigate('/booking');
  };

  return (
    <>
      <Header />
      <HeroPageTitle title="Login" />
      <Box maxW="980px" mx="auto" my="5em">
        <Flex
          justifyContent="center"
          w={{ base: '90%', md: '90%' }}
          mx={'auto'}
        >
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              handleSubmit(values);
              actions.setSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Box>
                  <Field name="firstName">
                    {({ field }) => (
                      <FormControl
                        isInvalid={errors.firstName && touched.firstName}
                      >
                        <FormLabel htmlFor="firstName">
                          First Name<span style={{ color: 'red' }}>*</span>:
                        </FormLabel>
                        <Input
                          {...field}
                          id="firstName"
                          placeholder="First Name"
                        />
                        <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mt={4}>
                  <Field name="lastName">
                    {({ field }) => (
                      <FormControl
                        isInvalid={errors.lastName && touched.lastName}
                      >
                        <FormLabel htmlFor="lastName">
                          Last Name<span style={{ color: 'red' }}>*</span>:
                        </FormLabel>
                        <Input
                          {...field}
                          id="lastName"
                          placeholder="Last Name"
                        />
                        <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mt={4}>
                  <Field name="email">
                    {({ field }) => (
                      <FormControl isInvalid={errors.email && touched.email}>
                        <FormLabel htmlFor="email">
                          Email<span style={{ color: 'red' }}>*</span>:
                        </FormLabel>
                        <Input
                          {...field}
                          id="email"
                          placeholder="Email"
                          type="email"
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mt={4}>
                  <Field name="password">
                    {({ field }) => (
                      <FormControl
                        isInvalid={errors.password && touched.password}
                      >
                        <FormLabel htmlFor="password">
                          Password<span style={{ color: 'red' }}>*</span>:
                        </FormLabel>
                        <Input
                          {...field}
                          id="password"
                          placeholder="Password"
                          type="password"
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Box mt={4}>
                  <Button type="submit" colorScheme="yellow">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
