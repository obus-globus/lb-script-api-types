import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamingXXHash32 } from '../../../net/jpountz/xxhash/StreamingXXHash32.d.ts'
import type { StreamingXXHash32$Factory } from '../../../net/jpountz/xxhash/StreamingXXHash32$Factory.d.ts'
export class StreamingXXHash32JNI$Factory extends Object implements StreamingXXHash32$Factory {
    static INSTANCE: StreamingXXHash32$Factory;
    constructor()
    newStreamingHash(arg0: number): StreamingXXHash32;
}