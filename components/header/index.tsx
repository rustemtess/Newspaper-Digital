import { ReactNode } from "react"
import { Items } from "./items"
import { IHeader, IItem } from "./interface"
import { useRouter } from "next/navigation"

export default function Header ( { activeId }: IHeader ) {

    const router = useRouter();

    const headerButton = (item: IItem) => (
        <a
            onClick={ () => router.push( item.href ) } 
            key={ item.id } 
            className={ 
                `${ ( activeId === item.id ) ? 'cursor-default text-white' : 'cursor-pointer hover:text-white' }` 
            }
        >{ item.title }</a>
    );

    const showItems = (): ReactNode => {  
        return Items.map( item => {
            if(activeId === 1 && item.id !== 3)
                return headerButton(item);
            else if(activeId === 2 && item.id !== 2)
                return headerButton(item);
            else if(activeId === 3 && item.id !== 3)
                return headerButton(item);
        } )
    };

    return (
        <header className='bg-[#2D2D2D] w-full flex justify-between items-center p-4'>
            <h2 className='text-white'>Газета</h2>
            <nav className='flex items-center gap-5 text-gray-300'>
                { showItems() }
            </nav>
        </header>
    )

};