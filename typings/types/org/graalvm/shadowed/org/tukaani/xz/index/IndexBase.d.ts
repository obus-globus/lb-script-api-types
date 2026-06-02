import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { XZIOException } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/XZIOException.d.ts'
export abstract class IndexBase extends Object {
    constructor(invalidIndexException: XZIOException)
    // private blocksSum: number;
    // private indexListSize: number;
    // private invalidIndexException: XZIOException;
    // private recordCount: number;
    // private uncompressedSum: number;
    add(unpaddedSize: number, uncompressedSize: number): void;
    getIndexPaddingSize(): number;
    getIndexSize(): number;
    getStreamSize(): number;
    // private getUnpaddedIndexSize(): number;
}