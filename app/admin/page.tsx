'use client';

import Header from "@/components/header";
import Newspaper from "@/components/newspaper";
import { useRouter } from "next/navigation";

export default function AdminPage () {

    const router = useRouter();

    return (
        <main className='flex flex-col min-h-svh'>
            <Header activeId={ 3 }>
                <a className='cursor-pointer hover:text-white'>Мои газеты</a>
            </Header>
            <div className='w-full h-fit p-4'>
                <div className='w-full flex gap-2 flex-wrap'>
                    { <Newspaper isEdit={ true } /> }
                    { <Newspaper isEdit={ true } /> }
                    <button onClick={ () => router.push('/admin/add') } className='w-fit h-fit bg-orange-600 p-2 rounded-md text-white hover:bg-gray-700 text-lg'>
                        + добавить
                    </button>
                </div>
            </div>
        </main>
    );

};