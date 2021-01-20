export const arrowActive = (level:number, arrow1:any, arrow2:any, arrowR:string, arrowRH:string, arrowLH:string, arrowL:string, n:number, m:number):void => {

	if (level === n) { // Flecha derecha -> (arrow1).
		
		arrow1.classList.remove(arrowR);
		arrow1.classList.add(arrowRH);

	} else if (level === m) { // Flecha izquierda -> (arrow2).

		arrow2.classList.remove(arrowLH);
		arrow2.classList.add(arrowL);
	}
}

export const levelActive = (getLevels:any[], level:number, getLevelsTo:any, n:number, m:number, selected:boolean=false):void => {

	getLevelsTo.textContent = `Nivel ${level} de 24 ▾`;

	let index:number = selected ? n : level - n;

	if (getLevels) {

		getLevels[index].classList.remove('active');
		getLevels[level - m].classList.add('active');
	}
}

export const justifyContent = (text:string, frogsTag:any, btn:any, property:string, moreTwoProperty:boolean=true, ...spread:number[]):boolean => {

	const frogs:any[] = [...frogsTag].reverse();

	switch (text) {

		case 'justify-content: flex-end':

			frogs.forEach(frog => {

				frog.style.left = `calc(${spread[1]}% - 120px)`;
				spread[1] -= spread[6];
			});
		break;

		case 'justify-content: center':

			frogs.forEach(frog => {

				frog.style.left = `${spread[2]}%`;
				spread[2] -= spread[7];
			});
		break;

		case 'justify-content: space-between':

			frogs.forEach(frog => {

				frog.style.left = `${spread[3]}%`;
				spread[3] -= spread[8];
			});
		break;

		case 'justify-content: space-around':

			frogs.forEach(frog => {

				frog.style.left = `${spread[4]}%`;
				spread[4] -= spread[9];
			});
		break;
		
		default:

			frogsTag.forEach(frog => {

				frog.style.left = `${spread[0]}%`;
				spread[0] += spread[5];
			});
		break;
	}

	if (text === property) {
					
		moreTwoProperty && setTimeout(() => btn.classList.add('btn-animate'), 300);
		return true;
	
	} else {

		btn.classList.remove('btn-animate');
		return false;
	}
}

export const alignItems = (text:string, frogsTag:any, btn:any, property:string, moreTwoProperty:boolean=true, ...spread:number[]):boolean => {

	const frogs:any[] = [...frogsTag].reverse();

	switch (text) {

		case 'align-items: flex-end':

			frogs.forEach(frog => {

				frog.style.top = `81.5%`;
			});
		break;

		case 'align-items: center':

			frogs.forEach(frog => {
				
				frog.style.top = `40%`;
			});
		break;

		case 'align-items: baseline':

			// frogs.forEach(frog => {

			// 	frog.style.left = `${spread[3]}%`;
			// 	spread[3] -= spread[8];
			// });
		break;

		case 'align-items: stretch':

			// frogs.forEach(frog => {

			// 	frog.style.left = `${spread[4]}%`;
			// 	spread[4] -= spread[9];
			// });
		break;
		
		default:
	
			frogs.forEach(frog => {

				frog.style.top = `calc(18% - 87px)`;
			});
		break;
	}

	if (text === property) {	
					
		moreTwoProperty && setTimeout(() => btn.classList.add('btn-animate'), 300);
		return true;
	
	} else {

		btn.classList.remove('btn-animate');
		return false;
	}
}

export const flexDirection = (text:string, frogsTag:any, btn:any, property:string, moreTwoProperty:boolean=true, ...spread:number[]):boolean => {

	const frogs:any[] = [...frogsTag].reverse();

	switch (text) {

		case 'flex-direction: row-reverse':

			frogs.forEach(frog => {
				
				frog.style.left = `${spread[0]}%`;
				spread[0] += spread[5];
			});
		break;

		case 'flex-direction: column':

			frogs.forEach(frog => frog.style.left = `5%`);

			frogs.forEach(frog => {

				frog.style.top = `calc(${spread[2]}% - 87px)`;
				spread[2] -= spread[6];
			});
		break;

		case 'flex-direction: column-reverse':

			frogs.forEach(frog => frog.style.left = `5%`);

			frogs.forEach(frog => {

				frog.style.top = `${spread[3]}%`;
				spread[3] += spread[7];
			});
		break;
		
		default:

			frogs.forEach(frog => frog.style.top = `calc(18% - 87px)`);

			frogs.forEach(frog => {

				frog.style.left = `${spread[0]}%`;
				spread[0] -= spread[4];
			});
		break;
	}

	if (text === property) {	
					
		moreTwoProperty && setTimeout(() => btn.classList.add('btn-animate'), 300);
		return true;
	
	} else {

		btn.classList.remove('btn-animate');
		return false;
	}
}