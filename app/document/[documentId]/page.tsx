'use client';

import { ReactElement, ReactNode, useEffect, useState, useRef } from "react";
import { IDocumentPage } from "./interface";
import { useRouter } from "next/navigation";

export default function DocumentPage ( { params }: IDocumentPage ) {

    const router = useRouter();
    const [newspaperImgWidth, setNewspaperImgWidth] = useState<any>(300);
    const [newspaperImgHeight, setNewspaperImgHeight] = useState<any>(400);
    const imgContainerRef = useRef<HTMLDivElement>(null);

    const startXRef = useRef<number>(0);
    const startYRef = useRef<number>(0);
    const scrollLeftRef = useRef<number>(0);
    const scrollTopRef = useRef<number>(0);

    useEffect(() => {
        const newspaperImg = document.getElementById("img");
        if(newspaperImg)
            newspaperImg.style.backgroundImage = 'url(/1955-3.4.jpg)';
    }, [])

    const handleSizeUp = () => {
        if(newspaperImgWidth <= 1500) {
            const aspectRatio = newspaperImgHeight / newspaperImgWidth;
            const newWidth = newspaperImgWidth + 100;
            const newHeight = newWidth * aspectRatio;
            setNewspaperImgWidth(newWidth);
            setNewspaperImgHeight(newHeight);
        }
    }

    const handleSizeDown = () => {
        if(newspaperImgWidth >= 400) {
            const aspectRatio = newspaperImgHeight / newspaperImgWidth;
            const newWidth = newspaperImgWidth - 100;
            const newHeight = newWidth * aspectRatio;
            setNewspaperImgWidth(newWidth);
            setNewspaperImgHeight(newHeight);
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = imgContainerRef.current;
        if (container) {
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none';
            const startX = e.clientX;
            const startY = e.clientY;
            const scrollLeft = container.scrollLeft;
            const scrollTop = container.scrollTop;

            const handleMouseMove = (moveEvent: MouseEvent) => {
                const x = moveEvent.clientX - startX;
                const y = moveEvent.clientY - startY;
                container.scrollLeft = scrollLeft - x;
                container.scrollTop = scrollTop - y;
            };

            const handleMouseUp = () => {
                container.style.cursor = 'grab';
                container.style.removeProperty('user-select');
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault();
        const container = imgContainerRef.current;
        if (container) {
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none';
            const touch = e.touches[0];
            startXRef.current = touch.clientX;
            startYRef.current = touch.clientY;
            scrollLeftRef.current = container.scrollLeft;
            scrollTopRef.current = container.scrollTop;

            const handleTouchMove = (touchMoveEvent: TouchEvent) => {
                touchMoveEvent.preventDefault();
                const touch = touchMoveEvent.touches[0];
                const x = touch.clientX - startXRef.current;
                const y = touch.clientY - startYRef.current;
                container.scrollLeft = scrollLeftRef.current - x;
                container.scrollTop = scrollTopRef.current - y;
            };

            const handleTouchEnd = () => {
                container.style.cursor = 'grab';
                container.style.removeProperty('user-select');
                window.removeEventListener('touchmove', handleTouchMove);
                window.removeEventListener('touchend', handleTouchEnd);
            };

            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleTouchEnd);
        }
    };

    return (
        <div className='max-w-[1600px] w-full gap-8 bg-[#3D3D3D] overflow-x-auto'>
            <header className='flex w-full justify-between p-4 bg-[#2D2D2D]'>
                <button onClick={ () => router.back() } className='flex gap-1 items-center text-white'>
                    <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width={24} height={24} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                        <path d="m19,11.5H6.265l4.617-4.617-.707-.707-4.717,4.717c-.61.61-.61,1.604,0,2.214l4.718,4.718.707-.707-4.617-4.617h12.734v-1Z"/>
                    </svg>
                    <span>Назад</span>
                </button>
                <div className='flex gap-6 items-center flex-wrap justify-center'>
                    <button onClick={ () => handleSizeUp() }>
                        <svg className='fill-gray-300' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="22" height="22"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/><path d="M13,9H11V7A1,1,0,0,0,9,7V9H7a1,1,0,0,0,0,2H9v2a1,1,0,0,0,2,0V11h2a1,1,0,0,0,0-2Z"/></svg>     
                    </button>
                    <button onClick={ () => handleSizeDown() }>
                        <svg className='fill-gray-300' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="22" height="22"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/><path d="M13,9H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>
                    </button>
                </div>
                <h3 className='text-gray-300'>Коммунизм туы</h3>
            </header>
            <div 
                className='cursor-grab overflow-auto w-full h-fit max-h-[1000px] py-6 mb-6' 
                ref={imgContainerRef} 
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                    >
                <div id="img" style={{
                    width: `${newspaperImgWidth}px`,
                    height: `${newspaperImgHeight}px`,
                }} className="bg-cover rounded-md m-auto"></div>
            </div>
            <div className='text-gray-200 w-full p-2 indent-8'>
                <h3 className='text-xl text-center text-white font-medium indent-0'>Коммунизм туы</h3>
                <h1 className='text-3xl text-center text-white mb-6 font-medium indent-0'>Бүкіл дүние жүзінде Бейбітшілік Ассамблеясында</h1>
                <p>ХЕЛЬСИНКИ, 28 июнь. (ТАСС-тың ар-наулы тілшісі. Бүгін Бүкіл дүнисжүзілік Бейбітшілік Ассамблеясында ағылшын ға-лымы Д. Н. Пригт председательдік етті.</p>
                <p>Албанияның өкілі Медар Штюла Албанияның бейбіт құрылыс ісіндегі табыстары туралы айтты. Испан суретшісі Руис Пейнад АҚШ пен Испания арасында қол қойылған соғыс шартын сынады және бейбіт қатар өмір сүрудің бес принципін қолдады. Спор (Голландия) халықтар арасындағы қатынастарда болып жатқан шиеленісті бәсеңдетуге Ассамблея көмектесетін болсын деген тілегін айтты. Алжирдің өкілі Буменджель-Али өзінің сөзін туған отанындағы жағдайға арнады. Пьер Кот (Франция) Еуропада коллективтік қауіпсіздік жүйесін құру мәселесіне тоқталды. Бұдан кейін сөз ССРО Жоғарғы Советі Ұлттар Советінің Председателі Лациске берілді. Ол өзінің сөзінде Совет Одағы халықтарының туысқандық достығы мен бірлігі туралы мәселені баяндады, сонымен қатар халықтардың ұлттық тәуелсіздігі туралы айтты.</p>
                <p>ХЕЛЬСИНКИ, 29 июль. (ТАСС), Бұдан бұрын хабар етілгеніндей, кеше күндізгі мәжілісте Франция Ұлттық жиналысының депутаты Пьер Кот сөз сөйледі.</p>
                <p>Бұдан кейін сөз сөйлеген ССРО Жоғарғы Советі Ұлттар Советінің Председателі В. Лацис Бүкіл дүниежүзілік Бейбітшілік Советіне сүйіспеншілікпен шақырылғаны үшін шын жүректен алғыс айтамын деді.</p>
                <p>Мен, деді Лацис бұдан кейін, дүние жүзінің көптеген елдері мен халықтары өкілдерінің сөздерін, саяси ағымдары, дүниеге көзқарастары, философиялық және діни сенімдері ең алуан түрлі өкілдердің сөздерін зор ықыласпен, сүйсініп тыңдадым. Бірақ қандай адам шығып сөйлесе де, олардың сөздерінде адамзаттың бүгінгісі мен болашағына жасалып отырған қамқорлық, бүкіл дүние жүзінде бейбітшілікті сақтауға және соғыстың басталуына жол бермеуге ұмтылған бірауызды талап естілді, атом және сутегі қаруын қолдануды әзірлеу әрекеттерін қатты ызамен айыптаған үндер естілді.</p>
                <p>Халықтар арасындағы бейбітшілік пен достық туралы бұған дейін шығып сөйлеген шешендер тамаша және күшті айтып өтті. Міне, бұл менің осында бейбітшіліктің міндетті, елеусіз қарауға болмайтын, мызғымайтын және бұзылмайтын шарттарының біріне ғана - біздің планетамыздағы барлық халықтардың, үлкенді-кішілі, ежелден келе жатқан және әлі есеймеген халықтардың, алдыңғы қатарлы халықтардың және мәдениеті мен экономикасының ғасырлар бойы артта қалуын әлі жоя алмай отырған халықтардың ұлттық тәуелсіздігі проблемасына қысқаша тоқтап өтуіме право береді.</p>
                <p>Бейбітшілік жайындағы ұлы күрескер, халықтар достығының даңқты идеологы Ленин бастаған Совет үкіметі 1917 жылдың өзінде-ақ дәл осы тәуелсіздікті өзінің сыртқы және ішкі саясатының аса маңызды принципі деп жариялаған болатын.</p>
                <p>Барлық басқа советтік республикалармен бірге советтік Прибалтиканың республикалары да — 1940 жылы Совет Одағына өз еркімен келіп қосылған Латвия, Литва, Эстония республикалары да осы тәуелсіздікпен пайдаланып отыр.</p>
                <p>ССРО Жоғарғы Советі, деді Лацис бұдан кейін, бейбітшілікті сақтау және баянды ету үшін парламенттерге ұлы жауапкершілік жүктеліп отыр деп таныды. Соғыс және бейбітшілік мәселелері жөніндегі заңдарды нақ осы парламенттер қабылдайды. Бізде қазірдің өзінде болып отырған парламент делегацияларын алмасу</p>
            </div>
        </div>
    );

};