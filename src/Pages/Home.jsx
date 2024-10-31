import Navbar from "../Components/Navbar";
import SideNav from "../Sidenav";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import "./Home.css";
import PaymentIcon from '@mui/icons-material/Payment';
import AddCardIcon from '@mui/icons-material/AddCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Accordionfun from "../Components/Accordion";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

const Home = () => {
    return (
        <> 
        <Navbar/>
        <Box height={60}/>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
            <Box component="main" sx={{flexGrow:1,p:3}}>
            <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack direction="row" spacing={2}>
        <Card sx={{ minWidth: 50 + "%", height:140 }}>
      <CardContent>
        <div>
        <AddCardIcon/>
        </div>
        <Typography gutterBottom variant="h5" component="div">
          $500
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"black"}}>
          Total Earnings
        </Typography>
      </CardContent>
    </Card>

    <Card className="Grad_Color" sx={{  minWidth: 50 + "%", height:140 }} >
      <CardContent>
      <div>
        <ShoppingBagIcon/>
        </div>
        <Typography gutterBottom variant="h5" component="div">
          $900
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"black"}}>
          Total Earnings
        </Typography>
      </CardContent>
    </Card>

    </Stack>
          
        </Grid>
        <Grid item xs={4}>
        <Stack  spacing={2}> 
        <Card sx={{ maxWidth: 345 }}>
        <Stack spacing={2} direction="row">
            <div className="Icon_style">
            <PaymentIcon/>
            </div>
        <div className="card_padding">
            <span className="Price_Title">$230K</span>
            <span className="Income">Total Income</span>
        </div>
        </Stack>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
    <Stack spacing={2} direction="row">
            <div className="Icon_style">
            <PaymentIcon/>
            </div>
        <div className="card_padding">
            <span className="Price_Title">$230K</span>
            <span className="Income">Total Income</span>
        </div>
        </Stack>
    </Card>
         </Stack>
        </Grid>
      </Grid>

<Box height={20}/>
      <Grid container spacing={2}>
  <Grid item xs={8}>
  <Card sx={{ height:60 + "vh" }}>
      <CardContent>
      </CardContent>
    </Card>

  </Grid>
  <Grid item xs={4}>
    
  <Card sx={{ height:60+"vh" }}>
      <CardContent>
        <span className="Price_Title">
            Popular Product
        </span>
        <Accordionfun/>
      </CardContent>
    </Card>

  </Grid>
</Grid>
   
                <h1>Home</h1>
            </Box>
            </Box>
        </>
    )

}

export default Home;