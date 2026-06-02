import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSURLDecoder extends Object {
    static decodePercentEncoding(paraminput: string, paramcharset: Charset): string;
    constructor(isSpecial: boolean)
    // private isSpecial: boolean;
    decode(string: TruffleString): TruffleString;
    // private decodeConvert(string: TruffleString, strLen: number, start: number, buffer: TruffleStringBuilderUTF16, decoder: CharsetDecoder): number;
    // private decodeConvertIntl(string: TruffleString, strLen: number, kParam: number, b: number, buffer: TruffleStringBuilderUTF16, decoder: CharsetDecoder): number;
    // private isReserved(c: string): boolean;
}