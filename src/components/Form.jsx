import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'
import useNews from '../hooks/useNews'

const categories = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

export default function Form () {

    const {category, handleChangeCategory} = useNews()
    
    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select
                    label="Categoría"
                    defaultValue={''}
                    onChange={handleChangeCategory}
                    value={category}
                >
                    {categories.map(category => (
                        <MenuItem key={category.value} value={category.value}>
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>
                <Box sx={{
                    marginTop: 2
                }}>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        Buscar noticias
                    </Button>

                </Box>
            </FormControl>
        </form>
    )
}
