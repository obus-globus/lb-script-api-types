import type { BaseEncoding } from '../../../../com/google/common/io/BaseEncoding.d.ts'
import type { BaseEncoding$Alphabet } from '../../../../com/google/common/io/BaseEncoding$Alphabet.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BaseEncoding$StandardBaseEncoding extends BaseEncoding {
    static base16(): BaseEncoding;
    static base32(): BaseEncoding;
    static base32Hex(): BaseEncoding;
    static base64(): BaseEncoding;
    static base64Url(): BaseEncoding;
    constructor(alphabet: BaseEncoding$Alphabet, paddingChar: string)
    constructor(name: string, alphabetChars: string, paddingChar: string)
    // private alphabet: BaseEncoding$Alphabet;
    // private ignoreCase: BaseEncoding;
    // private lowerCase: BaseEncoding;
    // private paddingChar: string;
    // private upperCase: BaseEncoding;
    canDecode(chars: CharSequence): boolean;
    decodeTo(target: number[], chars: CharSequence): number;
    decodingStream(reader: Reader): InputStream;
    encodeChunkTo(target: Appendable, bytes: number[], off: number, len: number): void;
    encodeTo(target: Appendable, bytes: number[], off: number, len: number): void;
    encodingStream(out: Writer): OutputStream;
    equals(other: Object | null): boolean;
    hashCode(): number;
    ignoreCase(): BaseEncoding;
    lowerCase(): BaseEncoding;
    maxDecodedSize(chars: number): number;
    maxEncodedSize(bytes: number): number;
    newInstance(alphabet: BaseEncoding$Alphabet, paddingChar: string): BaseEncoding;
    omitPadding(): BaseEncoding;
    toString(): string;
    trimTrailingPadding(chars: CharSequence): CharSequence;
    upperCase(): BaseEncoding;
    withPadChar(padChar: string): BaseEncoding;
    withSeparator(separator: string, afterEveryChars: number): BaseEncoding;
}