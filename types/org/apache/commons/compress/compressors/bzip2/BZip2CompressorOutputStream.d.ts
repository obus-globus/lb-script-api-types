import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { BZip2CompressorOutputStream$Data } from '../../../../../../org/apache/commons/compress/compressors/bzip2/BZip2CompressorOutputStream$Data.d.ts'
import type { BZip2Constants } from '../../../../../../org/apache/commons/compress/compressors/bzip2/BZip2Constants.d.ts'
import type { BlockSort } from '../../../../../../org/apache/commons/compress/compressors/bzip2/BlockSort.d.ts'
import type { CRC } from '../../../../../../org/apache/commons/compress/compressors/bzip2/CRC.d.ts'
export class BZip2CompressorOutputStream extends CompressorOutputStream<OutputStream> implements BZip2Constants {
    static BASEBLOCKSIZE: number;
    static G_SIZE: number;
    static MAX_ALPHA_SIZE: number;
    static MAX_BLOCKSIZE: number;
    static MAX_CODE_LEN: number;
    static MAX_SELECTORS: number;
    static MIN_BLOCKSIZE: number;
    static NUM_OVERSHOOT_BYTES: number;
    static N_GROUPS: number;
    static N_ITERS: number;
    static RUNA: number;
    static RUNB: number;
    static chooseBlockSize(paramarg0: number): number;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number)
    // private allowableBlockSize: number;
    // private blockSize100k: number;
    // private blockSorter: BlockSort;
    // private bsBuff: number;
    // private bsLive: number;
    // private combinedCRC: number;
    // private crc: CRC;
    // private currentChar: number;
    // private data: BZip2CompressorOutputStream$Data;
    // private last: number;
    // private nInUse: number;
    // private nMTF: number;
    // private runLength: number;
    // private blockSort(): void;
    // private bsFinishedWithStream(): void;
    // private bsPutInt(arg0: number): void;
    // private bsPutUByte(arg0: number): void;
    // private bsW(arg0: number, arg1: number): void;
    close(): void;
    // private endBlock(): void;
    // private endCompression(): void;
    finish(): void;
    flush(): void;
    // private generateMTFValues(): void;
    getBlockSize(): number;
    // private init(): void;
    // private initBlock(): void;
    // private moveToFrontCodeAndSend(): void;
    // private sendMTFValues(): void;
    // private sendMTFValues0(arg0: number, arg1: number): void;
    // private sendMTFValues1(arg0: number, arg1: number): number;
    // private sendMTFValues2(arg0: number, arg1: number): void;
    // private sendMTFValues3(arg0: number, arg1: number): void;
    // private sendMTFValues4(): void;
    // private sendMTFValues5(arg0: number, arg1: number): void;
    // private sendMTFValues6(arg0: number, arg1: number): void;
    // private sendMTFValues7(): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private write0(arg0: number): void;
    // private writeRun(): void;
}