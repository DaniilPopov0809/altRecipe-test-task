import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useConfig } from './blockChain/hooks/useConfig';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';

export const App = () => {
  useConfig();
  const { isConnected } = useWeb3ModalAccount();
  return (
    <>
      <Header />
      <main className='content'>{isConnected ? <Form /> : <h1>Please connect wallet!</h1>}</main>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};
