import { useState } from 'react';
import { useRouter } from 'next/router';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useStateContext } from '@/context';
import Loader from '@/components/Loader';
import OtpModel from '@/components/otpModel';
import JoinModel from '@/components/joinTeamPopup';

export default function Signup() {

    const [otpModel, setotpModel] = useState(false)

    const handleOnClose = () => {
        setotpModel(false)
    }

    const handleClick = async (e) => {
        if (e.target.id === 'otp') {
            try {
                await onSubmitHandler(e);
            } catch (err) {
                return;
            }
            setotpModel(true);
        }
    }



    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const { user, userinfo, setUser, setUserInfo } = useStateContext();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        password: ''
    });
    const [pass, setPass] = useState("password")



    const { name, email, phone, college, password } = form;

    const handlePass = (event) => {
        if (pass === "password") setPass("text")
        else setPass("password")
    }

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch('api/users/handler', {
            method: 'POST',
            body: JSON.stringify({
                email: form.email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json();
        setIsLoading(false);
        if(!response.ok) {
            alert(res.message);
            throw "error";
        }
        setotpModel(true);
    }

    const handleClik = () => {
        router.push('/login');
    }

    return (
        <div className="bg-primary bg-black pt-10 pb-20">
            
            <div className='mx-auto bg-primary bg-pink-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.09] rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]'>
                <div className=" flex justify-center items-center flex-col  sm:p-10 p-6 ">
                    {isLoading && <Loader />}

                    <form onSubmit={onSubmitHandler} className="w-full md:lg-[80%] lg:w-[75%] mt-[10px] flex flex-col gap-[15px]">
                    <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">SIGNUP</h1>


                        <FormField
                            labelName="Name*"
                            placeholder="Enter your name"
                            inputType="text"
                            value={form.name}
                            handleChange={(e) => handleFormFieldChange('name', e)}
                        />
                        <FormField
                            labelName="Email*"
                            placeholder="Enter your email id"
                            inputType="email"
                            value={form.email}
                            handleChange={(e) => handleFormFieldChange('email', e)}
                        />


                        <FormField
                            labelName="Phone*"
                            placeholder="Enter your phone number"
                            inputType="text"
                            value={form.phone}
                            handleChange={(e) => handleFormFieldChange('phone', e)}
                        />

                        <FormField
                            labelName="College*"
                            placeholder="Enter your college name"
                            inputType="text"
                            value={form.college}
                            handleChange={(e) => handleFormFieldChange('college', e)}
                        />
                        <div className='  '>
                            <FormField
                                labelName="Password*"
                                placeholder="Enter new password"
                                inputType={pass}
                                value={form.password}
                                handleChange={(e) => handleFormFieldChange('password', e)}
                            />
                            {pass !== "password" ? <div className='absolute -mt-8 right-[16%] sm:right-[18%] lg:right-[20%] text-white scale-[1.4]' onClick={handlePass}><AiFillEye /></div> : <div className='absolute -mt-8 right-[16%] sm:right-[18%] lg:right-[20%] text-white scale-[1.4]' onClick={handlePass}><AiFillEyeInvisible /></div>}
                        </div>

                        <div className='font-poppins font-normal text-white/50 text-[15px] md:text-[16px] leading-[25px] flex md:text-start text-center md:leading-[30.8px]' > Already have an account? <span onClick={handleClik} className='underline cursor-pointer text-blue-800 ml-2' > login? </span>  </div>
                        <div className='flex justify-center items-center'>
                        <div id='otp' onClick={handleClick} className='m-2 cursor-pointer font-epilogue text-[16px] leading-[26px] min-h-[52px] bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold py-3 px-6 rounded-md' > SIGNUP </div>
                        </div>

                    </form>
                </div>
            </div>
            <OtpModel onClose={handleOnClose} visible={otpModel} name={name} email={email} phone={phone} college={college} password={password} />

            {/* <ToastContainer /> */}
        </div>

    );
}