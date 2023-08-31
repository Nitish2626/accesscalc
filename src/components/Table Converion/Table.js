import "./Table.css";

const Table=()=>{
    return(
        <div id="tab-con">
            <table id="table">
                <tr>
                    <th>Dividend</th>
                    <th>Divisor</th>
                    <th>Remainder</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>10</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>5</td>
                    <td>1</td>
                </tr>
            </table>
        </div>
    );
}
export default Table;