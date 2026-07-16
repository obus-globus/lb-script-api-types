import type { Object } from '../../java/lang/Object.d.ts'
export class _UtilKt extends Object {
    static and(self: number, other: number): number;
    static checkBounds(size: number, startIndex: number, endIndex: number): void;
    static checkByteCount(byteCount: number): void;
    static checkOffsetAndCount(size: number, offset: number, byteCount: number): void;
    static getHEX_DIGIT_CHARS(): string[];
    static hexNumberLength(v: number): number;
    static minOf(a: number, b: number): number;
    static reverseBytesCommon(self: number): number;
    static shl(self: number, other: number): number;
    static shr(self: number, other: number): number;
    static toHexString(self: number): string;
    static xor(self: number, other: number): number;
}