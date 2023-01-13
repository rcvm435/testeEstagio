const q5 = () => {
    const dict = {
      4: 'a',
      3: 'e',
      1: 'i',
      5: 's',
    };
  
    text = 'T35t3 d3 35t4g1o';
  
    for (let key in dict) {
      text = text.replace(new RegExp(key, 'g'), dict[key]);
    }
  
    console.log(text);
  };
