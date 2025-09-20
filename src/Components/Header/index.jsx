import NavBar from "../NavBar"



const Header  = ()=>{
    return (
        <header id="accueil" className="bg-black lg:pb-24 relative">
            <NavBar/>
            <div className="mx-auto w-[90%]  flex items-center justify-center lg:h-screen z-4  pt-20  relative">
                <div className="grid grid-cols-1  lg:grid-cols-2 place-content-center  mt-4   gap-10 ">
                    <div>
                        <p className="text-4xl text-justify text-white my-4 ">
                            اكسب المال بسهولة مع 1xBet باستخدام أفضل رمز ترويجي WINMAD
                        </p>
                        <h4 className="text-4xl text-blue">1xbet شركة المراهنات رقم 1</h4>
                        <div className=" p-4 border-4 mt-4 text-4xl border-dashed border-blue flex items-center justify-center text-white cursor-pointer  w-64">
                            WINMAD
                        </div>
                        <a href="https://lb-aff.com/L" class="inline-block px-2 py-5 bg-blue-600 hover:bg-blue-500 text-center text-white w-[60%] font-bold text-xl rounded-xl shadow-lg mt-8 transition cursor-pointer" >سجل في 1xbet</a>
                    </div>
                    <div className="">
                        <div className="">
                            <img src="/images/banner-main.ea2359311cbcd27aa48872fc29d5c46a.png" alt=""  className=" object-cover " width={1493} height={1767}/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blue-background"></div>
            <div class="blue-background-v1"></div>

            <div className="infos mx-auto w-[90%] lg:w-[60%] bg-bg-secondary  backdrop-blur-xs z-10   pb-16  relative px-4 py-2  lg:h-70 rounded-2xl grid lg:grid-cols-3 grid-cols-1 gap-4 text-white">
                <div className="info">
                    <div>
                        <img src="/images/commission.0e240bdd2d4c969f5239e2ffc9dd1924.svg" alt="" srcset="" />
                    </div>
                    <h2 className=" font-bold  text-center text-xl my-2 uppercase">مكافأة التسجيل</h2>
                    <p className="text-center descrip">احصل على مكافأة تصل إلى 200% عند التسجيل</p>
                </div>

                <div className="info">
                    <div>
                        <img src="/images/autopayments.426d9d2d78127157b56ec85f3a8de72a.svg" alt="" srcset="" />
                    </div>
                    <h2 className="font-bold text-xl my-2 uppercase"> الدفع الآمن</h2>
                    <p className="text-center descrip">مدفوعات سريعة وآمنة من خلال طرق مختلفة</p>
                </div>

                <div className="info">
                    <div>
                        <img src="/images/assistant.850dc137dfbe372c241274799d76983c.svg" alt="" srcset="" />
                    </div>
                    <h2 className="font-bold text-xl my-2 text-center uppercase">مساعد شخصي</h2>
                    <p className="text-center descrip">سوف تساعدك خدمة الدعم لدينا في حل أي مشكلة</p>
                </div>

            </div>


        </header>
    )
}

export default Header;