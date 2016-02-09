export let time = (dt) => {
	let date = new Date(dt*1000);
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let Time = `${hours}:${minutes}`;

	return Time;
}

