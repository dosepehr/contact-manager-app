import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AddContact, Contacts } from '../components';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Contacts />,
            },
            {
                path: 'create-contact',
                element: <AddContact />,
            },
        ],
    },
]);

export default router;
