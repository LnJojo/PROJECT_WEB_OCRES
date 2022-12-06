import React, { useState } from "react";

const SearchBar = () => {
    const dummyData = [
        { id: 1, firstName: "Tony", lastName: "Ly" },
    ]

    const [value, setValue] = useState('');
    const [dataSource, setDataSource] = useState(dummyData);
    const [tableFilter, setTableFilter] = useState([]);

    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = dataSource.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
        } else {
            setValue(e.target.value);
            setDataSource([...dataSource])
        }
    }

    return (
        <div className="container mt-5">
            <div className="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-aria-describedby="basic-addon1" value={value}
                    onChange={filterData}
                />
            </div>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    {value.length > 0 ? tableFilter.map((data) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                            </tr>
                        )
                    })
                        :
                        dataSource.map((data) => {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default SearchBar;