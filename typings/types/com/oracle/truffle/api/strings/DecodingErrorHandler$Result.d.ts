import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DecodingErrorHandler$Result extends Record {
    constructor(codepoint: number, byteLength: number)
    // private byteLength: number;
    // private codepoint: number;
    byteLength(): number;
    codepoint(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}