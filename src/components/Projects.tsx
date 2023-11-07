import styles from "@/styles/Projects.module.scss";

export default function Projects() {
  return (
    <section className={`${styles.section} ${styles.projects}`}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Projects</h2>
        <hr />
      </div>

      <ul className={styles.content}>
        <li className={styles.entry}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.heading}>Trudesk</h3>
              <span className={styles.technologies}>
                React.js, Next.js, TypeScript, MongoDB, GraphQL
              </span>
            </div>

            <span className={styles.description}>
              Help-desk/ticketing solution
            </span>
          </div>

          <ul>
            <li>
              Expanded a GraphQL-to-MongoDB request processor&apos;s support for
              MongoDB operators.
            </li>
          </ul>
        </li>

        <li className={styles.entry}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.heading}>Trudesk Cloud</h3>
              <span className={styles.technologies}>
                Node.js, TypeScript, Docker, GraphQL
              </span>
            </div>

            <span className={styles.description}>
              Cloud-based and on-premises SaaS frontend for Trudesk
            </span>
          </div>

          <ul>
            <li>Implemented a real-time user-agent chat.</li>
            <li>
              Built a UI library of form components with overridable behavior
              via hooks.
            </li>
          </ul>
        </li>

        <li className={styles.entry}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.heading}>React API SDK</h3>
              <span className={styles.technologies}>
                React.js, TypeScript, GraphQL
              </span>
            </div>

            <span className={styles.description}>
              React.js SDK for interfacing with the Trudesk API
            </span>
          </div>

          <ul>
            <li>
              Developed a React.js SDK with query status handling for easy
              integration of Trudesk into a preexisting React.js application.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
