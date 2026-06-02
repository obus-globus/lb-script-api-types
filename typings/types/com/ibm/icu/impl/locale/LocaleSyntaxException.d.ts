import type { Exception } from '../../../../../java/lang/Exception.d.ts'
export class LocaleSyntaxException extends Exception {
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private _index: number;
    getErrorIndex(): number;
}