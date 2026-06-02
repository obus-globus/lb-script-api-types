import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ByteSequence extends Object{
    byteAt(index: number): number;
    bytes(): IntStream;
    length(): number;
    subSequence(startIndex: number, endIndex: number): ByteSequence;
    toByteArray(): number[];
}