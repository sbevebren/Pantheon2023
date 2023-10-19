import { useState } from 'react';

export default function FaqCard(props) {
    const [isOpen, setIsOpen] = useState(false);
    const onClickHandler = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800 opacity-80">
            <button onClick={onClickHandler} class="flex items-center justify-between w-full">
                <h1 class="font-semibold text-gray-700 dark:text-white">{props.question}?</h1>
                {isOpen ?
                    <span class="text-gray-400 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>
                    :
                    <span class="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                }



            </button>
            {isOpen &&
                <p class="mt-6 text-sm text-gray-500 dark:text-gray-300">
                    {props.answer}
                </p>
            }

        </div>


    );
}





