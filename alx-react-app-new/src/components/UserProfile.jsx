const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      margin: '15px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '10px',
        borderBottom: '2px solid #3498db',
        paddingBottom: '5px'
      }}>{props.name}</h2>
      <p style={{ color: '#7f8c8d', margin: '8px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#2c3e50' }}>{props.age}</span>
      </p>
      <p style={{ 
        color: '#34495e',
        fontStyle: 'italic',
        lineHeight: '1.5'
      }}>{props.bio}</p>
    </div>
  );
};
export default UserProfile;

["blue"]