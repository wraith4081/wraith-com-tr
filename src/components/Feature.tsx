import React from 'react'
import { HiBolt, HiCircleStack, HiMiniSquare3Stack3D, HiQrCode, HiServerStack, HiShieldCheck, HiSwatch, HiWrenchScrewdriver } from 'react-icons/hi2'

export default function Feature() {
    return (
        <div className="text-left max-w-7xl px-6 w-full mx-auto" id='feature'>
            <div className="text-left max-w-2xl mx-auto">
                <h2 className="text-base font-semibold leading-8 tracking-widest text-indigo-500 uppercase">İhtiyaçınız olan her şey</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100  sm:text-4xl">Yazılım mı? Sorun değil.</p>
                <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-700">Her şeyi kapsayan yazılım çözümleri. Teknoloji uzmanıyla güvenli, hızlı ve özelleştirilmiş projeler.</p>
            </div>
            <dl className="text-left mt-16 grid max-w-2xl grid-cols-1 gap-12 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2 mx-auto ctb cxh czq">

                <div className="relative pl-9 max-w-full flex flex-col">
                    <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiMiniSquare3Stack3D className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> Kapsamlı Teknoloji Yığını.</dt>
                    <dd className="inline">Full-stack geliştirici olarak, geniş bir teknoloji yığınına hakimim ve projelerinizi farklı diller ve çerçeveler kullanarak geliştirebilirim.</dd>
                </div>
                <div className="relative pl-9 max-w-full flex flex-col">
                    <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiSwatch className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> Özelleştirilmiş Çözümler.</dt>
                    <dd className="inline"> İhtiyaçlarınıza özel çözümler sunabilirim. Projelerinizi baştan sona geliştirebilir, işlevsel ve kullanıcı dostu arayüzler oluşturabilirim.</dd>
                </div>
                <div className="relative pl-9 max-w-full flex flex-col">
                <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiCircleStack className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> Veritabanı Yönetimi.</dt>
                    <dd className="inline">Veritabanı tasarımı ve yönetimi konusunda deneyimliyim. İhtiyaçlarınıza uygun veritabanı çözümleri sunabilir ve veri tabanı optimizasyonu yapabilirim.</dd>
                </div>
                <div className="relative pl-9 max-w-full flex flex-col">
                    <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiQrCode className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> API Geliştirme ve Entegrasyon.</dt>
                    <dd className="inline">Üçüncü parti hizmetlerle entegre edilebilen ve esnek API'ler oluşturabilirim.</dd>
                </div>
                <div className="relative pl-9 max-w-full flex flex-col">
                    <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiShieldCheck className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> Güvenlik Optimizasyonu.</dt>
                    <dd className="inline">Uygulamalarınızı güvende tutmakiçin gerekli önlemleri alabilirim. En son güvenlik standartlarına uygun olarak uygulama güvenliği sağlayabilirim.</dd>
                </div>
                <div className="relative pl-9 max-w-full flex flex-col">
                    <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiBolt className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> Performans Optimizasyonu.</dt>
                    <dd className="inline">Uygulamanızın hızlı ve verimli çalışmasını sağlamak için performans optimizasyonu yapabilirim.</dd>
                </div>
                <div className="relative pl-9 max-w-full flex flex-col">
                    <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiServerStack className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> Hosting ve Dağıtım.</dt>
                    <dd className="inline">Projelerinizi yayınlamak için hosting hizmeti de sağlıyorum. Uygulamalarınızı güvenli ve hızlı sunucularda barındırabilirim. Ayrıca, sürekli entegrasyon ve dağıtım (CI/CD) süreçlerini otomatikleştirerek projelerinizin sorunsuz bir şekilde güncel kalmasını sağlayabilirim.</dd>
                </div>
                <div className="relative pl-9 max-w-full flex flex-col">
                    <dt className="whitespace-nowrap  font-semibold dark:text-slate-100 text-slate-900 mr-1 flex items-center"><HiWrenchScrewdriver className='absolute left-1 top-1 h-6 w-6 text-indigo-500' /> Sorun Giderme ve Destek.</dt>
                    <dd className="inline">Var olan projelerinizde sorunları tespit edebilir ve düzeltebilirim. Ayrıca, proje sonrası destek sağlayarak gelecekte ortaya çıkabilecek sorunların çözümüne yardımcı olabilirim.</dd>
                </div>
            </dl>
        </div>
    )
}
