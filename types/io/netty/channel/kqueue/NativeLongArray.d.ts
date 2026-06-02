import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeLongArray extends Object {
    constructor(arg0: number)
    // private capacity: number;
    // private memory: ByteBuffer;
    // private memoryAddress: number;
    // private memoryCleanable: CleanableDirectBuffer;
    // private size: number;
    add(arg0: number): void;
    clear(): void;
    free(): void;
    isEmpty(): boolean;
    memoryAddress(): number;
    memoryAddressEnd(): number;
    // private memoryOffset(arg0: number): number;
    // private reallocIfNeeded(): void;
    size(): number;
    toString(): string;
}