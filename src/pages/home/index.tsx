import { useState } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '@blocs/footer'

function Checkable({ text, setHasChecked }) {
  const [checked, setChecked] = useState(false)

  function onClick() {
    setChecked(!checked)
    setHasChecked(true)
  }

  return (
    <div
      className="m-2 ml-0 mb-6 w-full flex flex-row items-center cursor-pointer slideIn"
      onClick={onClick}
    >
      <div
        className="border-gray-700 absolute border-solid border-2 animate-ping"
        style={{ minWidth: 25, width: 25, minHeight: 25, height: 25 }}
      />
      <div
        className="border-gray-700 border-solid border-2 text-yellow-600"
        style={{ minWidth: 25, width: 25, minHeight: 25, height: 25 }}
      >
        { checked && (
          <FontAwesomeIcon
            icon={faCheck}
            className="relative"
            style={{ width: 35, height: 35, top: -10, left: -5 }}
          />
        ) }
      </div>

      <p className="ml-6 text-gray-300">
        { text }
      </p>
    </div>
  )
}


const questions = [
  'question1',
  'question2',
  'question3',
  'question4',
]

export function Qualification() {
  const [hasChecked, setHasChecked] = useState(false)

  return (
    <section
      className="w-full"
    >
      <div className="flex flex-col items-center relative">
        <div className="absolute bg-black w-full h-full z-10" style={{ opacity: 0.97 }}></div>
        <div className="w-11/12 py-12 z-20">
          <div className="text-4xl font-bold text-white text-center mb-8">
            <div className="mb-4">
              Qualifications
            </div>
            <p className="text-white text-center text-2xl mb-10 underline">
              Do this if you agree
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="w-8/12">
              { questions.map(question => (
                <Checkable text={question} key={question} setHasChecked={setHasChecked} />
              )) }

              { hasChecked && (
                <p className="text-3xl text-center text-gray-300 font-bold mb-10 max-w-2xl">
                  Bravo, vous pouvez continuer
                </p>
              ) }

            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default function Home() {
  return (
    <div className="h-full min-h-full-vh bg-gradient-to-b ubuntu text-gray-300" style={{ backgroundColor: '#180c3f' }}>
      <Head>
        <title>Tailwind + NextJS boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow"/>
      </Head>

      <main className="h-full flex flex-col items-center">
        NextJS Tailwind boilerplate
        <br/>
        Scroll to bottom for more features
        <div style={{ height: 1500 }}>

        </div>
        <Qualification />
      </main>

      <Footer />
    </div>
  )
}
