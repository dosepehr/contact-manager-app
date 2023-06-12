import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
    AddContact,
    ContactDetails,
    Contacts,
    EditContact,
} from '../components';

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
            {
                path: 'contact/edit/:id',
                element: <EditContact />,
            },
        ],
    },
]);

export default router;
