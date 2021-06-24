import { Client } from "cassandra-driver";

async function run() {
    const client = new Client({
      cloud: {
        secureConnectBundle: "./secure-connect-astranodejscluster.zip",
      },
      credentials: {
        username: "pDoNiRuRwZqRTNddthJBuMHR",
        password: ",onrexo4I4OlkYeWLxBYMr6QnIdW+vAZG+ZBfDROu-Y+rk3pKnqHvh-NZZh26MAWbRPj6_6SP9b4h1yOR1T0IKT4oJBy4yUYDNiXcQ+l_tbnEZs_EqM1Pav7NbZHSBj+",
      },
    });
  
    await client.connect();
  
    // Execute a query
    const rs = await client.execute("SELECT * FROM system.local");
    console.log(`Your cluster returned ${rs.rowLength} row(s)`);
  
    await client.shutdown();
  }
  
  // Run the async function
  run();

