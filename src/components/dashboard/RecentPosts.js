import * as React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

const columns = [
  { field: "title", headerName: "Title", flex: 1 },
  { field: "views", headerName: "Views", flex: 1 },
  {
    field: "published",
    headerName: "Published",
    flex: 1,
    renderCell: (params) => (
      <div>
        <Chip
          sx={{
            minWidth: 90,
          }}
          label={params.row.publishedLabel}
          color={params.row.publishedColor}
          variant="outlined"
        />
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur. Aliquam  ",
    views: "100",
    publishedLabel: "Draft",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur. Aliquam  ",
    views: "100",
    publishedLabel: "Published",
    publishedColor: "success",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. Aliquam  ",
    views: "100",
    publishedLabel: "Pending",
    publishedColor: "warning",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur. Aliquam  ",
    views: "100",
    publishedLabel: "Published",
    publishedColor: "success",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur. Aliquam  ",
    views: "100",
    publishedLabel: "Draft",
  },
];

const RecentPosts = () => {
  return (
    <Card
      sx={{
        boxShadow: "rgba(20, 46, 110, 0.1) 0px 1px 8px",
        borderRadius: 3,
        height: 435,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          disableColumnMenu={true}
          columns={columns}
          getRowHeight={() => "auto"}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            [`& .${gridClasses.cell}`]: {
              py: 1,
            },
            border: "none",
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#3A55AD",
              ".MuiDataGrid-columnHeaderTitleContainer": {
                color: "#FFFFFF",
              },
              ".MuiDataGrid-sortIcon": {
                color: "#FFFFFF",
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default RecentPosts;
