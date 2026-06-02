import type { RecordWriter } from '../../../../../../com/ibm/icu/impl/duration/impl/RecordWriter.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class XMLRecordWriter extends Object implements RecordWriter {
    static normalize(paramarg0: string): string;
    constructor(arg0: Writer)
    // private nameStack: string[];
    // private w: Writer;
    bool(arg0: string, arg1: boolean): void;
    boolArray(arg0: string, arg1: (Object | null)[]): void;
    character(arg0: string, arg1: string): void;
    characterArray(arg0: string, arg1: string[]): void;
    close(): boolean;
    flush(): void;
    // private internalString(arg0: string, arg1: string): void;
    // private internalStringArray(arg0: string, arg1: string[]): void;
    namedIndex(arg0: string, arg1: string[], arg2: number): void;
    namedIndexArray(arg0: string, arg1: string[], arg2: number[]): void;
    // private newline(): void;
    open(arg0: string): boolean;
    // private pop(): void;
    // private push(arg0: string): void;
    string(arg0: string, arg1: string): void;
    stringArray(arg0: string, arg1: string[]): void;
    stringTable(arg0: string, arg1: string[][]): void;
    // private writeString(arg0: string): void;
}