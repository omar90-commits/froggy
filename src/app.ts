import './assets/bootstrap.min.css';
import './assets/sass/main.scss';
import { UiController } from './UiControllerLevels';
import { Levels } from './Levels';
import { Ui } from './ui';

const uiControllerLevel:any = new UiController();
const levels:any = new Levels();
const ui:any = new Ui();

// Interfaz del controlador de niveles

uiControllerLevel.getArrowRight.addEventListener('click', () => uiControllerLevel.nextLevel());
uiControllerLevel.getArrowLeft.addEventListener('click', () => uiControllerLevel.prevLevel());

uiControllerLevel.getLevelsTo.addEventListener('click', () => (
	setTimeout(() => {
	/* El setTimeout es para obtener un array de las etiquetas span con niveles, cuando se
	muestre el popover. */
		uiControllerLevel.setLevelsTags = Array.from(document.querySelectorAll('.grid span'));

		const levelsTo:string = uiControllerLevel.getLevelsTo.textContent;
		const levelArr:any = levelsTo.match(/[1-9][0-9]?/g);
		const level:number = levelArr[0];

		if (level > 1) {
			
			/* Le quita la clase 'active' al nivel 1 que trae por defecto y la agrega 
			al nivel en el que se este. */
			uiControllerLevel.getLevels[0].classList.remove('active');
			uiControllerLevel.getLevels[level - 1]?.classList.add('active');
		}

		uiControllerLevel.getLevels.forEach((levelTag:any) => levelTag.addEventListener('click', () => {

			uiControllerLevel.setLevel = Number(levelTag.textContent);

			uiControllerLevel.selectedLevel(levelTag);
		}));
	}, 0)
));

////

levels.getTextareaTag.addEventListener('keydown', e => setTimeout(() => levels.write(e, uiControllerLevel.getLevel), 0));

levels.getBtnTag.addEventListener('click', () => {

	console.log(ui.getNextLevelState)
	if (!ui.getNextLevelState) return;

	uiControllerLevel.nextLevel(false);
	levels.nextLevel(uiControllerLevel.getLevel);
});