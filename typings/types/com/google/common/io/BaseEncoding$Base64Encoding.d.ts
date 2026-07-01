import type { BaseEncoding } from '../../../../com/google/common/io/BaseEncoding.d.ts'
import type { BaseEncoding$Alphabet } from '../../../../com/google/common/io/BaseEncoding$Alphabet.d.ts'
import type { BaseEncoding$StandardBaseEncoding } from '../../../../com/google/common/io/BaseEncoding$StandardBaseEncoding.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BaseEncoding$Base64Encoding extends BaseEncoding$StandardBaseEncoding {
    static base16(): BaseEncoding;
    static base32(): BaseEncoding;
    static base32Hex(): BaseEncoding;
    static base64(): BaseEncoding;
    static base64Url(): BaseEncoding;
    constructor(name: string, alphabetChars: string, paddingChar: string)
    decodeTo(target: number[], chars: CharSequence): number;
    encodeTo(target: Appendable, bytes: number[], off: number, len: number): void;
    newInstance(alphabet: BaseEncoding$Alphabet, paddingChar: string): BaseEncoding;
}