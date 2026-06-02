import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Internal extends Object {
    static EMPTY_BYTE_ARRAY: number[];
    static EMPTY_BYTE_BUFFER: ByteBuffer;
    static isValidUtf8(paramarg0: number[]): boolean;
    static toStringUtf8(paramarg0: number[]): string;
}