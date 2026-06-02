import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IndexDecoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexDecoder.d.ts'
export class BlockInfo extends Object {
    constructor(indexOfFirstStream: IndexDecoder)
    blockNumber: number;
    compressedOffset: number;
    // private index: IndexDecoder;
    uncompressedOffset: number;
    uncompressedSize: number;
    unpaddedSize: number;
    getCheckType(): number;
    hasNext(): boolean;
    setNext(): void;
}