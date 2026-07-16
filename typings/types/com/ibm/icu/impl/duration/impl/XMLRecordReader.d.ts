import type { RecordReader } from '../../../../../../com/ibm/icu/impl/duration/impl/RecordReader.d.ts'
import type { Reader } from '../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class XMLRecordReader extends Object implements RecordReader {
    constructor(arg0: Reader)
    // private atTag: boolean;
    // private nameStack: string[];
    // private r: Reader;
    // private tag: string;
    // private advance(): void;
    bool(arg0: string): boolean;
    boolArray(arg0: string): boolean[];
    character(arg0: string): string;
    characterArray(arg0: string): string[];
    close(): boolean;
    // private getTag(): string;
    // private match(arg0: string): boolean;
    namedIndex(arg0: string, arg1: string[]): number;
    namedIndexArray(arg0: string, arg1: string[]): number[];
    open(arg0: string): boolean;
    readChar(): number;
    // private readData(): string;
    // private readNextTag(): string;
    string(arg0: string): string;
    stringArray(arg0: string): string[];
    stringTable(arg0: string): string[][];
}