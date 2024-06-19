import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Calendar() {
    let currentDate = new Date();
    const apiUrl = `https://financialmodelingprep.com/api/v3/economic_calendar?`;
    const [events, setEvents] = useState([]);

    let fetchEvents = async () => {
        try {
            let res = await axios.get(apiUrl);
            let currentDateStr = `${currentDate.getUTCFullYear()}-${String(currentDate.getUTCDate()).padStart(2, '0')}-${String(currentDate.getUTCMonth()+1).padStart(2, '0')} ${String(currentDate.getUTCHours()).padStart(2, '0')}:${String(currentDate.getUTCMinutes()).padStart(2, '0')}:${String(currentDate.getUTCSeconds()).padStart(2, '0')}`;
            let data = res.data.filter(event => event.date === currentDateStr);
            setEvents(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEvents();
        console.log(events);
    }, []);

    return (
            <table className='calendar container-fluid'>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>1h %</td>
                        <td>24h %</td>
                        <td>7d %</td>
                        <td>Volume (24h)</td>
                        <td>Circulating Supply</td>
                        <td>Market Cap</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
    )
}