import Image from "next/image";
import { useRouter } from "next/navigation";

const Newspaper = () => {

    const router = useRouter();

    return (
        <div className='flex items-start gap-4'>
            <div className='w-fit flex flex-col gap-2'>
                <img src='/1955-3.4.jpg' className='w-full h-fit max-w-[300px] rounded-md' />
                <button className='w-full bg-orange-600 text-sm p-2 rounded-md text-white hover:bg-gray-700' onClick={ () => router.push('/document/3434') }>
                    Читать
                </button>
            </div>
            <div className='w-full flex flex-col'>
                <div>
                    <h3 className='font-medium text-xl'>Коммунизм туы</h3>
                    <p className='text-base text-gray-600'>1955</p>
                </div>
            </div>
        </div>
    );

};

export default Newspaper;