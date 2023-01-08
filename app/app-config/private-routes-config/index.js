export default [
  {
    path: "/",
    title: "test",
    permission: "test",
  },
  {
    path: "/test2",
    title: "test2 ",
    permission: "test2",
  },

  {
    path: "/test3",
    title: "Test3",
    permission: "test3",
  },
  {
    path: "test4",
    title: "Test4",
    permission: "test4",
    children: [
      {
        path: "/test4/test45",
        title: "Test45",
        permission: "test45",
      },
      {
        path: "/test4/test46",
        title: "Test46",
        permission: "test46",
      },
      {
        path: "/test4/test47",
        title: "Test47",
        permission: "test47",
      },
    ],
  },
  {
    path: "/test5",
    title: "Test5",
    permission: "test5",
  },
  {
    path: "/test6",
    title: "Test6",
    permission: "test6",
    children: [
      {
        path: "/test6/test67",
        title: "Test6",
        permission: "test67",
      },
      {
        path: "/test6/test68",
        title: "Test6",
        permission: "test68",
        children: [
          {
            path: "/test6/test68/test681",
            title: "test681",
            permission: "test681",
          },
          {
            path: "/test6/test68/test682",
            title: "test682",
            permission: "test682",
          },
          {
            path: "/test6/test68/test683",
            title: "test683",
            permission: "test683",
          },
        ],
      },
      {
        path: "/test6/test69",
        title: "Test6",
        permission: "test69",
      },
    ],
  },
];
