const complexData = {
  user: {
    id: 101,
    name: "Sanath",
    isActive: true,
    contact: {
      email: "sanath@example.com",
      phones: [1234567890, 9876543210],
      emergency: null,
    },
    // preferences: {
    //   notifications: {
    //     email: true,
    //     sms: false,
    //     channels: ["news", "updates", ["marketing", ["offers", "sales"]]] // 4-level nested array
    //   },
    //   theme: "dark"
    // },
    // sessions: [
    //   {
    //     id: "s1",
    //     devices: [
    //       {
    //         type: "mobile",
    //         os: "android",
    //         logs: [
    //           ["login", "click"],
    //           ["scroll", ["logout", ["crash"]]] // array → array → array → value
    //         ]
    //       },
    //       {
    //         type: "laptop",
    //         os: "macOS"
    //       }
    //     ]
    //   },
    //   {
    //     id: "s2",
    //     devices: []
    //   }
    // ],
    // misc: {
    //   notes: [
    //     {
    //       title: "meeting",
    //       tags: ["work", "urgent"]
    //     },
    //     {
    //       title: "groceries",
    //       tags: []
    //     }
    //   ],
    //   metadata: {
    //     createdAt: "2025-07-05T10:00:00Z",
    //     verified: false
    //   }
    // }
  }
};



const res = {};

function flattenObj(obj, objkey='') {
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
        const finalkey = `${objkey}.${index}`;
        flattenObj(item, finalkey);
    })
  } else if(typeof obj === 'object' && obj !== null) {
     for(const key in obj) {
        flattenObj(obj[key], objkey ? `${objkey}.${key}`: key)
     }
  } else {
    res[objkey] = obj;
  }
}
flattenObj(complexData);
console.log("res", res);
