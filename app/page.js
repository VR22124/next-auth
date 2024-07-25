import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import User from './components/User';
import NavigationButtons from './components/NavigationButtons';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Home</h1>
      <h2 style={styles.subtitle}>Server Side Rendered</h2>
      <pre style={styles.session}>{JSON.stringify(session, null, 2)}</pre>
      <h2 style={styles.subtitle}>Client Side Rendered</h2>
      <User />
      <NavigationButtons />
    </section>
  );
}

const styles = {
  section: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: '"Arial", sans-serif',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#333'
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#666'
  },
  session: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    overflowX: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  }
}
