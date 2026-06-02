import type { ByteBuffer } from '../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { CommandList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
export interface StagingBuffer extends Object{
    delete(arg0: CommandList): void;
    enqueueCopy(arg0: CommandList, arg1: ByteBuffer, arg2: GlBuffer, arg3: number): void;
    flip(): void;
    flush(arg0: CommandList): void;
    getUploadSizeLimit(arg0: number): number;
}