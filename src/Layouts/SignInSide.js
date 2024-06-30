/* eslint-disable no-undef */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';


// Add background image

const backgroundImage = require('../Images/background.png');
const logo = require('../Images/BSEEseal_2023 (1).png');


const defaultTheme = createTheme();

export default function SignInSide() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>

      {/* BACKGROUND IMAGE */}
      <Grid container component="main"
        sx={{
          height: '100vh',

          backgroundImage:
            `url(${backgroundImage})`,
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'left',
        }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        />
        {/* SIGN IN GRID */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* LOGO */}
            <Avatar

              alt="Logo"
              src={logo}
              sx={{ width: 350, height: 288, mt: 6 }}
            />

            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Box
              display="flex"
              alignItems="center"
              justifyContent="left"
              width="100%"
              sx={{ my: 3, mx: 4 }}
            >
              <Divider sx={{ width: '40%', backgroundColor: 'grey.500' }} />
              <Typography sx={{ marginX: 2, color: 'grey.500' }}>Or</Typography>
              <Divider sx={{ width: '40%', backgroundColor: 'grey.500' }} />
            </Box>

              <Button

                type="submit"
                fullWidth
                variant="outlined"
                endIcon={<LockOutlinedIcon />}
                sx={{ mt: 3, mb: 2 }}
              >
                SIGN-IN WITH PIV

              </Button>

            </Box>
           </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}