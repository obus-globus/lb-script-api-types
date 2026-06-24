import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LZ4HCJavaUnsafeCompressor } from '../../../net/jpountz/lz4/LZ4HCJavaUnsafeCompressor.d.ts'
import type { LZ4Utils$Match } from '../../../net/jpountz/lz4/LZ4Utils$Match.d.ts'
export class LZ4HCJavaUnsafeCompressor$HashTable extends Object {
    constructor(null_: LZ4HCJavaUnsafeCompressor, arg1: number)
    // private base: number;
    // private chainTable: number[];
    // private hashTable: number[];
    // private nextToUpdate: number;
    // private addHash(arg0: ByteBuffer, arg1: number): void;
    // private addHash(arg0: number[], arg1: number): void;
    // private addHash(arg0: number, arg1: number): void;
    // private hashPointer(arg0: ByteBuffer, arg1: number): number;
    // private hashPointer(arg0: number[], arg1: number): number;
    // private hashPointer(arg0: number): number;
    insert(arg0: number, arg1: ByteBuffer): void;
    insert(arg0: number, arg1: number[]): void;
    insertAndFindBestMatch(arg0: ByteBuffer, arg1: number, arg2: number, arg3: LZ4Utils$Match): boolean;
    insertAndFindBestMatch(arg0: number[], arg1: number, arg2: number, arg3: LZ4Utils$Match): boolean;
    insertAndFindWiderMatch(arg0: ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: LZ4Utils$Match): boolean;
    insertAndFindWiderMatch(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: LZ4Utils$Match): boolean;
    // private next(arg0: number): number;
}