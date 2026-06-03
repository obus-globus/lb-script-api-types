import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChunkedDecoder extends Object{
    decodeStringChunked(consumeChunk: (param0: string) => void): void;
}