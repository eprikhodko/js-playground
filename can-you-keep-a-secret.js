function createSecretHolder(secret) {
  let insideSecret = secret;
  return {
    getSecret() {
      return insideSecret;
    },
    setSecret(newSecret) {
      return (insideSecret = newSecret);
    },
  };
}

const obj = createSecretHolder(5);

console.log(obj.getSecret());
console.log(obj.setSecret(2));
console.log(obj.getSecret());

// function createSecretHolder(secret) {
//     let insideSecret = secret;
//     return {
//       getSecret: function getSecret() {
//         return insideSecret;
//       },
//       setSecret: function setSecret(newSecret) {
//         return (insideSecret = newSecret);
//       },
//     };
//   }
