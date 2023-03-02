const newEmployees = (element) => {
  const employees = {
    id1: element('Pedro Guerra'), 
    id2: element('Luiza Drumond'),
    id3: element('Carla Paiva'),
  }
  return employees;
};

const employesFind = (element) => {
    const email= element.toLowerCase().replace(' ', '_');
    return { element, email: `${email}@trybe.com`};
};

console.log(newEmployees(employesFind));