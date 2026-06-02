import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QAInput extends Object {
    constructor(arg0: string, arg1: string)
    // private context: string;
    readonly paragraph: string;
    readonly question: string;
    getParagraph(): string;
    getQuestion(): string;
}