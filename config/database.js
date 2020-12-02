module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"), // 如果项目与数据库同处在一个服务器上，那么写localhost，否则就写数据库所在的地址
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "blog"),
        username: env("DATABASE_USERNAME", "root"), // 可以访问该账号的用户名
        password: env("DATABASE_PASSWORD", "raOvrPn+M4hu123"), // 用户名所对应的密码
      },
      options: {},
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
