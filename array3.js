fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data
      .map((elem) => {
        // fn, ln => name
        const newElem = {
          no: elem.id,
          name: elem.first_name + "/" + elem.last_name,
          email: elem.email,
          salary: elem.salary,
        };
        return newElem; // 이걸 해줘야 map배열에 담긴다
      })
      .forEach((elem) => console.log(elem.no + ": " + elem.name)); //
  })
  .catch(console.log);
