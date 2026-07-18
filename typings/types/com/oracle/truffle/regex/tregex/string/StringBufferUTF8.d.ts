import type { ByteArrayBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/ByteArrayBuffer.d.ts'
import type { AbstractStringBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StringBufferUTF8 extends ByteArrayBuffer implements AbstractStringBuffer {
    constructor()
    constructor(capacity: number)
    append(codepoint: number): void;
    appendOR(cp1: number, cp2: number): void;
    appendXOR(cp1: number, cp2: number): void;
    getEncoding(): Encodings$Encoding;
    materialize(): (Object | null)[];
}