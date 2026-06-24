import type { StagingBuffer } from '../../../../com/mojang/blaze3d/vertex/StagingBuffer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StagingBuffer$BufferHandle extends Object implements AutoCloseable {
    constructor(null_: StagingBuffer, offset: number, size: number)
    // private closed: boolean;
    // private offset: number;
    // private size: number;
    // private checkValidFor(stagingBuffer: StagingBuffer): void;
    close(): void;
    size(): number;
}