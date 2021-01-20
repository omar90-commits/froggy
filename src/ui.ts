export class Ui {

	private pondTag:any = document.querySelector('.pond');
	private mainTag:any = document.querySelector('main');
	private textareaTag:any = document.querySelector('.editor textarea');
	private btnTag:any = document.querySelector('.btn-danger');
	private nextLevelState:boolean = false;

	public get getPondTag():any {

		return this.pondTag;
	}

	public 	get getMainTag():any {

		return this.mainTag;
	}

	public get getTextareaTag():any {

		return this.textareaTag;
	}

	public get getBtnTag():any {

		return this.btnTag;
	}

	public get getNextLevelState():boolean {

		// console.log('this.nextLevelState', this.nextLevelState)
		return this.nextLevelState;
	}

	public set setNextLevelState(state:boolean) {
		// console.log("state", state);

		this.nextLevelState = state;
	}
}