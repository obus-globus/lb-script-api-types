import type { CodePointBuffer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointBuffer.d.ts'
import type { CodePointCharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointCharStream.d.ts'
import type { Interval } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Interval.d.ts'
export class CodePointCharStream$CodePoint8BitCharStream extends CodePointCharStream {
    static fromBuffer(paramarg0: CodePointBuffer, paramarg1: string): CodePointCharStream;
    constructor(arg0: number, arg1: number, arg2: string, arg3: number[], arg4: number, arg5: any)
    // private byteArray: number[];
    LA(arg0: number): number;
    getText(arg0: Interval): string;
}