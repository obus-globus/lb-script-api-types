import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FramedLZ4CompressorOutputStream$BlockSize } from '../../../../../../org/apache/commons/compress/compressors/lz4/FramedLZ4CompressorOutputStream$BlockSize.d.ts'
import type { Parameters } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters.d.ts'
export class FramedLZ4CompressorOutputStream$Parameters extends Object {
    static DEFAULT: FramedLZ4CompressorOutputStream$Parameters;
    constructor(arg0: FramedLZ4CompressorOutputStream$BlockSize)
    constructor(arg0: FramedLZ4CompressorOutputStream$BlockSize, arg1: boolean, arg2: boolean, arg3: boolean)
    constructor(arg0: FramedLZ4CompressorOutputStream$BlockSize, arg1: boolean, arg2: boolean, arg3: boolean, arg4: Parameters)
    constructor(arg0: FramedLZ4CompressorOutputStream$BlockSize, arg1: Parameters)
    // private blockSize: FramedLZ4CompressorOutputStream$BlockSize;
    // private lz77params: Parameters;
    // private withBlockChecksum: boolean;
    // private withBlockDependency: boolean;
    // private withContentChecksum: boolean;
    toString(): string;
}