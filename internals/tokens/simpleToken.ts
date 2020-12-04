import Token from './token';

export default class SimpleToken extends Token {
	private readonly tokenValue: string;

	constructor(tokenValue: string) {
		super();
		this.tokenValue = tokenValue;
	}

	public getRegex(): string {
		switch (this.tokenValue) {
			case '0': return '[0-9]';
			case 'x': return '[a-z가-힣]';
			case 'X': return '[A-Z가-힣]';
			case 's': return '[a-zA-Z가-힣]';
			case 'a': return '[a-zA-Z가-힣0-9]';
			default: return `\\${this.tokenValue}`;
		}
	}
}
