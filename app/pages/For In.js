const user = {
 	name: 'John',
 	surname: 'Doe',
 	phone: '+380971234567',
 	email: 'john@example.com',
 	id: '123efr24',
};

for (const key in user) {
console.info ("Ключ: "+ key + " Значение: " + user[key])
}