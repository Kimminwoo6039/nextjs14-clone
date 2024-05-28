"use client"
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import DateEditor from "react-tabulator/lib/editors/DateEditor";
import MultiValueFormatter from "react-tabulator/lib/formatters/MultiValueFormatter";

export function DataTable1() {


// Editable Example:
    const colorOptions = {
        "": "",
        red: "red",
        green: "green",
        yellow: "yellow"
    };
    const petOptions = [
        { id: "cat", name: "cat" },
        { id: "dog", name: "dog" },
        { id: "fish", name: "fish" }
    ];
    const editableColumns = [
        {
            title: "Name",
            field: "name",
            width: 150,
            editor: "input",
            headerFilter: "input"
        },
        {
            title: "Age",
            field: "age",
            hozAlign: "left",
            formatter: "progress",
            editor: "progress"
        },
        {
            title: "Favourite Color",
            field: "color",
            editor: "select",
            headerFilterParams: { values: colorOptions }
        },
        {
            title: "Date Of Birth",
            field: "dob",
            sorter: "date",
            editor: DateEditor,
            editorParams: { format: "MM/DD/YYYY" }
        },
        {
            title: "Pets",
            field: "pets",
            sorter: (a, b) => a.toString().localeCompare(b.toString()),
            // editor: MultiSelectEditor,
            editorParams: { values: petOptions },
            formatter: MultiValueFormatter,
            formatterParams: { style: "PILL" }
        },
        {
            title: "Passed?",
            field: "passed",
            hozAlign: "center",
            formatter: "tickCross",
            editor: true
        }
    ];

    const columns1 = [
        { title: "Name", field: "name", width: 150 },
        { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
        { title: "Favourite Color", field: "col" },
        { title: "Date Of Birth", field: "dob", hozAlign: "center" },

    ];

    const options = {
        height: 900,
        movableRows: true,
        movableColumns: true
    };

    var data = [
        {
            id: 1,
            name: "Oli Bob",
            age: "12",
            color: "red",
            dob: "01/01/1980",
            rating: 5,
            passed: true,
            pets: ["cat", "dog"]
        },
        {
            id: 2,
            name: "Mary May",
            age: "1",
            color: "green",
            dob: "12/05/1989",
            rating: 4,
            passed: true,
            pets: ["cat"]
        },
        {
            id: 5,
            name: "Margret Marmajuke",
            age: "16",
            color: "yellow",
            dob: "07/01/1999",
            rating: 4,
            passed: false
        },
        {
            id: 6,
            name: "Van Ng",
            age: "37",
            color: "green",
            dob: "06/10/1982",
            rating: 4,
            passed: true,
            pets: ["dog", "fish"]
        },
        {
            id: 1,
            name: "Oli Bob",
            age: "12",
            color: "red",
            dob: "01/01/1980",
            rating: 5,
            passed: true,
            pets: ["cat", "dog"]
        },
        {
            id: 2,
            name: "Mary May",
            age: "1",
            color: "green",
            dob: "12/05/1989",
            rating: 4,
            passed: true,
            pets: ["cat"]
        },
        {
            id: 5,
            name: "Margret Marmajuke",
            age: "16",
            color: "yellow",
            dob: "07/01/1999",
            rating: 4,
            passed: false
        },
        {
            id: 6,
            name: "Van Ng",
            age: "37",
            color: "green",
            dob: "06/10/1982",
            rating: 4,
            passed: true,
            pets: ["dog", "fish"]
        },
        {
            id: 1,
            name: "Oli Bob",
            age: "12",
            color: "red",
            dob: "01/01/1980",
            rating: 5,
            passed: true,
            pets: ["cat", "dog"]
        },
        {
            id: 2,
            name: "Mary May",
            age: "1",
            color: "green",
            dob: "12/05/1989",
            rating: 4,
            passed: true,
            pets: ["cat"]
        },
        {
            id: 5,
            name: "Margret Marmajuke",
            age: "16",
            color: "yellow",
            dob: "07/01/1999",
            rating: 4,
            passed: false
        },
        {
            id: 6,
            name: "Van Ng",
            age: "37",
            color: "green",
            dob: "06/10/1982",
            rating: 4,
            passed: true,
            pets: ["dog", "fish"]
        },
        {
            id: 1,
            name: "Oli Bob",
            age: "12",
            color: "red",
            dob: "01/01/1980",
            rating: 5,
            passed: true,
            pets: ["cat", "dog"]
        },
        {
            id: 2,
            name: "Mary May",
            age: "1",
            color: "green",
            dob: "12/05/1989",
            rating: 4,
            passed: true,
            pets: ["cat"]
        },
        {
            id: 5,
            name: "Margret Marmajuke",
            age: "16",
            color: "yellow",
            dob: "07/01/1999",
            rating: 4,
            passed: false
        },
        {
            id: 6,
            name: "Van Ng",
            age: "37",
            color: "green",
            dob: "06/10/1982",
            rating: 4,
            passed: true,
            pets: ["dog", "fish"]
        },
        {
            id: 7,
            name: "Duc Ng",
            age: "37",
            color: "yellow",
            dob: "10/10/1982",
            rating: 4,
            passed: true,
            pets: ["dog"]
        }
        // {id:6, name:"앤젤", age:"16", col:"노란색", dob:"2022/01/23"},

    ];

    const columns = [
        { title: "Name", field: "name", width: 150 },
        { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
        { title: "Favourite Color", field: "color" },
        { title: "Date Of Birth", field: "dob" },
        { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
        {
            title: "Passed?",
            field: "passed",
            hozAlign: "center",
            formatter: "tickCross"
        },
    ];


    // return  <ReactTabulator columns={columns} data={data} options={options} />
    return     <ReactTabulator
        columns={columns}
        data={data}
        options={options}
        data-custom-attr="test-custom-attribute"
        className="custom-css-class"
    />
}