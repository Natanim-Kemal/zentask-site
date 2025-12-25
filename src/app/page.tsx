'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [asciiBg, setAsciiBg] = useState('');

  useEffect(() => {
    const chars = "$ € 0 : ; . + = * # & @";
    const charArray = chars.split(' ');
    let text = '';


    const rows = 150;
    const cols = 300;
    const total = rows * cols;


    let chunk = '';
    for (let i = 0; i < 1000; i++) {
      chunk += charArray[Math.floor(Math.random() * charArray.length)] + ' ';
    }

    while (text.length < total * 2) {
      text += chunk;
    }

    setAsciiBg(text.substring(0, total * 2));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.asciiBackground} aria-hidden="true">
        {asciiBg}
      </div>

      <nav className={styles.nav}>
        <div className={styles.logo}>ZenTask</div>
        <div className={styles.navLinks}>
          <Link href="/features" className={styles.navLink}>Features</Link>
          <Link href="#" className={styles.navLink}>Log In</Link>
        </div>
      </nav>

      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Productivity, <br />
          <span className={styles.italic}>Reimagined.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Agentic task management. Minimalist. Powerful.
          Experience the flow of ZenTask today.
        </p>

        <div className={styles.buttonGroup}>
          <a href="#" className={styles.primaryButton}>Get Started Free</a>
          <a href="#" className={styles.secondaryButton}>Read the Manifesto</a>
        </div>
      </div>
    </main>
  );
}
