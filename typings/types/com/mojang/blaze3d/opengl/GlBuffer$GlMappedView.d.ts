import type { GpuBuffer$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer$MappedView.d.ts'
import type { GlBuffer } from '../../../../com/mojang/blaze3d/opengl/GlBuffer.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GlBuffer$GlMappedView extends Object implements GpuBuffer$MappedView {
    constructor(unmap: () => void, buffer: GlBuffer, data: ByteBuffer)
    // private buffer: GlBuffer;
    // private closed: boolean;
    // private data: ByteBuffer;
    // private unmap: () => void;
    close(): void;
    data(): ByteBuffer;
}