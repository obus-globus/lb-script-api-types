import type { CodePointCharStream$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CodePointBuffer } from '../../../../org/antlr/v4/runtime/CodePointBuffer.d.ts'
import type { CodePointCharStream } from '../../../../org/antlr/v4/runtime/CodePointCharStream.d.ts'
import type { Interval } from '../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
export class CodePointCharStream$CodePoint16BitCharStream extends CodePointCharStream {
    static EOF: number;
    static UNKNOWN_SOURCE_NAME: string;
    static fromBuffer(paramarg0: CodePointBuffer): CodePointCharStream;
    static fromBuffer(paramarg0: CodePointBuffer, paramarg1: string): CodePointCharStream;
    private constructor(arg0: number, arg1: number, arg2: string, arg3: string[], arg4: number)
    constructor(arg0: number, arg1: number, arg2: string, arg3: string[], arg4: number, arg5: CodePointCharStream$1)
    // private charArray: string[];
    LA(arg0: number): number;
    getInternalStorage(): Object;
    getText(arg0: Interval): string;
}