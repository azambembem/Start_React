// import React, { useState } from "react";
// import {
//   Table,
//   Space,
//   Tag,
//   Drawer,
//   Input,
//   Button,
//   InputNumber,
//   Select
// } from "antd";

// const { Option } = Select;

// const dummy_data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"]
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"]
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"]
//   }
// ];

// function useStateProj() {
//   const [data, setData] = useState(dummy_data);
//   const [editOpen, setEditOpen] = useState({ open: false, props: {} });
//   const [addOpen, setAddOpen] = useState({ open: false, props: {} });
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [searchValue, setSearchValue] = useState("");

//   const handleSearch = (value) => {
//     setSearchValue(value);
//   };

//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       filters: [
//         {
//           text: "John Brown",
//           value: "John Brown"
//         },
//         {
//           text: "Jim Green",
//           value: "Jim Green"
//         },
//         {
//           text: "Joe Black",
//           value: "Joe Black"
//         }
//       ],
//       onFilter: (value, record) => record.name.indexOf(value) === 0,
//       sorter: (a, b) => a.name.length - b.name.length,
//       sortDirections: ["descend", "ascend"],
//       showSorterTooltip: {
//         target: "full-header"
//       }
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       key: "age",
//       defaultSortOrder: "descend",
//       sorter: (a, b) => a.age - b.age
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       key: "address",
//       filters: [
//         {
//           text: "London",
//           value: "London"
//         },
//         {
//           text: "New York",
//           value: "New York"
//         }
//       ],
//       onFilter: (value, record) => record.address.indexOf(value) === 0
//     },
//     {
//       title: "Tags",
//       key: "tags",
//       dataIndex: "tags",
//       render: (_, { tags }) => (
//         <>
//           {tags.map((tag) => {
//             let color = tag.length > 5 ? "geekblue" : "green";
//             if (tag === "loser") {
//               color = "volcano";
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </>
//       )
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, { key, ...record }) => (
//         <Space size="middle">
//           <a
//             onClick={() => {
//               setEditOpen({ open: true, props: { key, ...record } });
//             }}
//           >
//             Edit
//           </a>
//           <a onClick={() => onDelete(key)}>Delete</a>
//         </Space>
//       )
//     }
//   ];

//   const onDelete = (key) => {
//     setData(data.filter((item) => item.key !== key));
//   };

//   const onDeleteSelected = () => {
//     setData(data.filter((item) => !selectedRowKeys.includes(item.key)));
//     setSelectedRowKeys([]);
//   };

//   const onTableChange = (pagination, filters, sorter, extra) => {
//     console.log("params", pagination, filters, sorter, extra);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: (selectedRowKeys) => {
//       setSelectedRowKeys(selectedRowKeys);
//     }
//   };

//   return (
//     <div>
//       <Select
//         showSearch
//         style={{ width: 200, marginBottom: 20 }}
//         placeholder="Search by Name"
//         onChange={handleSearch}
//         optionFilterProp="children"
//         filterOption={(input, option) =>
//           option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//         }
//       >
//         {dummy_data.map((item) => (
//           <Option key={item.key} value={item.name}>
//             {item.name}
//           </Option>
//         ))}
//       </Select>
//       <Button
//         onClick={onDeleteSelected}
//         disabled={!selectedRowKeys.length}
//         style={{ marginBottom: 20 }}
//       >
//         Delete Selected
//       </Button>
//       <Table
//         columns={columns}
//         dataSource={filteredData}
//         onChange={onTableChange}
//         rowSelection={rowSelection}
//         showSorterTooltip={{
//           target: "sorter-icon"
//         }}
//       />
//       <Button onClick={() => setAddOpen({ open: true, props: {} })}>Add</Button>
//       <Drawer
//         title="Add"
//         onClose={() => setAddOpen({ open: false, props: {} })}
//         open={addOpen.open}
//       >
//         <Input
//           placeholder="Name"
//           onChange={(e) => {
//             setAddOpen({
//               ...addOpen,
//               props: { ...addOpen.props, name: e.target.value }
//             });
//           }}
//         />
//         <Input
//           placeholder="Address"
//           onChange={(e) => {
//             setAddOpen({
//               ...addOpen,
//               props: { ...addOpen.props, address: e.target.value }
//             });
//           }}
//         />
//         <InputNumber
//           placeholder="Age"
//           onChange={(value) => {
//             setAddOpen({
//               ...addOpen,
//               props: { ...addOpen.props, age: value }
//             });
//           }}
//         />
//         <Button
//           onClick={() => {
//             setData([
//               ...data,
//               { key: String(data.length + 1), ...addOpen.props, tags: [] }
//             ]);
//             setAddOpen({ open: false, props: {} });
//           }}
//         >
//           Save
//         </Button>
//       </Drawer>
//       <Drawer
//         title="Edit"
//         onClose={() => setEditOpen({ open: false, props: {} })}
//         open={editOpen.open}
//       >
//         <Input
//           value={editOpen.props.name}
//           onChange={(e) => {
//             setEditOpen({
//               ...editOpen,
//               props: { ...editOpen.props, name: e.target.value }
//             });
//           }}
//         />
//         <Button
//           onClick={() => {
//             setData(
//               data.map((record) =>
//                 record.key === editOpen.props.key ? editOpen.props : record
//               )
//             );
//             setEditOpen({ open: false, props: {} });
//           }}
//         >
//           Save
//         </Button>
//       </Drawer>
//     </div>
//   );
// }

// export default useStateProj;

import React, { useReducer } from "react";
import {
  Table,
  Space,
  Tag,
  Drawer,
  Input,
  Button,
  InputNumber,
  Select
} from "antd";

const { Option } = Select;

const dummy_data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

const initialState = {
  data: dummy_data,
  editOpen: { open: false, props: {} },
  addOpen: { open: false, props: {} },
  selectedRowKeys: [],
  searchValue: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_EDIT_OPEN":
      return { ...state, editOpen: action.payload };
    case "SET_ADD_OPEN":
      return { ...state, addOpen: action.payload };
    case "SET_SELECTED_ROW_KEYS":
      return { ...state, selectedRowKeys: action.payload };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
}

function UseReducerProj() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, editOpen, addOpen, selectedRowKeys, searchValue } = state;

  const handleSearch = (value) => {
    dispatch({ type: "SET_SEARCH_VALUE", payload: value });
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onDelete = (key) => {
    dispatch({
      type: "SET_DATA",
      payload: data.filter((item) => item.key !== key)
    });
  };

  const onDeleteSelected = () => {
    dispatch({
      type: "SET_DATA",
      payload: data.filter((item) => !selectedRowKeys.includes(item.key))
    });
    dispatch({ type: "SET_SELECTED_ROW_KEYS", payload: [] });
  };

  const onTableChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      dispatch({ type: "SET_SELECTED_ROW_KEYS", payload: selectedRowKeys });
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "John Brown",
          value: "John Brown"
        },
        {
          text: "Jim Green",
          value: "Jim Green"
        },
        {
          text: "Joe Black",
          value: "Joe Black"
        }
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: {
        target: "full-header"
      }
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "London",
          value: "London"
        },
        {
          text: "New York",
          value: "New York"
        }
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (_, { key, ...record }) => (
        <Space size="middle">
          <a
            onClick={() => {
              dispatch({
                type: "SET_EDIT_OPEN",
                payload: { open: true, props: { key, ...record } }
              });
            }}
          >
            Edit
          </a>
          <a onClick={() => onDelete(key)}>Delete</a>
        </Space>
      )
    }
  ];

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200, marginBottom: 20 }}
        placeholder="Search by Name"
        onChange={handleSearch}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {dummy_data.map((item) => (
          <Option key={item.key} value={item.name}>
            {item.name}
          </Option>
        ))}
      </Select>
      <Button
        onClick={onDeleteSelected}
        disabled={!selectedRowKeys.length}
        style={{ marginBottom: 20 }}
      >
        Delete Selected
      </Button>
      <Table
        columns={columns}
        dataSource={filteredData}
        onChange={onTableChange}
        rowSelection={rowSelection}
        showSorterTooltip={{
          target: "sorter-icon"
        }}
      />
      <Button
        onClick={() =>
          dispatch({ type: "SET_ADD_OPEN", payload: { open: true, props: {} } })
        }
      >
        Add
      </Button>
      <Drawer
        title="Add"
        onClose={() =>
          dispatch({
            type: "SET_ADD_OPEN",
            payload: { open: false, props: {} }
          })
        }
        visible={addOpen.open}
      >
        <Input
          placeholder="Name"
          onChange={(e) => {
            dispatch({
              type: "SET_ADD_OPEN",
              payload: {
                ...addOpen,
                props: { ...addOpen.props, name: e.target.value }
              }
            });
          }}
        />
        <Input
          placeholder="Address"
          onChange={(e) => {
            dispatch({
              type: "SET_ADD_OPEN",
              payload: {
                ...addOpen,
                props: { ...addOpen.props, address: e.target.value }
              }
            });
          }}
        />
        <InputNumber
          placeholder="Age"
          onChange={(value) => {
            dispatch({
              type: "SET_ADD_OPEN",
              payload: {
                ...addOpen,
                props: { ...addOpen.props, age: value }
              }
            });
          }}
        />
        <Button
          onClick={() => {
            dispatch({
              type: "SET_DATA",
              payload: [
                ...data,
                { key: String(data.length + 1), ...addOpen.props, tags: [] }
              ]
            });
            dispatch({
              type: "SET_ADD_OPEN",
              payload: { open: false, props: {} }
            });
          }}
        >
          Save
        </Button>
      </Drawer>
      <Drawer
        title="Edit"
        onClose={() =>
          dispatch({
            type: "SET_EDIT_OPEN",
            payload: { open: false, props: {} }
          })
        }
        visible={editOpen.open}
      >
        <Input
          value={editOpen.props.name}
          onChange={(e) => {
            dispatch({
              type: "SET_EDIT_OPEN",
              payload: {
                ...editOpen,
                props: { ...editOpen.props, name: e.target.value }
              }
            });
          }}
        />
        <Button
          onClick={() => {
            dispatch({
              type: "SET_DATA",
              payload: data.map((record) =>
                record.key === editOpen.props.key ? editOpen.props : record
              )
            });
            dispatch({
              type: "SET_EDIT_OPEN",
              payload: { open: false, props: {} }
            });
          }}
        >
          Save
        </Button>
      </Drawer>
    </div>
  );
}

export default UseReducerProj;
