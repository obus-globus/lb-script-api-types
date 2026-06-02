import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ByteArrayView extends Object {
    static ALIGN_INT: number;
    static ALIGN_LONG: number;
    static ALIGN_SHORT: number;
    static getIntBE(parambuf: number[], paramindex: number): number;
    static getIntLE(parambuf: number[], paramindex: number): number;
    static getLongBE(parambuf: number[], paramindex: number): number;
    static getLongLE(parambuf: number[], paramindex: number): number;
    static getShortBE(parambuf: number[], paramindex: number): number;
    static getShortLE(parambuf: number[], paramindex: number): number;
    static setIntBE(parambuf: number[], paramindex: number, paramvalue: number): void;
    static setIntLE(parambuf: number[], paramindex: number, paramvalue: number): void;
    static setLongBE(parambuf: number[], paramindex: number, paramvalue: number): void;
    static setLongLE(parambuf: number[], paramindex: number, paramvalue: number): void;
    static setShortBE(parambuf: number[], paramindex: number, paramvalue: number): void;
    static setShortLE(parambuf: number[], paramindex: number, paramvalue: number): void;
    private constructor()
}