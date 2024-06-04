'use client';

import Header from "@/components/header";

export default function AuthPage () {

    return (
        <main className='flex flex-col h-svh sm:gap-16'>
            <Header activeId={ 2 } />
            <div className='w-full h-full flex justify-center items-center p-2'>
                <div className='flex flex-col gap-3 max-w-[400px] w-full py-4'>
                    <div className='flex flex-col py-4'>
                        <h2 className='text-2xl text-gray-800 font-medium text-center'>Авторизация</h2>
                        <p className='text-sm text-gray-600 text-center'>Войдите в свою учетную запись</p>
                    </div>
                    <input type="email" placeholder="Электронная почта" className='bg-gray-50 border border-gray-300 rounded outline-none px-3 py-1.5 text-lg text-gray-800'/>
                    <input type="password" placeholder="Введите пароль" className='bg-gray-50 border border-gray-300 rounded outline-none px-3 py-1.5 text-lg text-gray-800'/>
                    <button className='w-full bg-orange-600 p-2 rounded-md text-white hover:bg-gray-700 text-lg'>
                        Войти
                    </button>
                </div>
            </div>
        </main>
    )

}