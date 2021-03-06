
import './App.css';
import  AuthContextProvider  from "./context/AuthContext";
import AppRouter from './router/Router';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
