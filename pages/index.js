import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, {useEffect, useState} from 'react';

export default function Home() {
  const getColor = () => window.localStorage.getItem('color' || 'white');
  const [color, setColor] = useState();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setColor(getColor());
  }, []);


  const onClick = () => {
    setDisabled(true);
    const oldColor = getColor();
    const newColor = oldColor === 'white' ? 'cyan' : 'white';
    //setColor(newColor);
    window.localStorage.setItem('color', newColor);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  return (
    <div className="container" style={{backgroundColor: color}}>
      <Head>
        <title>Playwright Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Playwright Test" />
        <p className="description">
          <button onClick={onClick} disabled={disabled}>Click Me</button>
        </p>
      </main>

      <Footer />
    </div>
  )
}
