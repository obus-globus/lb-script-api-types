import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$WithMask } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
import type { ByteArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/ByteArrayBuffer.d.ts'
import type { AbstractStringBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
export class StringBufferUTF8 extends ByteArrayBuffer implements AbstractStringBuffer {
    constructor(capacity: number)
    append(codepoint: number): void;
    appendOR(cp1: number, cp2: number): void;
    appendXOR(cp1: number, cp2: number): void;
    asTString(): TruffleString;
    asTStringMask(pattern: TruffleString): TruffleString$WithMask;
    getEncoding(): Encoding;
}