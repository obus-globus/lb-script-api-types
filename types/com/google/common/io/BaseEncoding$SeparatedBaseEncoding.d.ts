import type { BaseEncoding } from '../../../../com/google/common/io/BaseEncoding.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BaseEncoding$SeparatedBaseEncoding extends BaseEncoding {
    static base16(): BaseEncoding;
    static base32(): BaseEncoding;
    static base32Hex(): BaseEncoding;
    static base64(): BaseEncoding;
    static base64Url(): BaseEncoding;
    constructor(delegate: BaseEncoding, separator: string, afterEveryChars: number)
    // private afterEveryChars: number;
    // private delegate: BaseEncoding;
    // private separator: string;
    canDecode(chars: CharSequence): boolean;
    decodeTo(target: number[], chars: CharSequence): number;
    decodingStream(reader: Reader): InputStream;
    encodeTo(target: Appendable, bytes: number[], off: number, len: number): void;
    encodingStream(output: Writer): OutputStream;
    ignoreCase(): BaseEncoding;
    lowerCase(): BaseEncoding;
    maxDecodedSize(chars: number): number;
    maxEncodedSize(bytes: number): number;
    omitPadding(): BaseEncoding;
    toString(): string;
    trimTrailingPadding(chars: CharSequence): CharSequence;
    upperCase(): BaseEncoding;
    withPadChar(padChar: string): BaseEncoding;
    withSeparator(separator: string, afterEveryChars: number): BaseEncoding;
}