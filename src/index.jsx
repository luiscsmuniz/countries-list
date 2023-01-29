import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GraphqlProvider } from './components/core/GraphqlProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GraphqlProvider>
			<App />
		</GraphqlProvider>
	</React.StrictMode>
)