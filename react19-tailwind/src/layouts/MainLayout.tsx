import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer 
        position="bottom-right" 
        pauseOnFocusLoss={false}
        autoClose={3000}
      />
    </>
  )
}
export default MainLayout