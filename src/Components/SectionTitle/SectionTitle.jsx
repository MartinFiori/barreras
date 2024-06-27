import React from 'react'
import s from './SectionTitle.module.css'

export default function SectionTitle({ title, children }) {
  return (
    <section>
      <h2 className='fw-bold fs-4 px-2 mb-4'>{title}</h2>
      <div className={`rounded ${s.cardsContainer}`}>
        {children}
      </div>
    </section>
  )
}
