import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { CodePointBuffer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointBuffer.d.ts'
import type { Interval } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Interval.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CodePointCharStream extends Object implements CharStream {
    static fromBuffer(paramarg0: CodePointBuffer, paramarg1: string): CodePointCharStream;
    constructor(arg0: number, arg1: number, arg2: string, arg3: any)
    // private name: string;
    // private position: number;
    // private size: number;
    LA(arg0: number): number;
    consume(): void;
    getText(arg0: Interval): string;
    index(): number;
    mark(): number;
    release(arg0: number): void;
    seek(arg0: number): void;
    size(): number;
    toString(): string;
}