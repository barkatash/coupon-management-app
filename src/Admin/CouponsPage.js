import { Box, Button, Typography, Paper, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { field: "id", headerName: "ID", width: 70, type: "number", align: "center", headerAlign: "center" },
  { field: "description", headerName: "Description", width: 130, align: "center", headerAlign: "center" },
  { field: "coupon_code", headerName: "Coupon Code", width: 120, align: "center", headerAlign: "center" },
  {
    field: "creator_user_id",
    headerName: "Creator ID",
    width: 90,
    type: "number",
    align: "center",
    headerAlign: "center"
  },
  {
    field: "created_at",
    headerName: "Created At",
    type: "dateTime",
    width: 100,
    valueGetter: (params) => {
      return params.row && params.row.created_at
        ? new Date(params.row.created_at)
        : null;
    },
    align: "center",
    headerAlign: "center"
  },
  {
    field: "discount_type",
    headerName: "Discount Type",
    sortable: false,
    width: 120,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "discount_value",
    headerName: "Discount Value",
    type: "number",
    sortable: false,
    width: 130,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "expiry_date",
    headerName: "Expiry Date",
    type: "date",
    width: 110,
    valueGetter: (params) => {
      return params.row && params.row.expiry_date
        ? new Date(params.row.expiry_date)
        : null;
    },
    align: "center",
    headerAlign: "center"
  },
  {
    field: "allow_combination",
    headerName: "Allow Combination",
    type: "boolean",
    width: 160,

  },
  {
    field: "usage_limit",
    headerName: "Usage Limit",
    type: "number",
    width: 120,
  },
  {
    field: "usage_count",
    headerName: "Usage Count",
    type: "number",
    width: 120,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 120,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      );
    },
  },
];

//The rows should be fetched from API.
const rows = [
  {
    id: 1,
    description: "10% off on all items",
    coupon_code: "SAVE10",
    creator_user_id: 101,
    created_at: "2024-11-07T10:20:30Z",
    discount_type: "percent",
    discount_value: 10,
    expiry_date: "2024-12-31",
    allow_combination: true,
    usage_limit: 50,
    usage_count: 10,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export function CouponsPage() {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            padding: "10px",
            fontSize: "1.5rem",
            fontWeight: 600,
            margin: "10px",
          }}
        >
          Coupons
        </Typography>
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            marginLeft: "20px",
            marginBottom: "30px",
            padding: "10px",
            textTransform: "capitalize",
          }}
        >
          Add new
        </Button>
      </Box>

      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  );
}
