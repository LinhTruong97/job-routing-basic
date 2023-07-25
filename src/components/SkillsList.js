import React from "react";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(() => ({
    margin: "1px",
}));


const Skills = styled("ul")(({ theme }) => ({
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",

    backgroundColor: (theme) => theme.palette.primary.light,
}));


function SkillsList({ job }) {
    return (
        <Skills
            sx={{
                boxShadow: 0,
                p: 0.5,
                m: 0,
            }}
        >
            {job.skills?.slice(0, 4).map((skill) => (
                <ListItem key={skill}>
                    <Chip
                        size="small"
                        color="primary"
                        label={skill}
                        sx={{ paddingBottom: "2px", backgroundColor: "#df4747" }}
                    />
                </ListItem>
            ))}
        </Skills>
    );
}

export default SkillsList;