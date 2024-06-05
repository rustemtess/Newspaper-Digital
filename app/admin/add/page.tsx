'use client';

import Header from "@/components/header";
import { useRouter } from "next/navigation";

export default function AddPage () {

    const router = useRouter();

    return (
        <main className='flex flex-col min-h-svh'>
            <Header activeId={ 3 }>
                <a onClick={ () => router.push('/admin') } className='cursor-pointer hover:text-white'>Мои газеты</a>
            </Header>
            <div className='w-full h-fit p-4 flex justify-center'>
                <div className='w-full max-w-[800px] border-[0.5px] rounded p-2 flex flex-col gap-4'>
                    <p className='text-gray-700 text-base'>Общая информация</p>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-gray-600 text-sm'>Заголовок</p>
                        <input type='text' className='w-full bg-gray-50 border border-gray-300 rounded outline-none px-3 py-1.5 text-base text-gray-800' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-gray-600 text-sm'>Дата</p>
                        <input type='number' className='w-full bg-gray-50 border border-gray-300 rounded outline-none px-3 py-1.5 text-base text-gray-800' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-gray-600 text-sm'>Описание</p>
                        <textarea className='w-full bg-gray-50 border border-gray-300 rounded outline-none px-3 py-1.5 text-base text-gray-800'></textarea>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-gray-600 text-sm'>Загрузить изображение</p>
                        <input type='file' className='w-full bg-gray-50 border border-gray-300 rounded outline-none px-3 py-1.5 text-base text-gray-800' />
                    </div>
                    <button className='w-full bg-orange-600 p-2 rounded-md text-white hover:bg-gray-700 text-lg'>
                        Создать страницу газеты
                    </button>
                </div>
            </div>
        </main>
    );

};