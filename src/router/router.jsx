import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { AddContact, ContactDetails, Contacts } from '../components';

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
                path: 'contact/add',
                element: <AddContact />,
            },
            {
                path: 'contact/:id',
                element: <ContactDetails />,
            },
        ],
    },
]);

export default router;
