import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Pagination, Stack } from '@mui/material'
import useNews from '../hooks/useNews'
import New from './New'


 const NewsList = () => {

    const {news, totalNews, handleChangePage, page} = useNews()

    const totalPages = Math.ceil(totalNews / 20)

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={10}
                variant={'h3'}
                component={'h2'}
            >
                Últimas noticias
            </Typography>
            <Grid container spacing={4} sx={{maxWidth: '1440px', margin: 'auto'}}>
               {news.map(el => (
                    <New 
                        key={el.url}
                        new={el}
                    />
                ))}
            </Grid>
            <Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} sx={{margin: '4rem 0'}}>
                <Pagination 
                    count={totalPages} 
                    color='primary' 
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    )
}

export default NewsList