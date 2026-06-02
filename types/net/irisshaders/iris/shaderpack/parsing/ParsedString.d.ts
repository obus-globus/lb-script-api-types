import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ParsedString extends Object {
    constructor(arg0: string)
    // private text: string;
    currentlyContains(arg0: string): boolean;
    isEnd(): boolean;
    // private takeCharacters(arg0: number): string;
    takeComments(): boolean;
    takeLiteral(arg0: string): boolean;
    takeNumber(): string;
    takeRest(): string;
    takeSomeWhitespace(): boolean;
    takeWord(): string;
    takeWordOrNumber(): string;
}