import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$WithMask } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
import type { CharArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CharArrayBuffer.d.ts'
import type { AbstractStringBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
export class StringBufferUTF16 extends CharArrayBuffer implements AbstractStringBuffer {
    constructor(capacity: number, encoding: Encoding)
    readonly encoding: Encoding;
    append(codepoint: number): void;
    appendOR(c1: number, c2: number): void;
    appendXOR(c1: number, c2: number): void;
    asTString(): TruffleString;
    asTStringMask(pattern: TruffleString): TruffleString$WithMask;
    getEncoding(): Encoding;
    // private toByteSwappedByteArray(): number[];
}