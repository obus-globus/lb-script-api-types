import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
export class IllformedLocaleException extends RuntimeException {
    constructor()
    constructor(message: string)
    constructor(message: string, errorIndex: number)
    // private _errIdx: number;
    getErrorIndex(): number;
}