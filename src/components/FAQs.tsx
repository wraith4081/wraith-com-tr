import React from 'react'
import { Disclosure, Transition } from '@headlessui/react';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import classnames from 'classnames';
import { useMain } from 'context/Main';
import Skeleton from './Skeleton';

export default function FAQs() {
  const [activeIndices, setActiveIndices] = React.useState<number[]>([]);

  const { content } = useMain();

  const [data, setData] = React.useState<{
    "question": string,
    "answer": string
  }[] | null>(null);

  React.useEffect(() => {
    if (!content) return;

    setData(content.faq);

    return () => {
      setData(null);
    }
  }, [content])

  return (
    <div className="mx-auto max-w-2xl w-full abx acj">
      <div className="text-left max-w-2xl mx-auto">
        <h2 className="text-base font-semibold leading-8 tracking-widest text-indigo-500 uppercase">Peki ya?</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100  sm:text-4xl">Sıkca Sorulan Sorular</p>
        <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-700">
          Aslında, sadece "Peki Ya?" diye sorma, yeteneklerimi artırmaz ama neyse ki, tüm sorularınızı yanıtlamak için buradayız! 😄
        </p>
      </div>
      <dl className='mt-10 divide-y'>
        {
          content ? (data && data.map((faq, i) => (
            <div className='pt-6 pb-6' key={i}>
              <Disclosure>
                <dt>
                  <Disclosure.Button
                    className="flex justify-between items-start content-between text-left text-slate-900"
                    onClick={() => {
                      setActiveIndices((current) =>
                        current.includes(i) ? current.filter((index) => index !== i) : [...current, i]
                      );
                    }}
                  >
                    <span className='text-base font-semibold leading-7'>{faq.question}</span>
                    <span className='ml-6 relative h-7 w-7'>
                      <HiPlus className={classnames(
                        'absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity', {
                        'opacity-0': activeIndices.includes(i)
                      }
                      )} size={24} />
                      <HiMinus className={classnames(
                        'absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity', {
                        'opacity-0': !activeIndices.includes(i)
                      }
                      )} size={24} />
                    </span>
                  </Disclosure.Button>
                </dt>
                <dd className='mt-2'>
                  <Transition
                    enter='transition duration-300 ease-out'
                    enterFrom='max-h-0 opacity-0'
                    enterTo='max-h-full opacity-100'
                    leave='transition duration-100 ease-out'
                    leaveFrom='max-h-full opacity-100'
                    leaveTo='max-h-0 opacity-0'
                  >
                    {activeIndices.includes(i) && (
                      <div className='overflow-hidden transition-all'>
                        <Disclosure.Panel
                          className='text-base leading-7 text-slate-600'
                          key={`panel-${i}`}
                        >
                          {faq.answer}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Transition>
                </dd>
              </Disclosure>
            </div>
          ))) : (
            Array.from({ length: 5 }).map((_, i) => (
              <div className='pt-6 pb-6' key={i}>
                <div className='h-4 w-16' children={<Skeleton />} />
              </div>
            ))
          )
        }
      </dl>
    </div >
  )
}
