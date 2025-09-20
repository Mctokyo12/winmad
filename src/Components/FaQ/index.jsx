import { useState } from "react"

const FaQ = ()=>{
    const FaQ = [
        {   id: "1",
            title: "ما هو رمز الترويجي 1xBet في عام 2025؟",
            content : "الرمز الترويجي لـ 1xBet هو WINMAD.<br /> سيسمح لك هذا الرمز الترويجي بالحصول على مكافأة ترحيبية تصل إلى 200 يورو على المراهنات الرياضية.."
        }, 

        {
            id: "2",
            title: "كيفية الحصول على رمز 1xBet الترويجي الخاص بي ?",
            content: "استخدم الرمز الترويجي WINMAD من 1xBet عند التسجيل. ستحصل على مكافأة قدرها 200 يورو على إيداعك الأول في المراهنات الرياضية."
        } , 

        {
            id: "3",
            title: "من يمكنه الاستفادة من مزايا رموز الترويجي 1xBet؟",
            content: "يمكن لأي شخص يبلغ من العمر 18 عامًا أو أكثر ولم ينشئ حسابًا أبدًا الاستفادة من أكواد الترويج الخاصة بـ 1xBet."
        },
        {
            id: "4",
            title: "كيف يعمل Advancebet على 1xbet؟ ",
            content: "Advancebet هي مكافأة تتيح لك الحصول على سلفة على أرباحك المحتملة من الرهانات غير المستقرة. هذه المكافأة متاحة لجميع عملاء 1xBet الذين لديهم رهانات غير مستقرة في حساباتهم."
        },
        {   
            id: "5",
            title: "هل يمكنك الجمع بين مكافآت الترحيب على 1xBet؟ ",
            content:"لا يُمكن الجمع بين مكافآت ترحيبية متعددة في 1xBet. اختر عرضك الترويجي بعناية قبل استخدام رمز WINMAD الترويجي الخاص بـ 1xBet."
        },
        {  
            id:"6",
            title:"هل رمز 1xBet الترويجي صالح على الهاتف المحمول؟ ",
            content:"نعم. رمز WINMAD الترويجي يعمل على موقع 1xBet الإلكتروني وتطبيقه على الهاتف المحمول."
        },
        {   id:"7",
            title: "هل يمكن استخدام رمز 1xBet الترويجي للكازينو؟",
            content: "نعم. يتيح لك رمز 1xBet الترويجي أيضًا الحصول على مكافأة كازينو تصل إلى 1500 يورو مع 150 دورة مجانية."
        }

    ]


    const [visible , setVisible] = useState(0);

    return (

        <section id="Qfa" className="pb-24 pt-32 bg-darks relative z-0 -mt-16 text-white">
            <h2 className="text-center font-bold text-5xl">الأسئلة الشائعة</h2>
            <div className="mx-auto w-[95%] mt-8 lg:w-4/5">
                {FaQ.map(({title , content ,id} , index)=>(
                    
                    <div className="py-2 px-3 rounded-lg bg-bg-secondary text-white mb-4 " key={index}>
                        <div className="flex justify-between items-center" >
                            <h4 className="font-bold text-xl">{title}</h4>
                            <div className={`bg-gray-700 p-1 rounded-full w-fit flex items-center justify-center hover:bg-gray-800 duration-300 ${visible == id ? "hidden" : ""}`} onClick={(e)=>setVisible(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer  text-3xl" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <div className={`bg-blue-500 hover:bg-blue-600 duration-300  p-1 rounded-full w-fit flex items-center justify-center ${visible == id ? "": "hidden" }`} onClick={()=>setVisible(0)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </div>

                        </div>
                        <p className={`text-lg mt-2 text-gray-500  w-full lg:w-[60%] ${visible == id ? "flex" : "hidden"}`}>
                            {content}
                        </p>
                    </div>

                ))}




            </div>
        </section>

    )
}

export default FaQ
