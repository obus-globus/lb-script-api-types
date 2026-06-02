import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class StringUtils extends Object {
    static equals(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static getByteBufferUtf8(paramarg0: string): ByteBuffer;
    static getBytesIso8859_1(paramarg0: string): number[];
    static getBytesUnchecked(paramarg0: string, paramarg1: string): number[];
    static getBytesUsAscii(paramarg0: string): number[];
    static getBytesUtf16(paramarg0: string): number[];
    static getBytesUtf16Be(paramarg0: string): number[];
    static getBytesUtf16Le(paramarg0: string): number[];
    static getBytesUtf8(paramarg0: string): number[];
    static newString(paramarg0: number[], paramarg1: string): string;
    static newStringIso8859_1(paramarg0: number[]): string;
    static newStringUsAscii(paramarg0: number[]): string;
    static newStringUtf16(paramarg0: number[]): string;
    static newStringUtf16Be(paramarg0: number[]): string;
    static newStringUtf16Le(paramarg0: number[]): string;
    static newStringUtf8(paramarg0: number[]): string;
    constructor()
}