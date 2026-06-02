import type { Object } from '../../../java/lang/Object.d.ts'
export class TokenType extends Object {
    static getTokenName(paramarg0: number): string;
    static getTokenText(paramarg0: number): string;
    static getTokenType(paramarg0: number): TokenType;
    constructor(arg0: string, arg1: string)
    readonly name: string;
    readonly text: string;
    getName(): string;
    getText(): string;
}