import React from 'react'
import Testimonial from './Testimonial'

export default function Testimonials() {
    return (
        <div className='lg:px-8 px-6 max-w-[100rem] flex flex-col gap-y-8 items-center justify-center'>
            <div className="max-w-7xl text-center flex flex-col gap-y-2">
                <h2 className="text-base font-semibold leading-8 tracking-widest text-indigo-500 uppercase">Referanslar</h2>
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 lg:text-4xl transition-colors">Binlerce harika insanla çalıştık</p>
            </div>
            <div className={
                'mx-auto w-full grid max-w-3xl grid-cols-1 gap-8 text-sm leading-6' +
                'text-slate-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 gap-y-8 xl:gap-x-8 justify-items-center'
            }>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 xl:col-span-1 col-span-2 gap-8 min-w-full'>

                    {
                        [
                            { name: 'burgercik', username: 'burgercik', image: '5299fe96-fe4a-4146-836d-ad81fac541cc.jpg', quote: 'İşini, gerçekten, çok emek verip saygı ve özenle yapıyor. İletişim konusunda, çok küçük pürüzler var ama o pürüzler bile bir mikroskopla bile anca gözükür.' },
                            { name: 'Kutay KESKİN', username: 'kutaykeskin', image: '6673fc36-43c8-4e3e-9513-c99be9f6b792.jpg', quote: 'Eline sağlık çok güzel iş çıkarttı, yapılan işe göre gayet hızlı ilerledi.' },
                            { name: 'Mustafa BULANIK', username: 'mustafabulanik', image: 'b858c43b-8d56-8c21-f395-c626b51d80cb.png', quote: 'Çok hızlı. Fiyatı çok uygun ve başarlı. Eline sağlık.' },

                        ].map((testimonial, index) => (
                            <Testimonial name={testimonial.name} username={testimonial.username} image={testimonial.image} quote={testimonial.quote} />

                        ))
                    }
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-8 w-full'>
                    <Testimonial name='John Doe' username='johndoe' image='b858c43b-8d56-8c21-f395-c626b51d80cb.png' quote='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum perferendis perspiciatis deserunt quo libero nihil aperiam, suscipit magni similique odit dolor hic saepe incidunt? Sed, temporibus. Beatae officia officiis numquam ex neque placeat molestiae commodi quas possimus iure? Excepturi, enim.' big={true}/>
                    {
                        [
                            { name: 'echstore', username: 'echstore', image: '4616a9c0-48ff-4bd7-a761-7812f0a38056.jpg', quote: 'Başarılı.' },
                            { name: 'Mete YILMAZ', username: 'meteyilmaz85', image: 'b858c43b-8d56-8c21-f395-c626b51d80cb.png', quote: 'Çok düzgün iletişimi olan, keyifle iş yapabileceğiniz bir arkadaşımız. İşi sağ olsun vaktinden önce teslim etti. Gönül rahatlığıyla çalışabilirsiniz.' },
                            { name: 'macklemore', username: 'macklemore', image: '57dd247f-ae4b-4d42-9bc0-f97f4895ac4b.jpg', quote: 'Kendisiyle çalışmanızı öneririm' },
                            { name: 'Tayfur', username: 'djtayfur', image: '06aa924e-6033-42bb-ad9f-55614fc12a73.png', quote: 'Bence işinin en iyisi. Bir cok kişiye bot yaptırdım, fakat hep çakma yada oradan buradan aldıkları kodlarla yaptıkları için, patlayınca ilgilenmediler; kullanıcı hatası dediler. Bu arkadaş çok ilgili ve anlayışlı. Kendisine teşekür ederim :) ve kafa dengi bir arkadaş güvenebilirsiniz...' },

                        ].map((testimonial, index) => (
                            <Testimonial name={testimonial.name} username={testimonial.username} image={testimonial.image} quote={testimonial.quote} />

                        ))
                    }

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 col-span-2 xl:col-span-1 xl:grid-cols-1 gap-8 w-full'>
                    {
                        [
                            { name: 'Faruk ILGAZ', username: 'farukilgaz', image: 'f6772dc7-6dec-44b6-acdd-52552dd0714f.jpg', quote: 'İşinizi severek yapan insanların güzel işler çıkarma olasılığı genelde yüksek oluyor. Wraithdev\'in iletişimini, verdiği hizmetin kalitesini ve zamanlama konusunu oldukça taktir ettim. Bu bütçelere güzel iş yapan insan sayısı azdır.' },
                            { name: 'pizzaparker07', username: 'pizzaparker07', image: 'b858c43b-8d56-8c21-f395-c626b51d80cb.png', quote: 'Yorucu bir proje idi freelancer üstesinden geldi kendisine teşekkür ederim . 😀' },
                            { name: 'Ahmet ÖZDOĞAN', username: 'ahmtozdgn', image: '5fe59e9a-4d8e-878b-d8d8-70742719cd6b.jpg', quote: 'Harika bir web sitesi için sürekli desteğiniz ve emekleriniz için sonsuz teşekkürler! İletişimdeki şeffaflığınız, zamanında ve muhteşem bir tasarımla tamamladığınız için ayrıca teşekkür ederiz. Bilgi ve becerileriniz takdire şayan. Olağanüstü hizmetiniz ve sonuç için teşekkürler!' },

                        ].map((testimonial, index) => (
                            <Testimonial name={testimonial.name} username={testimonial.username} image={testimonial.image} quote={testimonial.quote} />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
