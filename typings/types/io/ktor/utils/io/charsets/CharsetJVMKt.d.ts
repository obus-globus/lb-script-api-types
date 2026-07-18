import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Charsets } from '../../../../../kotlin/text/Charsets.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class CharsetJVMKt extends Object {
    static decode(self: CharsetDecoder, input: Source, dst: Appendable, max: number): number;
    static encodeImpl(self: CharsetEncoder, input: CharSequence, fromIndex: number, toIndex: number, dst: Sink): number;
    static encodeToByteArray(self: CharsetEncoder, input: CharSequence, fromIndex: number, toIndex: number): number[];
    static encodeToByteArrayImpl(self: CharsetEncoder, input: CharSequence, fromIndex: number, toIndex: number): number[];
    static forName(self: Charsets, name: string): Charset;
    static getCharset(paramarg0: CharsetDecoder): Charset;
    static getCharset(paramarg0: CharsetEncoder): Charset;
    static getName(paramarg0: Charset): string;
    static isSupported(self: Charsets, name: string): boolean;
}