// Layout.js
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

// const Layout = Page => (
//   <div style={layoutStyle}>
//     <Header />
//     <Page />
//   </div>
// );
// error: The default export is not a React Component in page: "/"

const Layout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default Layout;