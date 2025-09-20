const Footer = ()=>{
    return (
        <footer class="bg-darks text-gray-300 pb-8 pt-32 relative -z-1 -mt-12">
            <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* <!-- Logo et description --> */}
                <div>
                    <h2 class="text-xl font-bold text-white mb-3">كود خصم 1xBet</h2>
                    <p class="text-sm">
                        استفد من أفضل العروض والمكافآت الحصرية مع رمز الترويج الترويجي 1xBet. 
                        Suivez nos Misses à jour pour ne rien manquer !
                    </p>
                </div>

                {/* <!-- Liens utiles --> */}
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">روابط مفيدة</h3>
                    <ul class="space-y-2">
                        <li><a href="#promocode" class="hover:text-blue-400">المكافآت والعروض الترويجية</a></li>
                        <li><a href="#register" class="hover:text-blue-400">دليل النقش</a></li>
                        <li><a href="#Qfa" class="hover:text-blue-400">الأسئلة الشائعة</a></li>
                        <li><a href="#contacts" class="hover:text-blue-400">تواصل</a></li>
                    </ul>
                </div>

                {/* <!-- Réseaux sociaux --> */}
                <div>
                    <h3 class="text-lg font-semibold text-white mb-3">تابعنا</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="hover:text-blue-400">فيسبوك</a>
                        <a href="#" class="hover:text-blue-400">تغريد</a>
                        <a href="#" class="hover:text-blue-400">انستغرام</a>
                    </div>
                </div>
            </div>

            {/* <!-- Copyright --> */}
            <div class="text-center text-sm text-gray-500 mt-12 border-t border-gray-700 pt-4">
                © ٢٠٢٥ رمز ترويجي لـ ١xBet. جميع الحقوق محفوظة.
                <br/>
                <span class="text-xs">* هذا الموقع ليس تابعًا رسميًا لـ 1xBet، بل هو موقع إعلامي..</span>
            </div>
        </footer>

    )
}

export default Footer