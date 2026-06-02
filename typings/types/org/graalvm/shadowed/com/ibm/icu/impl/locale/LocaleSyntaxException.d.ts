import type { Exception } from '../../../../../../../../java/lang/Exception.d.ts'
export class LocaleSyntaxException extends Exception {
    constructor(msg: string)
    constructor(msg: string, errorIndex: number)
    // private _index: number;
    getErrorIndex(): number;
}