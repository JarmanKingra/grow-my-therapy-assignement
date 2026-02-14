import React from 'react'

export default function Signup() {
  return (
    <section className='bg-[var(--surface-2)] p-5 md:p-20 md:px-40 mb-10'>
        <div className='border border-white py-5 md:py-10 px-5 md:px-0 flex flex-col justify-center items-center gap-3 md:gap-7'>
            <h2 className='text-[var(--background)] text-3xl md:text-4xl font-semibold'>Subscribe</h2>
            <p className='text-[var(--background)] text-xl md:text-2xl text-center'>Sign up with your email address to receive news and updates.</p>
            <div className='flex flex-col justify-center items-center'>
                <input className='bg-[var(--background)] p-6 px-10 m-5' type="text" placeholder='Email Address'/>
                <button className='border p-4 px-7 md:py-6 text-[#c2bfcb] font-semibold'>SIGN UP</button>
            </div>
            <p className='text-[var(--background)] text-xl'>We respect your privacy.</p>
        </div>
    </section>
  )
}
