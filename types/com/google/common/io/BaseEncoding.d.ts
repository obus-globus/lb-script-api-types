import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class BaseEncoding extends Object {
    static base16(): BaseEncoding;
    static base32(): BaseEncoding;
    static base32Hex(): BaseEncoding;
    static base64(): BaseEncoding;
    static base64Url(): BaseEncoding;
    constructor()
    canDecode(chars: CharSequence): boolean;
    decode(chars: CharSequence): number[];
    decodeChecked(chars: CharSequence): number[];
    decodeTo(target: number[], chars: CharSequence): number;
    decodingSource(encodedSource: CharSource): ByteSource;
    decodingStream(reader: Reader): InputStream;
    encode(bytes: number[]): string;
    encode(bytes: number[], off: number, len: number): string;
    encodeTo(target: Appendable, bytes: number[], off: number, len: number): void;
    encodingSink(encodedSink: CharSink): ByteSink;
    encodingStream(writer: Writer): OutputStream;
    ignoreCase(): BaseEncoding;
    lowerCase(): BaseEncoding;
    maxDecodedSize(chars: number): number;
    maxEncodedSize(bytes: number): number;
    omitPadding(): BaseEncoding;
    trimTrailingPadding(chars: CharSequence): CharSequence;
    upperCase(): BaseEncoding;
    withPadChar(padChar: string): BaseEncoding;
    withSeparator(separator: string, n: number): BaseEncoding;
}