import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

function index() {
  return (
    <>
      <Header/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default index
