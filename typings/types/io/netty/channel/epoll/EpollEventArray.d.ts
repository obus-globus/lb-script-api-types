import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollEventArray extends Object {
    constructor(arg0: number)
    // private cleanable: CleanableDirectBuffer;
    // private length: number;
    // private memory: ByteBuffer;
    // private memoryAddress: number;
    events(arg0: number): number;
    fd(arg0: number): number;
    free(): void;
    // private getInt(arg0: number, arg1: number): number;
    increase(): void;
    length(): number;
    memoryAddress(): number;
}