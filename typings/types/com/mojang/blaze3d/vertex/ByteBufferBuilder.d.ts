import type { ByteBufferBuilder$Result } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder$Result.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MojangBufferAccessor } from '../../../../net/irisshaders/iris/vertices/MojangBufferAccessor.d.ts'
export class ByteBufferBuilder extends Object implements AutoCloseable, MojangBufferAccessor {
    static exactlySized(paramcapacity: number): ByteBufferBuilder;
    constructor(initialCapacity: number)
    constructor(initialCapacity: number, maxCapacity: number)
    // private capacity: number;
    // private generation: number;
    // private maxCapacity: number;
    // private nextResultOffset: number;
    readonly pointer: number;
    // private resultCount: number;
    // private writeOffset: number;
    build(): ByteBufferBuilder$Result;
    // private checkOpen(): void;
    clear(): void;
    close(): void;
    discard(): void;
    // private discardResults(): void;
    // private ensureCapacity(requiredCapacity: number): void;
    // private freeResult(): void;
    getPointer(): number;
    // private isValid(generation: number): boolean;
    reserve(size: number): number;
    // private resize(newCapacity: number): void;
}