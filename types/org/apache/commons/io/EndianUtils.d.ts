import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EndianUtils extends Object {
    static readSwappedDouble(paramarg0: number[], paramarg1: number): number;
    static readSwappedDouble(paramarg0: InputStream): number;
    static readSwappedFloat(paramarg0: number[], paramarg1: number): number;
    static readSwappedFloat(paramarg0: InputStream): number;
    static readSwappedInteger(paramarg0: number[], paramarg1: number): number;
    static readSwappedInteger(paramarg0: InputStream): number;
    static readSwappedLong(paramarg0: number[], paramarg1: number): number;
    static readSwappedLong(paramarg0: InputStream): number;
    static readSwappedShort(paramarg0: number[], paramarg1: number): number;
    static readSwappedShort(paramarg0: InputStream): number;
    static readSwappedUnsignedInteger(paramarg0: number[], paramarg1: number): number;
    static readSwappedUnsignedInteger(paramarg0: InputStream): number;
    static readSwappedUnsignedShort(paramarg0: number[], paramarg1: number): number;
    static readSwappedUnsignedShort(paramarg0: InputStream): number;
    static swapDouble(paramarg0: number): number;
    static swapFloat(paramarg0: number): number;
    static swapInteger(paramarg0: number): number;
    static swapLong(paramarg0: number): number;
    static swapShort(paramarg0: number): number;
    static writeSwappedDouble(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeSwappedDouble(paramarg0: OutputStream, paramarg1: number): void;
    static writeSwappedFloat(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeSwappedFloat(paramarg0: OutputStream, paramarg1: number): void;
    static writeSwappedInteger(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeSwappedInteger(paramarg0: OutputStream, paramarg1: number): void;
    static writeSwappedLong(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeSwappedLong(paramarg0: OutputStream, paramarg1: number): void;
    static writeSwappedShort(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeSwappedShort(paramarg0: OutputStream, paramarg1: number): void;
    constructor()
}