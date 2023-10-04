import Image from "next/image";

import ThemeToggleButton from "@/components/ThemeToggleButton";
import styles from "@/styles/Introduction.module.scss";

export default function Introduction() {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Hi, I&apos;m Alberto Vilches</h1>
        <ThemeToggleButton />
      </div>

      <div className={styles.content}>
        <div className={styles.introduction}>
          <p className={styles.description}>
            I&apos;m a Full-Stack Software Developer based in Germany and
            working at Trudesk since 2021.
            <br />
            <br />
            While working at Trudesk, a help-desk service platform, I have
            helped build a TypeScript API and UI SDK, a high-performance and
            custom-built GraphQL API in Node.js with MongoDB and Mongoose, and a
            responsive UI built with React.js and Next.js.
            <br />
            <br />
            Some of the technologies I work with are: JavaScript/TypeScript,
            Node.js, GraphQL, CSS/SCSS, React.js, Vue.js, Express.js, Next.js,
            MySQL, Firebase, MongoDB, AWS, Docker, and Git.
          </p>

          <ul className={styles.links}>
            <li>
              <a
                href="https://www.linkedin.com/in/albertothedev/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/albertothedev"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="/Alberto_Vilches_CV.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
        <Image
          className={styles.headshot}
          src="/headshot.png"
          alt="Picture of the website's author"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
