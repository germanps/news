/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Card, CardContent, CardMedia, Link, CardActions, Typography, Grid } from '@mui/material'


const New = (props) => {

    const {urlToImage, url, title, description, source} = props.new

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia 
                        component={'img'}
                        alt={title}
                        image={urlToImage}
                        height={'450'}
                    />
                )}
                <CardContent>
                    <Typography
                        variant='body1'
                        color={'error'}
                    >
                        {source.name}
                    </Typography>
                    <Typography
                        variant='h5'
                        component={'div'}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link 
                        href={url}
                        target='_blank'
                        variant='button'
                        color='primary'
                        width='100%'
                        textAlign='center'
                        sx={{
                            textDecoration: 'none'
                        }}
                    >
                        Leer noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default New