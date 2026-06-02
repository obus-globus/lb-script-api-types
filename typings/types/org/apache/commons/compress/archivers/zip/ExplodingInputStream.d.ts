import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BinaryTree } from '../../../../../../org/apache/commons/compress/archivers/zip/BinaryTree.d.ts'
import type { BitStream } from '../../../../../../org/apache/commons/compress/archivers/zip/BitStream.d.ts'
import type { CircularBuffer } from '../../../../../../org/apache/commons/compress/archivers/zip/CircularBuffer.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
export class ExplodingInputStream extends InputStream implements InputStreamStatistics {
    static nullInputStream(): InputStream;
    constructor(arg0: number, arg1: number, arg2: InputStream)
    // private bits: BitStream;
    // private buffer: CircularBuffer;
    // private dictionarySize: number;
    // private distanceTree: BinaryTree;
    // private in: InputStream;
    // private lengthTree: BinaryTree;
    // private literalTree: BinaryTree;
    // private minimumMatchLength: number;
    // private numberOfTrees: number;
    // private treeSizes: number;
    readonly uncompressedCount: number;
    close(): void;
    // private fillBuffer(): void;
    getCompressedCount(): number;
    getUncompressedCount(): number;
    // private init(): void;
    read(): number;
}