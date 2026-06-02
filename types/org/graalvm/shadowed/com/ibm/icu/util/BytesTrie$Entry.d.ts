import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BytesTrie$Entry extends Object {
    private constructor(capacity: number)
    // private bytes: number[];
    // private length: number;
    value: number;
    // private append(b: number): void;
    // private append(b: number[], off: number, len: number): void;
    byteAt(index: number): number;
    bytesAsByteBuffer(): ByteBuffer;
    bytesLength(): number;
    copyBytesTo(dest: number[], destOffset: number): void;
    // private ensureCapacity(len: number): void;
    // private truncateString(newLength: number): void;
}