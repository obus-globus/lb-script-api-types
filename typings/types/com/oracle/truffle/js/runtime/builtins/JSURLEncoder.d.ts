import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSURLEncoder extends Object {
    static charForDigit(paramdigit: number, paramradix: number): string;
    constructor(isSpecial: boolean)
    constructor(isSpecial: boolean, charset: Charset)
    // private charset: Charset;
    // private isSpecial: boolean;
    encode(s: TruffleString): TruffleString;
    // private encodeConvert(s: string, iParam: number, cParam: number, buffer: TruffleStringBuilderUTF16, encoder: CharsetEncoder): number;
    // private needsNoEncoding(c: number): boolean;
}