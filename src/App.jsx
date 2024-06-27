import { Provider } from 'react-redux';
import './App.css';
import Rutas from './Rutas/Rutas';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import store from './Redux/store';
import { store } from './store'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Rutas />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
