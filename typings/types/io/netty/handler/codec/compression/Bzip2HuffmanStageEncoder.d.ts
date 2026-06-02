import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Bzip2BitWriter } from '../../../../../io/netty/handler/codec/compression/Bzip2BitWriter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2HuffmanStageEncoder extends Object {
    constructor(arg0: Bzip2BitWriter, arg1: string[], arg2: number, arg3: number, arg4: number[])
    // private huffmanCodeLengths: number[][];
    // private huffmanMergedCodeSymbols: number[][];
    // private mtfAlphabetSize: number;
    // private mtfBlock: string[];
    // private mtfLength: number;
    // private mtfSymbolFrequencies: number[];
    // private selectors: number[];
    // private writer: Bzip2BitWriter;
    // private assignHuffmanCodeSymbols(): void;
    encode(arg0: ByteBuf): void;
    // private generateHuffmanOptimisationSeeds(): void;
    // private optimiseSelectorsAndHuffmanTables(arg0: boolean): void;
    // private writeBlockData(arg0: ByteBuf): void;
    // private writeSelectorsAndHuffmanTables(arg0: ByteBuf): void;
}