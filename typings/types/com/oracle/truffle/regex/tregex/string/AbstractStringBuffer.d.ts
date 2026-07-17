import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$WithMask } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
import type { Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AbstractStringBuffer extends Object{
    append(codepoint: number): void;
    appendOR(c1: number, c2: number): void;
    appendXOR(c1: number, c2: number): void;
    asTString(): TruffleString;
    asTStringMask(pattern: TruffleString): TruffleString$WithMask;
    clear(): void;
    getEncoding(): Encoding;
    length(): number;
}