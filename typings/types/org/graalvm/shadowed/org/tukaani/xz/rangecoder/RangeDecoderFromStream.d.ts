import type { DataInputStream } from '../../../../../../../java/io/DataInputStream.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { RangeDecoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeDecoder.d.ts'
export class RangeDecoderFromStream extends RangeDecoder {
    static initProbs(paramprobs: number[]): void;
    constructor(in_: InputStream)
    // private inData: DataInputStream;
    isFinished(): boolean;
    normalize(): void;
}