const generateData = (rounds = 3) => {
  const data = [];

  for (let i = 0; i < rounds; i += 1) {
    const num = Math.floor(Math.random() * 9 + 1);
    const map = new Map();
    map.question = num;

    if (num % 2 === 0) {
      map.answer = 'yes';
    } else {
      map.answer = 'no';
    }

    data.push(map);
  }
  return data;
};

export default generateData;
