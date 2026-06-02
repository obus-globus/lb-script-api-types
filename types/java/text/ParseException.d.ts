import type { Exception } from '../../java/lang/Exception.d.ts'
export class ParseException extends Exception {
    constructor(arg0: string, arg1: number)
    readonly errorOffset: number;
    getErrorOffset(): number;
}