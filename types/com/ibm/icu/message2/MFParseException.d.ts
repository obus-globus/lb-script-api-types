import type { ParseException } from '../../../../java/text/ParseException.d.ts'
export class MFParseException extends ParseException {
    constructor(arg0: string, arg1: number)
    readonly message: string | null;
}