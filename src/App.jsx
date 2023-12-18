
import {Container, Grid, Typography} from '@mui/material'
import { NewsProvider } from './context/NewsProvider'
import  Form  from './components/Form'

function App() {

  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} fontWeight="bold" component="h1" variant='h2'>
            Buscador de noticias
          </Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>

    </NewsProvider>
  )
}

export default App
