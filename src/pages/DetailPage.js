import React from 'react'
import jobs from "../data/jobs.json"
import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material';


function DetailPage() {
    const params = useParams();
    const jobId = params.id;
    const job = jobs.find((job) => job.id === jobId)

    if (!job) {
        return <Typography variant="h3" marginTop={3}>
            No job found
        </Typography>
    }
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant="h3" marginTop={3}>
                {job.title}
            </Typography>


        </Container>
    )
}

export default DetailPage
