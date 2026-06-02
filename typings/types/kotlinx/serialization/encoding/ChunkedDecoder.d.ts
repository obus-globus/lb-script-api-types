import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
export interface ChunkedDecoder extends Object{
    decodeStringChunked(consumeChunk: Function1<string, void>): void;
}