import type { UnicodeEscaper } from '../../../../com/google/common/escape/UnicodeEscaper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class PercentEscaper extends UnicodeEscaper {
    constructor(safeChars: string, plusForSpace: boolean)
    // private plusForSpace: boolean;
    // private safeOctets: (Object | null)[];
    escape(cp: number): string[];
    escape(s: string): string;
    nextEscapeIndex(csq: CharSequence, index: number, end: number): number;
}