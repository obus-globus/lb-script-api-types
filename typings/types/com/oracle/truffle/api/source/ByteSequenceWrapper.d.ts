import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ByteSequence } from '../../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class ByteSequenceWrapper extends Object implements ByteSequence {
    constructor(delegate: ByteSequence)
    // private delegate: ByteSequence;
    byteAt(index: number): number;
    bytes(): IntStream;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    length(): number;
    subSequence(start: number, end: number): ByteSequence;
    subSequence(startIndex: number, endIndex: number): ByteSequence;
    toByteArray(): number[];
    toString(): string;
}