const arr = [
  { name: "John Doe", email: "john@email.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];

console.table(arr);

const obj = {
  students: {
    grade1: {
      class1: {
        student1: {
          name: "John",
          age: 8,
          address: {
            street: "123 Apple St",
            city: "New York",
            location: {
              lat: 40.7128,
              lng: -74.006,
              timezone: { name: "EST", offset: "-05:00" },
            },
          },
        },
        student2: {
          name: "Jo",
          age: 4,
          address: {
            street: "456 Banana Ave",
            city: "Los Angeles",
            location: {
              lat: 34.0522,
              lng: -118.2437,
              timezone: {
                name: "PST",
                offset: "-08:00",
              },
            },
          },
        },
      },
      class2: {
        student3: {
          name: "Alice",
          age: 7,
          address: {
            street: "789 Orange Blvd",
            city: "Chicago",
            location: {
              lat: 41.8781,
              lng: -87.6298,
              timezone: {
                name: "CST",
                offset: "-06:00",
              },
            },
          },
        },
      },
    },
    grade2: {
      class1: {
        student1: {
          name: "Bob",
          age: 9,
          address: {
            street: "321 Grape Rd",
            city: "Houston",
            location: {
              lat: 29.7604,
              lng: -95.3698,
              timezone: {
                name: "CST",
                offset: "-06:00",
              },
            },
          },
        },
      },
      class2: {},
    },
    teachers: [
      {
        name: "John Dow",
        subject: "Math",
        contact: {
          email: "john.dow@example.com",
          phone: "123-456-7890",
          address: {
            city: "Austin",
            office: {
              building: "B1",
              floor: 3,
              room: "305",
            },
          },
        },
      },
      {
        name: "Jeremy Go",
        subject: "Science",
        contact: {
          email: "jeremy.go@example.com",
          phone: "987-654-3210",
          address: {
            city: "Seattle",
            office: {
              building: "C3",
              floor: 2,
              room: "210",
            },
          },
        },
      },
    ],
  },
};

console.dir(obj, { depth: 4, colors: true });
