import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EndianUtils extends Object {
    static getIntBE(paramarg0: number[]): number;
    static getIntBE(paramarg0: number[], paramarg1: number): number;
    static getIntLE(paramarg0: number[]): number;
    static getIntLE(paramarg0: number[], paramarg1: number): number;
    static getLongLE(paramarg0: number[], paramarg1: number): number;
    static getShortBE(paramarg0: number[]): number;
    static getShortBE(paramarg0: number[], paramarg1: number): number;
    static getShortLE(paramarg0: number[]): number;
    static getShortLE(paramarg0: number[], paramarg1: number): number;
    static getUByte(paramarg0: number[], paramarg1: number): number;
    static getUIntBE(paramarg0: number[]): number;
    static getUIntBE(paramarg0: number[], paramarg1: number): number;
    static getUIntLE(paramarg0: number[]): number;
    static getUIntLE(paramarg0: number[], paramarg1: number): number;
    static getUShortBE(paramarg0: number[]): number;
    static getUShortBE(paramarg0: number[], paramarg1: number): number;
    static getUShortLE(paramarg0: number[]): number;
    static getUShortLE(paramarg0: number[], paramarg1: number): number;
    static readIntBE(paramarg0: InputStream): number;
    static readIntLE(paramarg0: InputStream): number;
    static readIntME(paramarg0: InputStream): number;
    static readLongBE(paramarg0: InputStream): number;
    static readLongLE(paramarg0: InputStream): number;
    static readShortBE(paramarg0: InputStream): number;
    static readShortLE(paramarg0: InputStream): number;
    static readUE7(paramarg0: InputStream): number;
    static readUIntBE(paramarg0: InputStream): number;
    static readUIntLE(paramarg0: InputStream): number;
    static readUShortBE(paramarg0: InputStream): number;
    static readUShortLE(paramarg0: InputStream): number;
    static ubyteToInt(paramarg0: number): number;
    constructor()
}