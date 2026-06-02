import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueEventArray extends Object {
    constructor(arg0: number)
    // private capacity: number;
    // private memory: ByteBuffer;
    // private memoryAddress: number;
    // private memoryCleanable: CleanableDirectBuffer;
    // private size: number;
    capacity(): number;
    clear(): void;
    data(arg0: number): number;
    evSet(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    fflags(arg0: number): number;
    filter(arg0: number): number;
    flags(arg0: number): number;
    free(): void;
    // private getKEventOffsetAddress(arg0: number): number;
    // private getLong(arg0: number, arg1: number): number;
    // private getShort(arg0: number, arg1: number): number;
    ident(arg0: number): number;
    memoryAddress(): number;
    realloc(arg0: boolean): void;
    // private reallocIfNeeded(): void;
    size(): number;
    udata(arg0: number): number;
}