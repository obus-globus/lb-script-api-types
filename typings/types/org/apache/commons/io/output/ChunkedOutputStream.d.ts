import type { FilterOutputStream } from '../../../../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { ChunkedOutputStream$Builder } from '../../../../../org/apache/commons/io/output/ChunkedOutputStream$Builder.d.ts'
export class ChunkedOutputStream extends FilterOutputStream {
    static builder(): ChunkedOutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    private constructor(arg0: ChunkedOutputStream$Builder)
    // private chunkSize: number;
    getChunkSize(): number;
    write(arg0: number[], arg1: number, arg2: number): void;
}