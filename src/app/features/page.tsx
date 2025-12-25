import Link from 'next/link';
import styles from './features.module.css';

export default function Features() {
    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>ZenTask</Link>
                <div className={styles.navLinks}>
                    <Link href="/features" className={styles.navLink}>Features</Link>
                    <Link href="https://github.com/natanim-kemal/zen-task" className={styles.navLink}>GitHub</Link>
                </div>
            </nav>

            <div className={styles.header}>
                <h1 className={styles.title}>Power tools for your mind.</h1>
                <p className={styles.subtitle}>
                    ZenTask isn't just a list. It's a comprehensive system designed to augment your cognitive throughput and keep you in the flow.
                </p>
            </div>

            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.span8}`}>
                    <h3 className={styles.cardTitle}>Powerful Task Management</h3>
                    <p className={styles.cardDesc}>
                        Organize with color-coded categories, priorities, and custom recurring schedules.
                        Add rich details and never miss a due date.
                    </p>
                </div>

                <div className={`${styles.card} ${styles.span4}`}>
                    <h3 className={styles.cardTitle}>Focus Mode</h3>
                    <p className={styles.cardDesc}>
                        Banish overwhelm with a distraction-free single-task view and integrated mindfulness exercises.
                    </p>
                </div>

                <div className={`${styles.card} ${styles.span4}`}>
                    <h3 className={styles.cardTitle}>Integrated Pomodoro</h3>
                    <p className={styles.cardDesc}>
                        Customizable work sessions and breaks with background alerts to maintain your perfect flow state.
                    </p>
                </div>

                <div className={`${styles.card} ${styles.span8} ${styles.highlight}`}>
                    <h3 className={styles.cardTitle} style={{ color: 'white' }}>Premium Experience</h3>
                    <p className={styles.cardDesc}>
                        Seamless dark mode, offline-capable PWA, and secure cloud sync.
                        A beautifully designed experience on every device.
                    </p>
                </div>

                <div className={`${styles.card} ${styles.span12}`}>
                    <h3 className={styles.cardTitle}>Insightful Analytics</h3>
                    <p className={styles.cardDesc}>
                        Visualize your productivity with streaks, completion rates, and weekly progress charts.
                        Use actionable data to optimize your workflow.
                    </p>
                </div>
            </div>
        </main>
    );
}
