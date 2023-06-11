import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Contacts } from '../components';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Contacts />,
            },
        ],
    },
]);



export default router