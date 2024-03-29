import Link from 'next/link'
import React from 'react'

const Alert = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-4/5  md:w-[600px] flex flex-col'>
        <div className='bg-white p-2 rounded'>
            <div className='p-8'>
                <h1 className='text-xl'>
                    Opps... Essa pagina não existe!
                </h1>
                <p className='mt-10'>
                    Esse site foi criado apenas para demostração, os items aqui anunciados não estão para venda no mesmo
                </p>
                <div className='w-full h-9 text-center mt-12'>
                <Link href={"/"} className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                        Voltar a Home
                </Link>
            </div>
            </div>
            
               
        </div>
      </div>
    </div>
  )
}

export default Alert
