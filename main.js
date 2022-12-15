const groupOne = ['Artem', 'Anton', 'Andriy', 'Mykhailo', 'Volodymir', 'Maria', 'Anna', 'Olga', 'Elena', 'Viktoriya'];
console.log(groupOne);

groupOne.push('Dmytro', 'Kateryna'); 
console.log(groupOne);

groupOne.unshift('Alina', 'Oksana');
console.log(groupOne);

groupOne.pop();
console.log(groupOne);

groupOne.shift(); 
console.log(groupOne);

let question = prompt(`Введіть ім'я студента`);
const verify = groupOne.includes(question);

if(verify === true){
    console.log('Такий студент є в групі.')
} else {
    console.log('Такого студента немає в групі.')
}

const groupTwo = groupOne.slice(3, 7);
console.log(groupTwo);

const newGroup = ['David', 'Maikl', 'John', 'Luci', 'Sandra']; 
console.log(newGroup);

const allGroup = groupTwo.concat(newGroup);
console.log(allGroup);

allGroup.splice(3, 1); 
console.log(allGroup);

allGroup.splice(5, 1, 'Ivan');
console.log(allGroup);

console.log(allGroup.join(' - '));














