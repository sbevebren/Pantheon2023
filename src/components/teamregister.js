"use client"
import { useState } from 'react';
import Image from 'next/image';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Loader from './Loader';
import { useStateContext } from '@/context';

export default function TeamRegister({ id }) {
    const [isLoading, setIsLoading] = useState(false);
    const { userinfo, setUserInfo } = useStateContext();
    const [form, setForm] = useState({
        teamName: ''
    });



    const { teamName } = form;

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch('api/teams/create', {
            method: 'POST',
            body: JSON.stringify({
                pantheonid: id,
                team_name: form.teamName
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        setIsLoading(false);
        if(!response.ok) {
            alert(res.message);
            return;
        }
        const join_code = res['join_code'];
        setUserInfo({ ...userinfo, teamID: join_code });
        setForm({
            teamName: ''
        });
    };

    return (
        <div className="bg-primary bg-black pt-10 pb-20 rounded-md ">
            <div className='text-5xl flex justify-center items-center text-white mb-10'>Create Team</div>
            <div className='mx-auto bg-primary bg-[#01040f]  rounded-lg px-10  '>
                <div className=" flex justify-center items-center flex-col   ">
                    {isLoading && <Loader />}

                    <form onSubmit={onSubmitHandler} className="w-full  mt-[10px] flex flex-col gap-[15px]">


                        <FormField
                            labelName="Team Name*"
                            placeholder="Enter Name Of your New Team"
                            inputType="text"
                            value={form.teamName}
                            handleChange={(e) => handleFormFieldChange('teamName', e)}
                        />

                        <div className="flex justify-center items-center mt-[30px]">
                            <CustomButton
                                btnType="submit"
                                title="Create Team"
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