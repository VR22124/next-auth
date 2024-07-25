// components/NavigationButtons.js
'use client'  // This directive marks the component as a Client Component

import { useRouter } from 'next/navigation';

export default function NavigationButtons() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/Login');
  };

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={handleLoginClick}>Go to Login</button>
      <button style={styles.button} onClick={handleRegisterClick}>Go to Register</button>
    </div>
  );
}

const styles = {
  buttonContainer: {
    marginTop: '20px'
  },
  button: {
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'background-color 0.3s'
  }
}
