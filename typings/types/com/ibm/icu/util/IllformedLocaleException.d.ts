import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class IllformedLocaleException extends RuntimeException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private _errIdx: number;
    getErrorIndex(): number;
}