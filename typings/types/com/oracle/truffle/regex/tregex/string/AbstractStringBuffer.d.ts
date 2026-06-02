import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AbstractStringBuffer extends Object{
    append(codepoint: number): void;
    appendOR(c1: number, c2: number): void;
    appendXOR(c1: number, c2: number): void;
    clear(): void;
    getEncoding(): Encodings$Encoding;
    materialize(): number[];
}