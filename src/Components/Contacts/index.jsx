import React from 'react';
import { useForm, ValidationError } from '@formspree/react';




const Contacts = ()=>{
    const [state, handleSubmit ,reset] = useForm("xgvlgqjd");

    // if (state.succeeded) {
    //     reset();
    // }

    return (
        <div className="relative">
            <section id="contacts" className="bg-gray-100 py-24 z-10 relative -mt-12 rounded-[4rem]">
                <div className="mx-auto w-[95%] md:w-4/5 flex-col lg:flex-row gap-8 flex justify-between items-center">
                    <div className="w-[100%] lg:w-[45%]  self-start">
                        <h2 className="text-6xl font-bold">اتصالات</h2>
                        <p className="text-2xl my-4 ">
                           بالإضافة إلى طرق التواصل الأساسية، يمكنك أيضًا ترك رسالة باستخدام نموذج الملاحظات أدناه.
                        </p>
                        <div className="flex items-center gap-2">
                            <a href="https://t.me/gooobet_cashmax" rel="noopener noreferrer nofollow" target="_blank" className=" flex items-center gap-4 rounded-lg bg-white shadow py-2 px-4">
                                <span className="bg-blue p-3 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                                        <path fill="currentColor" fill-rule="evenodd" d="m18.483 19.79.001-.002.017-.043 3-15.12v-.048c0-.377-.14-.706-.443-.903-.265-.173-.57-.185-.784-.169-.226.017-.439.074-.586.12a3 3 0 0 0-.24.088l-.013.005-16.72 6.56h-.004a2 2 0 0 0-.15.062 2.3 2.3 0 0 0-.341.19c-.215.148-.624.496-.555 1.049.057.457.373.747.585.898a2 2 0 0 0 .435.234l.01.003.008.003 2.925.985q-.016.276.057.555l1.465 5.559a1.5 1.5 0 0 0 2.835.196l2.287-2.446 3.93 3.012.055.024c.357.156.69.205.995.164.305-.042.547-.17.729-.315a1.74 1.74 0 0 0 .491-.634l.008-.018.002-.006zM7.135 13.875a.3.3 0 0 1 .13-.33l9.921-6.3s.584-.355.563 0c0 0 .104.062-.208.353-.297.278-7.072 6.819-7.758 7.48a.3.3 0 0 0-.077.136L8.6 19.434z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span class="flex flex-col ">
                                    <span className="text-gray-500">Telegram</span>
                                    <span class="_text_1t1p0_44 text-2 font-bold">@gooobet_cashmax</span>
                                </span>
                            </a>

                            <a href="https://mailto:mctokyo12@gmail.com" rel="noopener noreferrer nofollow" target="_blank" className=" flex items-center gap-4 rounded-lg bg-white shadow px-4 py-2">
                                <span className=" bg-green-500 p-3 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                                        <path fill="currentColor" d="M6.86 4.224c3.42-.299 6.86-.299 10.28 0l1.648.144a3.15 3.15 0 0 1 2.524 1.694.26.26 0 0 1-.1.337l-6.837 4.253a4.62 4.62 0 0 1-4.8.05L2.692 6.615a.26.26 0 0 1-.112-.322 3.15 3.15 0 0 1 2.632-1.925z"></path>
                                        <path fill="currentColor" d="M2.574 8.455a.27.27 0 0 0-.407.206 33.4 33.4 0 0 0 .201 8.287 3.16 3.16 0 0 0 2.844 2.684l1.648.144c3.42.299 6.86.299 10.28 0l1.648-.144a3.16 3.16 0 0 0 2.844-2.684c.423-2.825.481-5.692.176-8.528a.27.27 0 0 0-.412-.2l-6.16 3.83a6.25 6.25 0 0 1-6.494.067z"></path>
                                    </svg>
                                </span>
                                <span class="flex flex-col">
                                    <span className="text-gray-500">Email</span>
                                    <span class="_text_1t1p0_44 text-2 font-bold">mctokyo12@gmail.com</span>
                                </span>
                            </a>


                        </div>
                        {state.succeeded && 
                            <div   className="flex items-center  justify-between px-4 py-4 mt-12 bg-green-500 hover:bg-blue-600  text-white w-[70%] font-bold text-lg rounded-xl shadow-lg transition cursor-pointer">
                                <span>message envoyer avec success !!! </span> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className={`size-10 text-white font-bold  cursor-pointer`} onClick={reset}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </div>
                       }
                         

                    </div>
                    <div className="w-[100%] lg:w-[48%] h-full self-start"> 
                        <form  onSubmit={handleSubmit} className="w-full  grid gap-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center  gap-2 border border-gray-400 px-1 py-2 rounded-lg w-[80%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                    <input type="text" name="name" id="name"  placeholder="اسم" className=" outline-none placeholder:text-gray-400 w-[80%] " required/>
                                </div>

                                <div className="flex items-center  gap-2 border border-gray-400 px-1 py-2 rounded-lg w-[80%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                    <input type="email" name="email" id="email" placeholder="بريد إلكتروني" className=" outline-none placeholder:text-gray-400 w-[80%] "  required />
                                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                                </div>
                            </div>

                            <textarea name="message" id="message" placeholder="رسالة" className=" outline-none placeholder:text-gray-400 w-full border border-gray-400 rounded-lg resize-none p-4 pb-40 h-full" required></textarea>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>

                            {state.submitting ? 
                                <span value="" className=" px-4 py-4 bg-blue-500 hover:bg-blue-600  text-white w-1/2 font-bold text-lg rounded-xl shadow-lg transition flex items-center  gap-4 justify-center cursor-pointer">
                                    <span className='loader'></span>
                                    <span>loading...</span>
                                </span>
                                : 
                                <button type="submit" value="" className="inline-block px-4 py-4 bg-blue-500 hover:bg-blue-600  text-white w-1/2 font-bold text-xl rounded-xl shadow-lg transition cursor-pointer"  disabled={state.submitting}>مبعوث</button>
                            }


                        </form>
                    </div>
                </div>
            </section>
            <div className="w-[100%]  lg:w-[90%] mx-auto h-40 bg-blue z-0 absolute  left-1/2 -translate-x-1/2 -bottom-2  lg:-bottom-4 lg:rounded-4xl rounded-[4.8rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="16" fill="none" preserveAspectRatio="none" viewBox="0 0 300 16" className="absolute -bottom-2 right-28 max-sm:right-12 w-[60%]">
                    <path fill="#2654FF" fill-rule="evenodd" d="M0-35.333C0-58.345 18.655-77 41.667-77h216.666C281.345-77 300-58.345 300-35.333V-13c0 11.598-9.402 21-21 21h-14.542c-5.228 0-10.41.984-15.275 2.9l-5.579 2.2A41.7 41.7 0 0 1 228.33 16h-83.66c-5.228 0-10.41-.984-15.274-2.9l-5.579-2.2A41.7 41.7 0 0 0 108.542 8H21C9.402 8 0-1.402 0-13z" clip-rule="evenodd"></path>
                </svg>
            </div> 
        </div>

    )
}

export default Contacts