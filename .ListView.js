import axios from 'axios';

function ListView() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://reqres.in/api/users?page=2');
            setEmployees(response.data.data);
        }
        fetchData();
    }, []);
    //...
}


function ListView() {
    //...
    return ( <
        ul > {
            employees.map((employee) => ( <
                li key = { employee.id } >
                <
                p > ID: { employee.id } < /p> <
                p > First Name: { employee.first_name } < /p> <
                p > Last Name: { employee.last_name } < /p> <
                p > Email: { employee.email } < /p> <
                /li>
            ))
        } <
        /ul>
    );
}



function SearchBox(props) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch() {
        props.onSearch(searchTerm);
    }

    return ( <
        div >
        <
        input type = "text"
        value = { searchTerm }
        onChange = {
            (e) => setSearchTerm(e.target.value) }
        /> <
        button onClick = { handleSearch } > Search < /button> <
        /div>
    );
}