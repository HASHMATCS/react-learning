

const Welcome = ({name ='unknown', age}) => {
        const ageStyle = age > 20 ? { color: 'red' } : { color: 'black' };
       const nameStyle = name === "unknown" ? { color: 'blue' } : { color: 'black' };
  return (


       <h1 style={ ageStyle }>Welcome, dear  <span style={nameStyle}>{name}. </span>
       
       is your age {age} years old
       
       
       </h1>



  )
}

export default Welcome