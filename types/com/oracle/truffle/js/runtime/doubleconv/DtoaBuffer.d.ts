import type { DtoaMode } from '../../../../../../com/oracle/truffle/js/runtime/doubleconv/DtoaMode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DtoaBuffer extends Object {
    static kFastDtoaMaximalLength: number;
    constructor(capacity: number)
    // private chars: number[];
    decimalPoint: number;
    // private isNegative: boolean;
    length: number;
    append(c: number): void;
    // private calculateExponentialFormatLength(minus: boolean): number;
    // private calculateFixedFormatLength(digitsAfterPoint: number, minus: boolean): number;
    format(mode: DtoaMode, digitsAfterPoint: number): string;
    getDecimalPoint(): number;
    getLength(): number;
    getRawDigits(): string;
    reset(): void;
    toExponentialFormat(minus: boolean): string;
    // private toFixedFormat(digitsAfterPoint: number, minus: boolean): string;
    toString(): string;
}