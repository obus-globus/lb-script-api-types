import type { ByteBufferBuilder } from '../../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteBufferBuilderPool$Entry extends Object {
    constructor(arg0: ByteBufferBuilder)
    // private allocationStackTrace: StackTraceElement[];
    // private bufferBuilder: ByteBufferBuilder;
    // private inUseOverMultipleFrames: boolean;
    // private lastAccessTime: number;
    onBorrow(): void;
    onReturn(): void;
    shouldBeClosed(): boolean;
}