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
            I&apos;m a Fullstack Software Developer based in Germany and working
            at Trudesk since 2021.
            <br />
            <br />
            As a software developer at Trudesk, I work on a help-desk service
            platform that enables businesses to provide fast and efficient
            customer support. I use TypeScript, GraphQL, React.js, Node.js, and
            MongoDB to build a high-performance and custom-built API that can
            handle complex queries and data manipulation, a cloud-based and
            on-premises SaaS UI with a library of customizable components and
            hooks, and an easy-to-use developer SDK for React.js applications.
            <br />
            <br />
            In my free time I enjoy learning languages. My native language is
            Spanish and I already speak English at full professional proficiency
            so I am working towards reaching that level in German as well.
            <br />
            <br />
            Some of the technologies I work with are:
            <br />
            <br />
            JavaScript/TypeScript <SeparatingDot /> Node.js <SeparatingDot />{" "}
            GraphQL <SeparatingDot /> CSS/SCSS <SeparatingDot /> React.js{" "}
            <SeparatingDot /> Vue.js <SeparatingDot /> Express.js{" "}
            <SeparatingDot /> Next.js <SeparatingDot /> NestJS <SeparatingDot />{" "}
            Jest <SeparatingDot /> Cypress <SeparatingDot /> MySQL{" "}
            <SeparatingDot /> Firebase <SeparatingDot /> MongoDB{" "}
            <SeparatingDot /> AWS <SeparatingDot /> Docker <SeparatingDot />{" "}
            Git.
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

function SeparatingDot() {
  return <span className={styles.SeparatingDot}>·</span>;
}
