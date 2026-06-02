import type { CharArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CharArrayBuffer.d.ts'
import type { AbstractStringBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StringBufferUTF16 extends CharArrayBuffer implements AbstractStringBuffer {
    constructor()
    constructor(initialCapacity: number)
    append(codepoint: number): void;
    appendOR(c1: number, c2: number): void;
    appendXOR(c1: number, c2: number): void;
    getEncoding(): Encodings$Encoding;
    materialize(): (Object | null)[];
}