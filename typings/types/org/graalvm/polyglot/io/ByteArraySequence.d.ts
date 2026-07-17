import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ByteSequence } from '../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class ByteArraySequence extends Object implements ByteSequence {
    constructor(buffer: number[], start: number, length: number)
    // private buffer: number[];
    // private hash: number;
    // private length: number;
    // private start: number;
    byteAt(index: number): number;
    bytes(): IntStream;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    length(): number;
    subSequence(startIndex: number, endIndex: number): ByteSequence;
    toByteArray(): number[];
}