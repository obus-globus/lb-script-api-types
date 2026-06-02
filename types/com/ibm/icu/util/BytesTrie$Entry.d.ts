import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BytesTrie$Entry extends Object {
    private constructor(arg0: number)
    // private bytes: number[];
    // private length: number;
    value: number;
    // private append(arg0: number): void;
    // private append(arg0: number[], arg1: number, arg2: number): void;
    byteAt(arg0: number): number;
    bytesAsByteBuffer(): ByteBuffer;
    bytesLength(): number;
    copyBytesTo(arg0: number[], arg1: number): void;
    // private ensureCapacity(arg0: number): void;
    // private truncateString(arg0: number): void;
}