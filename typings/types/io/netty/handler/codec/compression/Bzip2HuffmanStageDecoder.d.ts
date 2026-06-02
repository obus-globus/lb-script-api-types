import type { Bzip2BitReader } from '../../../../../io/netty/handler/codec/compression/Bzip2BitReader.d.ts'
import type { Bzip2MoveToFrontTable } from '../../../../../io/netty/handler/codec/compression/Bzip2MoveToFrontTable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2HuffmanStageDecoder extends Object {
    constructor(arg0: Bzip2BitReader, arg1: number, arg2: number)
    // private alphabetSize: number;
    // private codeBases: number[][];
    // private codeLimits: number[][];
    // private codeSymbols: number[][];
    // private currentAlpha: number;
    // private currentGroup: number;
    // private currentLength: number;
    // private currentSelector: number;
    // private currentTable: number;
    // private groupIndex: number;
    // private groupPosition: number;
    // private minimumLengths: number[];
    // private modifyLength: boolean;
    // private reader: Bzip2BitReader;
    // private selectors: number[];
    // private tableCodeLengths: number[][];
    // private tableMTF: Bzip2MoveToFrontTable;
    // private totalTables: number;
    createHuffmanDecodingTables(): void;
    nextSymbol(): number;
}