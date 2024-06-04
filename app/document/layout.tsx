import { ReactNode } from "react";

export default function DocumentLayout ({
    children
}: {
    children: ReactNode
}) {
    
    return (
        <main className='flex w-full min-h-svh justify-center bg-[#2D2D2D] overflow-x-auto'>
            { children }
        </main>
    );

}