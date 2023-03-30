async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const users = await fetchData('https://jsonplaceholder.typicode.com/users');
  const table = document.createElement('table');
  users.forEach((user: any) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    nameCell.innerText = user.name;
    emailCell.innerText = user.email;
  });
  document.body.appendChild(table);
  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  const users = await fetchData('https://jsonplaceholder.typicode.com/users');
  
  const table = document.createElement('table');
  
  users.forEach((user: any) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    nameCell.innerText = user.name;
    emailCell.innerText = user.email;
  });
  
  document.body.appendChild(table);
    