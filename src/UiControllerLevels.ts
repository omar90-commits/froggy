import { arrowActive, levelActive } from './helpers/helper';
import { levels, levelsFrog } from './helpers/levelsHelper';
import { Ui } from './ui';

export class UiController extends Ui {
	
	private controllerLevel:any = document.querySelector('.level-counter');
	private levels:any;
	private level:number = 1;

	public get getArrowLeft():any {

		const arrowLeft:any = Array.from(this.controllerLevel.children)[0];

		return arrowLeft;
	}

	public get getArrowRight():any {

		const arrowRight:any = Array.from(this.controllerLevel.children)[2];

		return arrowRight;
	}

	public get getLevelsTo():any {

		const levelsTag:any = Array.from(this.controllerLevel.children)[1];

		return levelsTag;
	}

	public get getLevel():number {

		return this.level;
	}

	public get getLevels():any {

		return this.levels;
	}

	public set setLevel(level:number) {

		this.level = level;
	}

	public set setLevelsTags(levelsTags:any[]) {

		this.levels = levelsTags;
	}

	public nextLevel(next:boolean=true):void {

		/* Habilita la flecha izquierda cuando el nivel es mayor que 1 y desabilitita 
		la flecha derecha cuando el nivel es igual a 24. */
		arrowActive(this.level, this.getArrowRight, this.getArrowLeft, 'arrow-right', 'arrow-right-emptyHover', 'arrow-left-emptyHover', 'arrow-left', 23, 1);

		if (this.level >= 24) return;

		this.level += 1;

		levelActive(this.getLevels, this.level, this.getLevelsTo, 2, 1);

		this.getTextareaTag.value = '';
		this.getBtnTag.classList.remove('btn-animate');

		// Pinta los textos del nivel por pantalla
		if (this.level === 6 || this.level === 7 || this.level === 10) {

			this.getTextareaTag.classList.remove('textarea-line');
			this.getTextareaTag.classList.add('textarea-double-line');
		
		} else {

			this.getTextareaTag.classList.remove('textarea-double-line');
			this.getTextareaTag.classList.add('textarea-line');
		}

		if (next) {

			this.getMainTag.innerHTML = levels[this.level - 1];
			this.getPondTag.innerHTML = levelsFrog[this.level - 1];
		}
	}

	public prevLevel():void {

		/* Habilita la flecha derecha cuando el nivel es menor que 24 y desabilitita 
		la flecha izquierda cuando el nivel es igual a 1. */
		arrowActive(this.level, this.getArrowLeft, this.getArrowRight, 'arrow-left', 'arrow-left-emptyHover', 'arrow-right-emptyHover', 'arrow-right', 2, 24);
		
		if (this.level <= 1) return;

		this.level -= 1;

		levelActive(this.getLevels, this.level, this.getLevelsTo, 0, 1);

		this.getTextareaTag.value = '';
		this.getBtnTag.classList.remove('btn-animate');

		if (this.level === 6 || this.level === 7 || this.level === 10) {

			this.getTextareaTag.classList.remove('textarea-line');
			this.getTextareaTag.classList.add('textarea-double-line');
		
		} else {

			this.getTextareaTag.classList.remove('textarea-double-line');
			this.getTextareaTag.classList.add('textarea-line');
		}

		// Pinta los textos del nivel por pantalla
		this.getMainTag.innerHTML = levels[this.level - 1];
		this.getPondTag.innerHTML = levelsFrog[this.level - 1];
	}

	public selectedLevel(levelTag:any):void {

		const findIndexActive:number = this.getLevels.findIndex((level:any) => level.classList.contains('active'));

		levelActive(this.getLevels, this.level, this.getLevelsTo, findIndexActive, 1, true);

		if (this.getLevel > 1) {

			// Habilita la flecha izquierda, si esta desabilitada.
			arrowActive(this.level - 1, null, this.getArrowLeft, 'null', 'null', 'arrow-left-emptyHover', 'arrow-left', 0, this.level - 1);
			
			// Si el nivel es igual a 24 inabilita la flecha derecha de lo controrario la habilita.
			this.getLevel === 24 ? 
			arrowActive(this.level - 1, this.getArrowRight, null, 'arrow-right', 'arrow-right-emptyHover', 'null', 'null', this.level - 1, 0)
			: arrowActive(this.level - 1, this.getArrowRight, null, 'arrow-right-emptyHover', 'arrow-right', 'null', 'null', this.level - 1, 0);

		} else if (this.getLevel === 1) {
			
			// Habilita la flecha derecha, si esta desabilitada.
			arrowActive(this.level - 1, this.getArrowRight, null, 'arrow-right-emptyHover', 'arrow-right', 'null', 'null', this.level - 1, 0);

			// Inabilita la flecha izquierda.
			arrowActive(this.level - 1, null, this.getArrowLeft, 'null', 'null', 'arrow-left', 'arrow-left-emptyHover', -1, this.level - 1);
		}
	}
}