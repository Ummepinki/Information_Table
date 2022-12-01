import React, { useEffect, useState } from "react";
import avatar from "../../assets/profile.jpg";
import Avatar from "@mui/material/Avatar";
import { BsArrowDownUp } from "react-icons/bs";
import "./Table1.css";

const Table1 = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("tableTestData.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="table_style">
        <h1>Assignment:</h1>
        <p>
          <span>Part 01:</span> Create the table UI with different input types
          (Text, Link, Image + Text, Date) and apply sort functionality to the
          column.
        </p>
      </div>

      <div className="table_form">
        <table>
          <th>image </th>
          <th>
            Name <BsArrowDownUp />
          </th>
          <th>
            City <BsArrowDownUp />
          </th>
          <th>
            Email Address <BsArrowDownUp />
          </th>
          <th>
            Joining Date <BsArrowDownUp />
          </th>
          <th>
            Role <BsArrowDownUp />
          </th>
          {items.map((item) => {
            return (
              <tr>
                <td>
                  <Avatar
                    alt="Remy Sharp"
                    src={avatar}
                    style={{
                      width: 25,
                      height: 25,
                      display: "flex",
                      margin: "3px",
                    }}
                  />
                </td>

                <td>{item.person.name}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
                <td>{item.joiningDate}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </table>

        <div className="para">
          <p>
            <span>Part 02:</span> Make the table component configurable by
            passing a JSON config file and edit the following:
            <p>
              1. Change the number of columns that are showing for the table .
            </p>
            <p> 2.Apply Sort on only selective column</p>
            <br />
            <p>
              Eg. Without creating a new table component, you should be able to
              create the foloowing by passing the configuration to the table
              comp
            </p>
          </p>
        </div>

        <table>
          <th>image</th>
          <th>
            Name <BsArrowDownUp />{" "}
          </th>
          <th>Email Address</th>
          <th>Role</th>
          {items.map((item) => {
            return (
              <tr>
                <td>
                  <Avatar
                    alt="Remy Sharp"
                    src={avatar}
                    style={{
                      width: 25,
                      height: 25,
                      display: "flex",
                      margin: "3px",
                    }}
                  />
                </td>

                <td>{item.person.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </table>

        <div className="table_gap">
          <table>
            <th>Email Address</th>
            <th>
              Joining Date <BsArrowDownUp />{" "}
            </th>
            <th>
              Role <BsArrowDownUp />{" "}
            </th>
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.email}</td>
                  <td>{item.joiningDate}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
          </table>
          <br />

          <table>
            <th>image</th>
            <th>Name</th>
            <th>
              City <BsArrowDownUp />
            </th>
            <th>
              Joining Date <BsArrowDownUp />
            </th>
            <th>
              Role <BsArrowDownUp />
            </th>
            {items.map((item) => {
              return (
                <tr>
                  <td>
                    <Avatar
                      alt="Remy Sharp"
                      src={avatar}
                      style={{
                        width: 25,
                        height: 25,
                        display: "flex",
                        margin: "3px",
                      }}
                    />
                  </td>

                  <td>{item.person.name}</td>
                  <td>{item.city}</td>
                  <td>{item.joiningDate}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
          </table>

          <div className="download_assets">
            <p>Download assets:</p>
            <Avatar
              alt="Remy Sharp"
              src={avatar}
              style={{
                width: 25,
                height: 25,
                display: "flex",
                margin: "3px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;
