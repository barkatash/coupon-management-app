import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const columns = [
  { field: "id", headerName: "ID", width: 90, type: "number", align: "center", headerAlign: "center" },
  { field: "coupon_code", headerName: "Coupon Code", width: 150, align: "center", headerAlign: "center" },
  {
    field: "creator_user_id",
    headerName: "Creator ID",
    width: 150,
    type: "number",
    align: "center",
    headerAlign: "center"
  },
  {
    field: "created_at",
    headerName: "Created At",
    type: "dateTime",
    width: 150,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      return params.row && params.row.created_at
        ? new Date(params.row.created_at)
        : null;
    },
  },
  {
    field: "used_by_id",
    headerName: "Used By User ID",
    width: 150,
    align: "center",
    headerAlign: "center",
    type: "number",
  },
  {
    field: "usage_date",
    headerName: "Usage Date",
    type: "dateTime",
    width: 150,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      return params.row && params.row.usage_date
        ? new Date(params.row.usage_date)
        : null;
    },
  },
  {
    field: "usage_count",
    headerName: "Usage Count",
    type: "number",
    align: "center",
    width: 150,
    headerAlign: "center",
  },
  {
    field: "location",
    headerName: "Location",
    align: "center",
    headerAlign: "center",
    width: 150,
  },
];

//The rows should be fetched from API.
const rows = [
  {
    id: 1,
    coupon_code: "SAVE10",
    creator_user_id: 1,
    created_at: "2024-11-07T10:20:30Z",
    used_by_id: 101,
    usage_date: "2024-11-07T10:20:30Z",
    discount_type: "percent",
    usage_count: 4,
    location: "Holon Mall",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export function ReportsPage() {
  const [fromDate, setFromDate] = useState(null);
  const [tillDate, setTillDate] = useState(null);

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            padding: "5px",
            fontSize: "1.5rem",
            fontWeight: 600,
            marginLeft: "15px",
            marginTop: "15px",
          }}
        >
          Reports
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              marginLeft: "20px",
              marginBottom: 0,
              padding: "10px",
              height: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Search By Creator ID :
          </Typography>

          <TextField
            id="standard-basic"
            variant="outlined"
            sx={{
              width: "140px",
              "& input": {
                fontSize: "1rem",
                padding: "10px",
              },
            }}
          />

          <Typography
            sx={{
              marginLeft: "20px",
              marginBottom: 0,
              padding: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Search By Date :
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="From"
                defaultValue={dayjs("2022-04-17")}
                value={fromDate}
                onChange={(newValue) => setFromDate(newValue)}
              />
              <DatePicker
                label="To"
                value={tillDate}
                onChange={(newValue) => setTillDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>

        <Typography
          sx={{
            padding: "10px",
            fontSize: "1.5rem",
            fontWeight: 600,
            margin: "10px",
          }}
        >
          Coupon Usage Tracking
        </Typography>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            marginLeft: "20px",
            marginBottom: "10px",
            padding: "3px",
            textTransform: "capitalize",
          }}
        >
          CSV
        </Button>
      </Box>

      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  );
}
