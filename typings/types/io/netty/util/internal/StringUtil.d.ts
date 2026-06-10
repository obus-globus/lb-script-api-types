import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class StringUtil extends Object {
    static CARRIAGE_RETURN: string;
    static COMMA: string;
    static DOUBLE_QUOTE: string;
    static EMPTY_STRING: string;
    static LINE_FEED: string;
    static NEWLINE: string;
    static SPACE: string;
    static TAB: string;
    static byteToHexString(paramarg0: Appendable | null, paramarg1: number): Appendable | null;
    static byteToHexString(paramarg0: number): string;
    static byteToHexStringPadded(paramarg0: Appendable | null, paramarg1: number): Appendable | null;
    static byteToHexStringPadded(paramarg0: number): string;
    static className(paramarg0: Object): string;
    static commonSuffixOfLength(paramarg0: string, paramarg1: string, paramarg2: number): boolean;
    static decodeHexByte(paramarg0: CharSequence, paramarg1: number): number;
    static decodeHexDump(paramarg0: CharSequence): number[];
    static decodeHexDump(paramarg0: CharSequence, paramarg1: number, paramarg2: number): number[];
    static decodeHexNibble(paramarg0: number): number;
    static decodeHexNibble(paramarg0: string): number;
    static endsWith(paramarg0: CharSequence, paramarg1: string): boolean;
    static escapeCsv(paramarg0: CharSequence): CharSequence;
    static escapeCsv(paramarg0: CharSequence, paramarg1: boolean): CharSequence;
    static indexOfNonWhiteSpace(paramarg0: CharSequence, paramarg1: number): number;
    static indexOfWhiteSpace(paramarg0: CharSequence, paramarg1: number): number;
    static isNullOrEmpty(paramarg0: string): boolean;
    static isSurrogate(paramarg0: string): boolean;
    static join(paramarg0: CharSequence, paramarg1: CharSequence[]): CharSequence;
    static length(paramarg0: string): number;
    static simpleClassName(paramarg0: Class<Object>): string;
    static simpleClassName(paramarg0: Object): string;
    static substringAfter(paramarg0: string, paramarg1: string): string;
    static substringBefore(paramarg0: string, paramarg1: string): string;
    static toHexString(paramarg0: Appendable | null, paramarg1: number[]): Appendable | null;
    static toHexString(paramarg0: Appendable | null, paramarg1: number[], paramarg2: number, paramarg3: number): Appendable | null;
    static toHexString(paramarg0: number[]): string;
    static toHexString(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static toHexStringPadded(paramarg0: Appendable | null, paramarg1: number[]): Appendable | null;
    static toHexStringPadded(paramarg0: Appendable | null, paramarg1: number[], paramarg2: number, paramarg3: number): Appendable | null;
    static toHexStringPadded(paramarg0: number[]): string;
    static toHexStringPadded(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static trimOws(paramarg0: CharSequence): CharSequence;
    static unescapeCsv(paramarg0: CharSequence): CharSequence;
    static unescapeCsvFields(paramarg0: CharSequence): CharSequence[];
    private constructor()
}