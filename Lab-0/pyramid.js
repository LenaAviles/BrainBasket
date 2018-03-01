var h = prompt();

for (let i = 0; i < h; i++) {
	let res = '';
	for (let j = 0; j < i + 2; j++) {
		res += '#';
	}
	console.log(res);
}
