import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class HexFormat extends Object {
    static fromHexDigit(paramarg0: number): number;
    static fromHexDigits(paramarg0: CharSequence): number;
    static fromHexDigits(paramarg0: CharSequence, paramarg1: number, paramarg2: number): number;
    static fromHexDigitsToLong(paramarg0: CharSequence): number;
    static fromHexDigitsToLong(paramarg0: CharSequence, paramarg1: number, paramarg2: number): number;
    static isHexDigit(paramarg0: number): boolean;
    static of(): HexFormat;
    static ofDelimiter(paramarg0: string): HexFormat;
    private constructor(arg0: string, arg1: string, arg2: string, arg3: boolean)
    // private delimiter: string;
    // private prefix: string;
    // private suffix: string;
    // private ucase: boolean;
    delimiter(): string;
    equals(arg0: Object | null): boolean;
    formatHex<A extends Appendable>(arg0: A, arg1: number[]): A;
    formatHex<A extends Appendable>(arg0: A, arg1: number[], arg2: number, arg3: number): A;
    formatHex(arg0: number[]): string;
    formatHex(arg0: number[], arg1: number, arg2: number): string;
    // private formatOptDelimiter(arg0: number[], arg1: number, arg2: number): string;
    hashCode(): number;
    isUpperCase(): boolean;
    parseHex(arg0: string[], arg1: number, arg2: number): number[];
    parseHex(arg0: CharSequence): number[];
    parseHex(arg0: CharSequence, arg1: number, arg2: number): number[];
    prefix(): string;
    suffix(): string;
    toHexDigits<A extends Appendable>(arg0: A, arg1: number): A;
    toHexDigits(arg0: number): string;
    toHexDigits(arg0: string): string;
    toHexDigits(arg0: number, arg1: number): string;
    toHighHexDigit(arg0: number): string;
    toLowHexDigit(arg0: number): string;
    toString(): string;
    withDelimiter(arg0: string): HexFormat;
    withLowerCase(): HexFormat;
    withPrefix(arg0: string): HexFormat;
    withSuffix(arg0: string): HexFormat;
    withUpperCase(): HexFormat;
}