import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <ToastContainer 
        position="bottom-right" 
        pauseOnFocusLoss={false}
        autoClose={3000}
      />
    </>
  )
}
export default MainLayout