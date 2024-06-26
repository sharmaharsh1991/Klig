import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Statistics from "../components/dashboard/Statistics";
import Metrics from "../components/dashboard/Metrics";
import RecentPosts from "../components/dashboard/RecentPosts";
import Insights from "../components/dashboard/insights";

const Dashboard = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              "@media (max-width:600px)": {
                flexDirection: "column",
                marginBottom: "30px",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "2.5rem",
                "@media(max-width:1199px)": {
                  fontSize: "2rem",
                },
                "@media(max-width:767px)": {
                  fontSize: "1.5rem",
                },
                "@media(max-width:600px)": {
                  marginBottom: "10px",
                },
              }}
            >
              Dashboard
            </Typography>

            <FormControl sx={{ flex: 1, maxWidth: 220 }} size="small">
              <Select
                sx={{
                  backgroundColor: "#fff",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(216,216,216,0.61)",
                  },
                }}
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Select App</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} mb={3}>
        <Statistics />
      </Grid>

      <Grid container spacing={3} mb={3}>
        <Metrics />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <RecentPosts />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Insights />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
