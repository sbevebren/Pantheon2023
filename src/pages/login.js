import { useState } from 'react';
import { useRouter } from 'next/router';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useStateContext } from '@/context';
import Loader from '@/components/Loader';
import StarsCanvas from '@/components/Stars';

export default function LoginIn() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { user, userinfo, setUser, setUserInfo } = useStateContext();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [pass, setPass] = useState("password")



    const { email, password } = form;

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
        const response = await fetch('api/users/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: form.email,
                password: form.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json();
        setIsLoading(false);
        if (!response.ok) {
            alert(res.message)
            return;
        }

        console.log(res);

        setUser(true);
        setUserInfo({
            name: res['name'],
            pantheonid: res['ID'],
            email: form.email,
            teamID: res['code']
        });
        setForm({
            email: '',
            password: ''
        });
        router.push('/profile');
    };

    const handleClik = () => {
        router.push('/signup');
    }

    return (
        <div className="bg-primary h-screen bg-black pt-20 pb-20 relative z-0">
            <div className='mx-auto bg-primary bg-pink-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.09] rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]  '>
                <div className=" flex justify-center items-center flex-col  sm:p-10 p-6 ">
                    {isLoading && <Loader />}

                    <form onSubmit={onSubmitHandler} className="w-full md:lg-[80%] lg:w-[75%] mt-[10px] flex flex-col gap-[15px]">
                    <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">LOGIN</h1>

                        <FormField
                            labelName="Email*"
                            placeholder="Enter your email id"
                            inputType="email"
                            value={form.email}
                            handleChange={(e) => handleFormFieldChange('email', e)}
                        />

                        <div className=' '>
                            <FormField
                                labelName="Password*"
                                placeholder="Enter new password"
                                inputType={pass}
                                value={form.password}
                                handleChange={(e) => handleFormFieldChange('password', e)}
                            />
                            {pass !== "password" ? <div className='absolute -mt-8 right-[16%] sm:right-[18%] lg:right-[20%] text-white scale-[1.4]' onClick={handlePass}><AiFillEye /></div> : <div className='absolute -mt-8 right-[16%] sm:right-[18%] lg:right-[20%] text-white scale-[1.4]' onClick={handlePass}><AiFillEyeInvisible /></div>}
                        </div>

                        <div className='font-poppins font-normal text-white/50 text-[15px] md:text-[16px] leading-[25px] flex md:text-start text-center md:leading-[30.8px]' > Don&#39;t have an account? <span onClick={handleClik} className='underline cursor-pointer text-blue-800 ml-2' > Signup? </span>  </div>
                        <div className="flex justify-center items-center mt-[30px]">
                            <CustomButton
                                btnType="submit"
                                title="Sign In"
                                handleClick={onSubmitHandler}
                                styles=""
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* <ToastContainer /> */}
            <StarsCanvas />
        </div>

    );
}