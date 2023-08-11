import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { useState } from 'react';

export default function Dashboard({ auth }: PageProps) {
    const [responseCode, setResponseCode] = useState<number>();
    const [passwordHash, setPasswordHash] = useState<string>();

    const makeSanctumRequest = () => {
        window.axios.get('/api/user').then(response => {
            setResponseCode(response.status);
        }).catch(error => {
            setResponseCode(error.response.status);
        });
    }

    const changePassword = () => {
        window.axios.post('/password', {
            current_password: 'password',
            password: 'password',
            password_confirmation: 'password'
        }).then(response => {
            setPasswordHash(response.data);
        }).catch(error => {
            setPasswordHash(error.response.data.message);
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>

                        <div className="p-6 text-gray-900">
                            <PrimaryButton onClick={makeSanctumRequest}>Make Sanctum Request</PrimaryButton>
                            Response Code: {responseCode}
                        </div>

                        <div className="p-6 text-gray-900">
                            <SecondaryButton onClick={changePassword}>Change Password</SecondaryButton>
                            Password hash: {passwordHash}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
