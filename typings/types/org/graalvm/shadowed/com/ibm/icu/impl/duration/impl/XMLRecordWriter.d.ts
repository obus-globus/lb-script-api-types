import type { Writer } from '../../../../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { RecordWriter } from '../../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/RecordWriter.d.ts'
export class XMLRecordWriter extends Object implements RecordWriter {
    static normalize(paramstr: string): string;
    constructor(w: Writer)
    // private nameStack: string[];
    // private w: Writer;
    bool(name: string, value: boolean): void;
    boolArray(name: string, values: boolean[]): void;
    character(name: string, value: string): void;
    characterArray(name: string, values: string[]): void;
    close(): boolean;
    flush(): void;
    // private internalString(name: string, normalizedValue: string): void;
    // private internalStringArray(name: string, normalizedValues: string[]): void;
    namedIndex(name: string, names: string[], value: number): void;
    namedIndexArray(name: string, names: string[], values: number[]): void;
    // private newline(): void;
    open(title: string): boolean;
    // private pop(): void;
    // private push(name: string): void;
    string(name: string, value: string): void;
    stringArray(name: string, values: string[]): void;
    stringTable(name: string, values: string[][]): void;
    // private writeString(str: string): void;
}