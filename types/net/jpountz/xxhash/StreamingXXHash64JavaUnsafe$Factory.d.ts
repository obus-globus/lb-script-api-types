import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamingXXHash64 } from '../../../net/jpountz/xxhash/StreamingXXHash64.d.ts'
import type { StreamingXXHash64$Factory } from '../../../net/jpountz/xxhash/StreamingXXHash64$Factory.d.ts'
export class StreamingXXHash64JavaUnsafe$Factory extends Object implements StreamingXXHash64$Factory {
    static INSTANCE: StreamingXXHash64$Factory;
    constructor()
    newStreamingHash(arg0: number): StreamingXXHash64;
}