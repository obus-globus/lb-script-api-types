import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ParseError extends Object {
    constructor(position: number, message: () => string)
    readonly message: () => string;
    readonly position: number;
}