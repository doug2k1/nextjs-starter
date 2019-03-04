import Header from "./header";

const Layout = (props: any) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
