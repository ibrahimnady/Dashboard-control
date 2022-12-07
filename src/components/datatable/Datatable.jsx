import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Datatable = () => {
  const [data,setData] = useState(userRows)
  const handleDelete =(id)=>{
    setData(data.filter(item=>item.id !== id))
  }
  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <button className="viewButton">View</button>
            </Link>

            <button className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</button>
          </div>
        )
      }
    }
  ]

  return (
    <>
      <div className="datatable">
        <div className="dataTableTitle">
          Add New User
          <Link to="/users/new" className="link">
            Add New
            <i className="fa-solid fa-user-plus ms-1"/>
          </Link>
        </div>
        <DataGrid className="datagrid" rows={data} columns={userColumns.concat(actionColumn)} pageSize={9} rowsPerPageOptions={[9]} checkboxSelection />
      </div>
    </>
  );
};

export default Datatable;
