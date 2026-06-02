import type { ParseException } from '../../../../../../../java/text/ParseException.d.ts'
export class MFParseException extends ParseException {
    constructor(message: string, errorOffset: number)
    readonly message: string | null;
}