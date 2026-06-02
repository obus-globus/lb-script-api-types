import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { CodePointBuffer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CodePointCharStream extends Object implements CharStream {
    static fromBuffer(paramarg0: CodePointBuffer, paramarg1: string): CodePointCharStream;
    private constructor(arg0: number, arg1: number, arg2: string)
    // private name: string;
    // private position: number;
    // private size: number;
    consume(): void;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
    toString(): string;
}