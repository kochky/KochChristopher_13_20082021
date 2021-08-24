
  export default async function PostToken(tokenBody) {
  
    return fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
          headers: {
            'Authorization': `Bearer ${tokenBody}`
          },
    })
      .then(data => data.json())
  }