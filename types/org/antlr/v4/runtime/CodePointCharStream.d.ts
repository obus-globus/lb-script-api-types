import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { CodePointBuffer } from '../../../../org/antlr/v4/runtime/CodePointBuffer.d.ts'
export abstract class CodePointCharStream extends Object implements CharStream {
    static EOF: number;
    static UNKNOWN_SOURCE_NAME: string;
    static fromBuffer(paramarg0: CodePointBuffer): CodePointCharStream;
    static fromBuffer(paramarg0: CodePointBuffer, paramarg1: string): CodePointCharStream;
    private constructor(arg0: number, arg1: number, arg2: string)
    // private name: string;
    // private position: number;
    // private size: number;
    consume(): void;
    getInternalStorage(): Object;
    getSourceName(): string;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
    toString(): string;
}