import React from 'react'

export function SelfHostedFont() {
  return (
    <>
      <h1>Element with self hosted junicode2-regular font</h1>
      <code>
        @ https://github.com/psb1558/Junicode-font fontFamily:
        'Junicode-2-Regular'
      </code>
      <div style={{ fontFamily: 'Junicode-2-Regular' }}>
        Hier ist ein neues Junicode 2 - Regular Element
      </div>
    </>
  )
}
