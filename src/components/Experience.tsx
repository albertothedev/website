import styles from "@/styles/Experience.module.scss";

export default function Experience() {
  return (
    <section className={`${styles.section} ${styles.experience}`}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Experience</h2>
        <hr />
      </div>

      <ul className={styles.content}>
        <li className={styles.entry}>
          <div className={styles.header}>
            <div className={styles.container}>
              <h3 className={styles.heading}>Software developer</h3>
              <span className={styles.dates}>October 2021 - Present</span>
            </div>

            <div className={styles.container}>
              <span className={styles.description}>Trudesk, Inc.</span>
              <span className={styles.location}>
                Delaware, United States <span className={styles.dot}>·</span>{" "}
                Remote
              </span>
            </div>
          </div>

          <ul>
            <li>
              Improved the performance of database write requests by ~89% by
              leveraging MongoDB aggregation pipelines.
            </li>
            <li>
              Co-managed the integration of a product with a client&apos;s
              development team on-site.
            </li>
            <li>
              Implemented a user authentication and authorization system based
              on custom GraphQL directives.
            </li>
            <li>
              Assisted with the planning and led the implementation of a new
              frontend for the product using TypeScript, React.js, and Next.js.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
