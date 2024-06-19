import { Stack } from 'react-bootstrap';
import Calendar from './Calendar';

export default function Home() {
    return (
        <Stack className='home col-md-5 mx-auto p-5'>
            <Calendar />
        </Stack>
    )
}