export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Studio217
        </h1>
        <p style={{
          color: '#666',
          fontSize: '1.1rem'
        }}>
          Website offline
        </p>
      </div>
    </div>
  );
}