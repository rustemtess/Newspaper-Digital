import { ReactNode } from "react"
import { Items } from "./items"
import { IHeader, IItem } from "./interface"
import { useRouter } from "next/navigation"

export default function Header ( { activeId, children }: IHeader ) {

    const router = useRouter();

    const headerButton = (item: IItem) => (
        <a
            onClick={ () => router.push( item.href ) } 
            key={ item.id } 
            className='cursor-pointer hover:text-white'
        >{ item.title }</a>
    );

    const showItems = () => {
        return Items.map(item => {
            if (item.id === activeId) 
                return item.allowItems.map(idItem => {
                    const allowedItem = Items.find(i => i.id === idItem);
                    if (allowedItem) return headerButton(allowedItem);
                });
        });
    };

    return (
        <header className='bg-[#2D2D2D] w-full flex justify-between items-center p-4'>
            <h2 className='text-white'>Газета</h2>
            <nav className='flex items-center gap-5 text-gray-300'>
                { showItems() }
                { children }
            </nav>
        </header>
    )

};