import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlBufferSegment } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/GlBufferSegment.d.ts'
import type { PendingBufferCopyCommand } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/PendingBufferCopyCommand.d.ts'
import type { PendingUpload } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/PendingUpload.d.ts'
import type { StagingBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/StagingBuffer.d.ts'
import type { GlBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlMutableBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlMutableBuffer.d.ts'
import type { CommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
export class GlBufferArena extends Object {
    static EXPECTED_SIZE_TARGET_FACTOR: number;
    static FEW_SEGMENTS_GROWTH_FACTOR: number;
    static MAX_BUFFER_REUSE_SIZE_FACTOR: number;
    static MIN_SEGMENTS_FOR_AVG: number;
    constructor(arg0: CommandList, arg1: number, arg2: number, arg3: StagingBuffer)
    // private arenaBuffer: GlMutableBuffer;
    // private capacity: number;
    // private head: GlBufferSegment;
    // private segmentCount: number;
    // private stagingBuffer: StagingBuffer;
    // private stride: number;
    // private used: number;
    // private alloc(arg0: number): GlBufferSegment;
    // private buildTransferList(arg0: GlBufferSegment[], arg1: number): PendingBufferCopyCommand[];
    // private checkAssertions(): void;
    // private checkAssertions0(): void;
    delete(arg0: CommandList): void;
    // private estimateNewCapacity(arg0: number, arg1: PendingUpload[]): number;
    // private findFree(arg0: number): GlBufferSegment;
    free(arg0: GlBufferSegment): void;
    getBufferObject(): GlBuffer;
    getDeviceAllocatedMemory(): number;
    getDeviceUsedMemory(): number;
    // private getRequiredTotalSize(arg0: PendingUpload[]): number;
    // private getUsedSegments(): GlBufferSegment[];
    isEmpty(): boolean;
    // private resize(arg0: CommandList, arg1: number): void;
    // private transferSegments(arg0: CommandList, arg1: E[], arg2: number): void;
    // private tryUpload(arg0: CommandList, arg1: PendingUpload): boolean;
    // private tryUploads(arg0: CommandList, arg1: PendingUpload[]): void;
    // private updateUsed(arg0: number): void;
    upload(arg0: CommandList, arg1: Stream<PendingUpload>, arg2: number): boolean;
}