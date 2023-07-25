import { Container, Grid, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'

import jobs from "../data/jobs.json"
import JobCard from '../components/JobCard'
import styled from '@emotion/styled'

const jobsPerPage = 5

const CentterPagination = styled(Pagination)(() => ({
    ul: {
        justifyContent: "center",
    },
}));

function HomePage() {
    const [currentJobs, setCurrentJobs] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(jobs.length / jobsPerPage));
        const currentJobs = jobs.slice((pages - 1) * jobsPerPage, pages * jobsPerPage);
        setCurrentJobs(currentJobs)
    }, [pages])

    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                {currentJobs.map((job) => (
                    <Grid key={job.id} item xs={12} sm={6} md={4} lg={4}>
                        <JobCard job={job} />
                    </Grid>
                ))}
            </Grid>
            <CentterPagination
                sx={{ marginTop: "15px" }}
                count={totalPages}
                onChange={(event, value) => {
                    setPages(value);

                }}
            />
        </Container>
    )
}

export default HomePage
