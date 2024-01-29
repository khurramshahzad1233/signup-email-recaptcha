import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import emailjs from '@emailjs/browser';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";




const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const password= data.get('password');
    const confirmpassword=data.get("cpassword");
    const name=data.get("name");
    const email= data.get('email');

    if (password===confirmpassword){

      try {
        const {data}=await axios.post("http://localhost:5000/api/user/register",{name,email,password},{
          headers:{
            "Content-Type":"application/json"
          }
        });

        toast.success("user sign up successfully");
        console.log(data)
        
      } catch (error) {
        console.log(error)
        toast.warning(error.response.data.message)
        
      }
    } else {
      toast.warning("Password does not match")
    }
    
  
  };

  // const handlecheckbox=(event)=>{
  //   console.log(event.target.checked)
  //   emailjs.sendForm('service_3p0rs64', 'template_k1zqokj', {user_name:"khurram"}, 'bC_0Ca0TiojAmBIL7')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  id="cpassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary"  />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              <Grid item xs={12}>
              <ReCAPTCHA

              sitekey="6LcKal0pAAAAAJYc5_k0gtBggvip2Lu6S3-siFj0"
              onChange={onChange}
              />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            
          </Box>
        </Box>
      </Container>
      <ToastContainer  position="top-center"/>
    </ThemeProvider>
  );
}