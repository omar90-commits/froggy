import { levels, levelsFrog } from './helpers/levelsHelper';
import { justifyContent, alignItems, flexDirection } from './helpers/helper';
import { Ui } from './ui';

export class Levels extends Ui {

	private frogTag:any = Array.from(document.querySelectorAll('.bg-frog'));
	// private nextLevelState:boolean = false;

	public get getTagFrog():any {

		return this.frogTag;
	}

	public set setTagFrog(tag:any) {

		this.frogTag = tag;
	}

	public write(e:any, level:number) {

		const text = e.target.value.toLowerCase().trim();
		this.setTagFrog = Array.from(document.querySelectorAll('.bg-frog'));

		let text1:string, text2:string, justify:string, align:string, direction:string;
		let stateJustify:boolean, stateAlign:boolean;

		switch (level) {
					
			case 1:	

				this.setNextLevelState = justifyContent(text, this.getTagFrog, this.getBtnTag, 'justify-content: flex-end', true, 5, 100, 40, 0, 30,      20, 22, 70, 0, 62);
	
				// flex-start, flex-end, center, space-between, space-around
				// 0, 5      | 1, 6    | 2, 7  |  3, 8        | 4, 9
			break;
			
			case 2:	

				this.setNextLevelState = justifyContent(text, this.getTagFrog, this.getBtnTag, 'justify-content: center', true, 5, 100, 52, 75, 72,      20, 22, 22, 70, 62);
			break;

			case 3:	

				this.setNextLevelState = justifyContent(text, this.getTagFrog, this.getBtnTag, 'justify-content: space-around', true, 5, 100, 68, 80, 72,  20, 22, 21, 33, 25);
			break;

			case 4:	

				this.setNextLevelState = justifyContent(text, this.getTagFrog, this.getBtnTag, 'justify-content: space-between', true, 5, 100, 60, 72, 68,    20, 22, 18, 30, 26);
			break;

			case 5:	

				// flex-end,   center,   baseline,      stretch
				// 1, 6      | 2, 7    |  3, 8        | 4, 9
				this.setNextLevelState = alignItems(text, this.getTagFrog, this.getBtnTag, 'align-items: flex-end', true);
			break;

			case 6:	
	
				text1 = text.split(';')[0];
				text2 = text.split(';')[1];
				justify = (/justify/).test(text1) ? text1 : text2;
				align = (/align/).test(text1) ? text1 : text2;

				stateJustify = justifyContent(justify?.trim(), this.getTagFrog, this.getBtnTag, 'justify-content: center', false, 5, 100, 42, 5, 35);

				stateAlign = alignItems(align?.trim(), this.getTagFrog, this.getBtnTag, 'align-items: center', false);

				if (stateJustify && stateAlign) {
					
					setTimeout(() => this.getBtnTag.classList.add('btn-animate'), 300);
					this.setNextLevelState = true;
				}
			break;

			case 7:	
	
				text1 = text.split(';')[0];
				text2 = text.split(';')[1];
				justify = (/justify/).test(text1) ? text1 : text2;
				align = (/align/).test(text1) ? text1 : text2;

				stateJustify = justifyContent(justify?.trim(), this.getTagFrog, this.getBtnTag, 'justify-content: space-around', false, 5, 100, 65, 81, 77,    20, 22, 23, 39, 35);

				stateAlign = alignItems(align?.trim(), this.getTagFrog, this.getBtnTag, 'align-items: flex-end', false);

				if (stateJustify && stateAlign) {
					
					setTimeout(() => this.getBtnTag.classList.add('btn-animate'), 300);
					this.setNextLevelState = true;
				}
			break;

			case 8:

				// row,    row-reverse,   column,      column-reverse
				// 0, 4   | 1, 5         |  2, 6      | 3, 7

				this.setNextLevelState = flexDirection(text, this.getTagFrog, this.getBtnTag, 'flex-direction: row-reverse', true, 37, 37, 42, 50,   18, 21, 12, 15);
			break;

			case 9:

				this.setNextLevelState = flexDirection(text, this.getTagFrog, this.getBtnTag, 'flex-direction: column', true, 45, 42, 46, 35,   20, 18, 14, 15);
			break;

			case 10:	
	
				text1 = text.split(';')[0];
				text2 = text.split(';')[1];
				justify = (/justify/).test(text1) ? text1 : text2;
				direction = (/direction/).test(text1) ? text1 : text2;

				stateJustify = justifyContent(justify?.trim(), this.getTagFrog, this.getBtnTag, 'justify-content: space-around', false, 5, 105, 71, 77, 75,    22, 20, 22, 35, 26);

				stateAlign = flexDirection(text, this.getTagFrog, this.getBtnTag, 'flex-direction: row-reverse', false, 49, 42, 46, 55,   22, 18, 14, 15);

				// if (stateJustify && stateAlign) {
					
				// 	setTimeout(() => this.getBtnTag.classList.add('btn-animate'), 300);
				// 	this.setNextLevelState = true;
				// }
			break;
		}
	}

	public nextLevel(level:number) {

		setTimeout(() => this.getTagFrog.forEach(frog => frog.classList.add('frog-animate')), 500);

		if (level === 6) {

			this.getTextareaTag.classList.remove('textarea-line');
			this.getTextareaTag.classList.add('textarea-double-line');
		}

		setTimeout(() => {

			this.getTextareaTag.value = '';
			this.getBtnTag.classList.remove('btn-animate');
			this.setNextLevelState = false;
			this.getTagFrog.forEach(frog => frog.classList.add('animate-bg_frog'));
			this.getMainTag.innerHTML = levels[level - 1];
			this.getPondTag.innerHTML = levelsFrog[level - 1];

		}, 1700);
	}
}