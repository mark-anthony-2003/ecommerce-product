import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PreviewProvider } from './context/PreviewProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PreviewProvider>
    <App />
  </PreviewProvider>,
)
