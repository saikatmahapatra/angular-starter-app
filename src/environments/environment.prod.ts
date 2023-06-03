export const environment = {
  name: 'prod',
  production: true,
  version: require('../../package.json').version + '-prod',
  title: "MyApp - ABC Corp",
  productName: "MyApp",
  apiBaseUrl: "http://example.com/api/",
  mockAPIUrl: "http://localhost:7878/",
  useMockServer: false,
  copyrightInfo: "Copyright &copy; 2023 ABC Corp"
};
