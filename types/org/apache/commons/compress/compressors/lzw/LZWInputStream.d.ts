import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ByteOrder } from '../../../../../../java/nio/ByteOrder.d.ts'
import type { CompressorInputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorInputStream.d.ts'
import type { BitInputStream } from '../../../../../../org/apache/commons/compress/utils/BitInputStream.d.ts'
import type { InputStreamStatistics } from '../../../../../../org/apache/commons/compress/utils/InputStreamStatistics.d.ts'
export abstract class LZWInputStream extends CompressorInputStream implements InputStreamStatistics {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: ByteOrder)
    // private characters: number[];
    // private clearCode: number;
    // private codeSize: number;
    // private in: BitInputStream;
    // private oneByte: number[];
    // private outputStack: number[];
    // private outputStackLocation: number;
    // private prefixes: number[];
    // private previousCode: number;
    // private previousCodeFirstChar: number;
    // private tableSize: number;
    addEntry(arg0: number, arg1: number): number;
    addEntry(arg0: number, arg1: number, arg2: number): number;
    addRepeatOfPreviousCode(): number;
    close(): void;
    decompressNextSymbol(): number;
    expandCodeToOutputStack(arg0: number, arg1: boolean): number;
    getClearCode(): number;
    getCodeSize(): number;
    getCompressedCount(): number;
    getPrefix(arg0: number): number;
    getPrefixesLength(): number;
    getTableSize(): number;
    incrementCodeSize(): void;
    initializeTables(arg0: number): void;
    initializeTables(arg0: number, arg1: number): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private readFromStack(arg0: number[], arg1: number, arg2: number): number;
    readNextCode(): number;
    resetCodeSize(): void;
    resetPreviousCode(): void;
    setClearCode(arg0: number): void;
    setCodeSize(arg0: number): void;
    setPrefix(arg0: number, arg1: number): void;
    setTableSize(arg0: number): void;
}