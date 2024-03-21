const Cryptr = require("cryptr");

export const encrypt = (data: string, key: string) => {
  const cryptr = new Cryptr(key, {
    encoding: "base64",
    pbkdf2Iterations: 10000,
    saltLength: 10,
  });

  const encryptedString = cryptr.encrypt(data);
  const decryptedString = cryptr.decrypt(encryptedString);
  
  console.log(encryptedString); // CPbKO/FFLQ8lVKxV+jYJcLcpTU0ZvW3D+JVfUecmJmLYY10UxYEa/wf8PWDQqhw=
  console.log(decryptedString); // bacon
  return encryptedString;
};
