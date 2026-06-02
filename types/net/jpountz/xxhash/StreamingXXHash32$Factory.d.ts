import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamingXXHash32 } from '../../../net/jpountz/xxhash/StreamingXXHash32.d.ts'
export interface StreamingXXHash32$Factory extends Object{
    newStreamingHash(arg0: number): StreamingXXHash32;
}