import "./styles.css";
import React, { useEffect, useState } from "react";

// Define a type for the records
interface UserRecord {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const FetchData: React.FC = () => {
  // Define the state type as an array of UserRecord
  const [records, setRecords] = useState<UserRecord[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: UserRecord[]) => setRecords(data))
      .catch((err) => console.log(err));
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div>
      <ul>
        {records.map((list) => (
          <li key={list.id}>
            {list.id} {list.name} {list.username} {list.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;

export default function App() {
  return (
    <div className="App">
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
}
