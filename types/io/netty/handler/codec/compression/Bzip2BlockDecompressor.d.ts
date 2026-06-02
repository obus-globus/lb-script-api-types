import type { Bzip2BitReader } from '../../../../../io/netty/handler/codec/compression/Bzip2BitReader.d.ts'
import type { Bzip2HuffmanStageDecoder } from '../../../../../io/netty/handler/codec/compression/Bzip2HuffmanStageDecoder.d.ts'
import type { Bzip2MoveToFrontTable } from '../../../../../io/netty/handler/codec/compression/Bzip2MoveToFrontTable.d.ts'
import type { Crc32 } from '../../../../../io/netty/handler/codec/compression/Crc32.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2BlockDecompressor extends Object {
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: Bzip2BitReader)
    // private blockCRC: number;
    // private blockRandomised: boolean;
    // private bwtBlock: number[];
    // private bwtBlockLength: number;
    // private bwtByteCounts: number[];
    // private bwtBytesDecoded: number;
    // private bwtCurrentMergedPointer: number;
    // private bwtMergedPointers: number[];
    // private bwtStartPointer: number;
    // private crc: Crc32;
    // private huffmanEndOfBlockSymbol: number;
    // private huffmanInUse16: number;
    // private huffmanSymbolMap: number[];
    // private mtfValue: number;
    // private randomCount: number;
    // private randomIndex: number;
    // private reader: Bzip2BitReader;
    // private repeatCount: number;
    // private repeatIncrement: number;
    // private rleAccumulator: number;
    // private rleLastDecodedByte: number;
    // private rleRepeat: number;
    // private symbolMTF: Bzip2MoveToFrontTable;
    blockLength(): number;
    checkCRC(): number;
    decodeHuffmanData(arg0: Bzip2HuffmanStageDecoder): boolean;
    // private decodeNextBWTByte(): number;
    // private initialiseInverseBWT(): void;
    read(): number;
}