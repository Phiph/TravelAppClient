import {  PlusIcon } from '@heroicons/react/outline';
import LinkButton from '../../../app/common/form/LinkButton';



export default function TenantHeader() {



    return (
        <div className="max-w-full mx-auto flex items-center justify-between ">
            <h1 className="text-2xl font-bold text-gray-700">Tenants</h1>
            <LinkButton
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-blue-300 hover:bg-blue-400 "
                to="/createTenant"
            >
                <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />

                New Tenant

            </LinkButton>




        </div>
    )
}