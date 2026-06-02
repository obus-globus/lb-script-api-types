import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamingXXHash64 } from '../../../net/jpountz/xxhash/StreamingXXHash64.d.ts'
export interface StreamingXXHash64$Factory extends Object{
    newStreamingHash(arg0: number): StreamingXXHash64;
}