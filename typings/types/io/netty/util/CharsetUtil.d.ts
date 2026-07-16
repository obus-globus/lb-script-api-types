import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../java/nio/charset/CharsetEncoder.d.ts'
import type { CodingErrorAction } from '../../../java/nio/charset/CodingErrorAction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CharsetUtil extends Object {
    static ISO_8859_1: Charset;
    static US_ASCII: Charset;
    static UTF_16: Charset;
    static UTF_16BE: Charset;
    static UTF_16LE: Charset;
    static UTF_8: Charset;
    static decoder(paramarg0: Charset): CharsetDecoder;
    static decoder(paramarg0: Charset, paramarg1: CodingErrorAction): CharsetDecoder;
    static decoder(paramarg0: Charset, paramarg1: CodingErrorAction, paramarg2: CodingErrorAction): CharsetDecoder;
    static encoder(paramarg0: Charset): CharsetEncoder;
    static encoder(paramarg0: Charset, paramarg1: CodingErrorAction): CharsetEncoder;
    static encoder(paramarg0: Charset, paramarg1: CodingErrorAction, paramarg2: CodingErrorAction): CharsetEncoder;
    static getDecoder(paramarg0: Charset): CharsetDecoder;
    static getEncoder(paramarg0: Charset): CharsetEncoder;
    static values(): Charset[];
    private constructor()
}