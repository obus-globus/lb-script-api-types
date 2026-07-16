import type { Reader } from '../../../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { RecordReader } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/RecordReader.d.ts'
export class XMLRecordReader extends Object implements RecordReader {
    constructor(r: Reader)
    // private atTag: boolean;
    // private nameStack: string[];
    // private r: Reader;
    // private tag: string;
    // private advance(): void;
    bool(name: string): boolean;
    boolArray(name: string): boolean[];
    character(name: string): string;
    characterArray(name: string): string[];
    close(): boolean;
    // private getTag(): string;
    // private match(target: string): boolean;
    namedIndex(name: string, names: string[]): number;
    namedIndexArray(name: string, names: string[]): number[];
    open(title: string): boolean;
    readChar(): number;
    // private readData(): string;
    // private readNextTag(): string;
    string(name: string): string;
    stringArray(name: string): string[];
    stringTable(name: string): string[][];
}