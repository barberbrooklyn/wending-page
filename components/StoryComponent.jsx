import Image from 'next/image';
import styles from './story.module.css';

export default function StoryComponent() {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="images/gallery/notelopierdas.png"
          alt="Descriptive Alt Text"
          fill
          width={700}
          height={475}
          className={styles.image}
        />
      </div>
      <h1>Your Story Title</h1>
      <p>
        This is your story content. You can add more details here about the section. 
        Adjust styles and layout as needed to fit your design.
      </p>
    </section>
  );
}
