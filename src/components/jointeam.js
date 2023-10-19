"use client"
import { useState } from 'react';
import Image from 'next/image';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Loader from './Loader';
import { useStateContext } from '@/context';

export default function JoinTeam({ id }) {
    const { user, userinfo, setUser, setUserInfo } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        teamId: '',
    });



    const { teamId } = form;

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await fetch('api/teams/add', {
            method: 'POST',
            body: JSON.stringify({
                join_code: form.teamId,
                pantheonid: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await res.json();
        setIsLoading(false);
        if(!res.ok){
            alert(response.message)
            return;
        }

        setUserInfo({
            ...userinfo,
            teamID: response['team']
        });
        setForm({
            teamId: '',
        });
        
    };


    return (
        <div className="bg-primary bg-black rounded-md pt-10 pb-20 ">
            <div className='text-5xl flex justify-center items-center text-white mb-10'>Join Team</div>
            <div className='mx-auto bg-primary bg-[#01040f]  rounded-lg px-10  '>
                <div className=" flex justify-center items-center flex-col   ">
                    {isLoading && <Loader />}

                    <form onSubmit={onSubmitHandler} className="w-full  mt-[10px] flex flex-col gap-[15px]">


                        <FormField
                            labelName="Team Id*"
                            placeholder="Enter Team Id to Join"
                            inputType="text"
                            value={form.teamId}
                            handleChange={(e) => handleFormFieldChange('teamId', e)}
                        />

                        <div className="flex justify-center items-center mt-[30px]">
                            <CustomButton
                                btnType="submit"
                                title="Join Team"
                                handleClick={onSubmitHandler}
                                styles=""
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* <ToastContainer /> */}
        </div>

    );
}