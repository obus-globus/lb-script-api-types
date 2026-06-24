import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlBufferSegment } from '../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/GlBufferSegment.d.ts'
import type { NativeBuffer } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export class PendingUpload extends Object {
    constructor(arg0: NativeBuffer)
    // private data: NativeBuffer;
    readonly result: GlBufferSegment;
    getDataBuffer(): NativeBuffer;
    getLength(): number;
    getResult(): GlBufferSegment;
    setResult(arg0: GlBufferSegment): void;
}