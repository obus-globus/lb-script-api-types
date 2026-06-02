import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Charsetfunctions extends Object {
    static asciiBytes(paramarg0: string): number[];
    static isValidUTF8(paramarg0: ByteBuffer): boolean;
    static isValidUTF8(paramarg0: ByteBuffer, paramarg1: number): boolean;
    static stringAscii(paramarg0: number[]): string;
    static stringAscii(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static stringUtf8(paramarg0: number[]): string;
    static stringUtf8(paramarg0: ByteBuffer): string;
    static utf8Bytes(paramarg0: string): number[];
    private constructor()
}