import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { BZip2CompressorInputStream$Data } from '../../../../../../org/apache/commons/compress/compressors/bzip2/BZip2CompressorInputStream$Data.d.ts'
import type { BZip2Constants } from '../../../../../../org/apache/commons/compress/compressors/bzip2/BZip2Constants.d.ts'
import type { CRC } from '../../../../../../org/apache/commons/compress/compressors/bzip2/CRC.d.ts'
import type { BitInputStream } from '../../../../../../org/apache/commons/compress/utils/BitInputStream.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
export class BZip2CompressorInputStream extends CompressorInputStream implements BZip2Constants, InputStreamStatistics {
    static BASEBLOCKSIZE: number;
    static G_SIZE: number;
    static MAX_ALPHA_SIZE: number;
    static MAX_CODE_LEN: number;
    static MAX_SELECTORS: number;
    static NUM_OVERSHOOT_BYTES: number;
    static N_GROUPS: number;
    static N_ITERS: number;
    static RUNA: number;
    static RUNB: number;
    static matches(paramarg0: number[], paramarg1: number): boolean;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    // private bin: BitInputStream;
    // private blockRandomised: boolean;
    // private blockSize100k: number;
    // private computedCombinedCRC: number;
    // private crc: CRC;
    // private currentState: number;
    // private data: BZip2CompressorInputStream$Data;
    // private decompressConcatenated: boolean;
    // private last: number;
    // private nInUse: number;
    // private origPtr: number;
    // private storedBlockCRC: number;
    // private storedCombinedCRC: number;
    // private su_ch2: number;
    // private su_chPrev: number;
    // private su_count: number;
    // private su_i2: number;
    // private su_j2: number;
    // private su_rNToGo: number;
    // private su_rTPos: number;
    // private su_tPos: number;
    // private su_z: string;
    close(): void;
    // private complete(): boolean;
    // private createHuffmanDecodingTables(arg0: number, arg1: number): void;
    // private endBlock(): void;
    // private getAndMoveToFrontDecode(): void;
    // private getAndMoveToFrontDecode0(): number;
    getCompressedCount(): number;
    // private init(arg0: boolean): boolean;
    // private initBlock(): void;
    // private makeMaps(): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private read0(): number;
    // private readNextByte(arg0: BitInputStream): number;
    // private recvDecodingTables(): void;
    // private setupBlock(): number;
    // private setupNoRandPartA(): number;
    // private setupNoRandPartB(): number;
    // private setupNoRandPartC(): number;
    // private setupRandPartA(): number;
    // private setupRandPartB(): number;
    // private setupRandPartC(): number;
}