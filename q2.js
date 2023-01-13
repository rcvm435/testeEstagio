const callable = (str) => {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    let stringToReturn = '';
    for (let i = 0; i < str.length; i++) {
      stringToReturn += vowels.includes(str[i].toLowerCase()) ? 0 : str[i];
    }
  
    return stringToReturn;
  };
 
  const q2 = (callable, str1, str2) => {
    str1 = callable(str1);
    str2 = callable(str2);
  
    console.log(`String1: ${str1} | String2: ${str2}`);
  };
