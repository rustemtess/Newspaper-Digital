'use client';

import Header from "@/components/header";
import { useRouter } from "next/navigation";
import { INewspaperPage } from "../interface";
import { Components } from "../components";
import { useState } from "react";

export default function NewspaperPage ( { params }: INewspaperPage ) {

    const router = useRouter();
    const [componentId, setComponentId] = useState<number|null>(1);
    const [renderedComponents, setRenderedComponents] = useState<JSX.Element[]>([]);

    const unrenderComponent = () => {

    };

    const renderComponent = (componentName: string | undefined, key: number) => {
        if (componentName) {
            const Component = require(`../components/${componentName}`).default;
            return <>
                <Component key={ key } />
                <button >Удалить</button>
            </>;
        }
    };

    const addComponent = (componentName: string|undefined) => {
        const component = renderComponent(componentName, renderedComponents.length + 1);
        if (component) {
            setRenderedComponents(prevComponents => [...prevComponents, component]);
        }
    };

    const showBlockList = () => {
        return (
            <div className='flex flex-col gap-2 w-full max-w-[300px]'>
                <select onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => setComponentId(parseInt(e.target.value)) } className='outline-none w-full bg-gray-50 border border-gray-300 rounded outline-none px-3 py-1.5 text-base text-gray-800'>
                    { Components.map( component => {
                        return <option key={ component.id } value={ component.id }>{ component.name }</option>
                    }) }
                </select>
                <button onClick={ () => {
                    const currentComponentFinded = Components.find( component => component.id === componentId );
                    if(currentComponentFinded) addComponent(currentComponentFinded.children)
                } } className='w-full bg-orange-600 p-2 rounded-md text-white hover:bg-gray-700 text-lg'>
                    + Добавить компонент
                </button>
            </div>
        )
    }

    return (
        <main className='flex flex-col min-h-svh'>
            <Header activeId={ 3 }>
                <a onClick={ () => router.push('/admin') } className='cursor-pointer hover:text-white'>Мои газеты</a>
            </Header>
            <div className='flex flex-col items-center w-full h-fit p-4'>
                { showBlockList() }
                {renderedComponents.map((component, index) => (
                         component
                ))}
            </div>
        </main>
    );

};