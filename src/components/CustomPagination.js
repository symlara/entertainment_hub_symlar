import React from "react";
import Pagination from "@mui/material/Pagination";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from "@mui/material";

// const theme = createTheme({
//     palette: {
//       neutral: {
//         main: '#fff',
//         contrastText: '#fff',
//       },
//     },
//   });

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Stack spacing={2}>
        <Pagination
          shape="rounded"
          count={10}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </Stack>

      {/* <ThemeProvider theme={theme}>
            <Pagination 
                variant="contained"
                size="large"
                color="neutral"
                count={numOfPages} 
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
        </ThemeProvider> */}
    </div>
  );
}
