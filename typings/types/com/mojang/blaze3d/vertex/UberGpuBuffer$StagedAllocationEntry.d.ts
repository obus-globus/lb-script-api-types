import type { StagingBuffer$BufferHandle } from '../../../../com/mojang/blaze3d/vertex/StagingBuffer$BufferHandle.d.ts'
import type { UberGpuBuffer$UploadCallback } from '../../../../com/mojang/blaze3d/vertex/UberGpuBuffer$UploadCallback.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UberGpuBuffer$StagedAllocationEntry<T extends unknown> extends Record implements AutoCloseable {
    private constructor(buffer: StagingBuffer$BufferHandle, callback: UberGpuBuffer$UploadCallback<T>)
    // private buffer: StagingBuffer$BufferHandle;
    // private callback: UberGpuBuffer$UploadCallback<T>;
    buffer(): StagingBuffer$BufferHandle;
    callback(): UberGpuBuffer$UploadCallback<T>;
    close(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}