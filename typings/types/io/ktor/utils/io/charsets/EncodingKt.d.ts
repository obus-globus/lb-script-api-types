import type { CharsetDecoder } from '../../../../../java/nio/charset/CharsetDecoder.d.ts'
import type { CharsetEncoder } from '../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class EncodingKt extends Object {
    static decode(self: CharsetDecoder, input: Source, max: number): string;
    static encode(self: CharsetEncoder, input: CharSequence, fromIndex: number, toIndex: number): Source;
    static encode(self: CharsetEncoder, input: string[], fromIndex: number, toIndex: number, dst: Sink): void;
    static encodeArrayImpl(self: CharsetEncoder, input: string[], fromIndex: number, toIndex: number, dst: Sink): number;
    static encodeToImpl(self: CharsetEncoder, destination: Sink, input: CharSequence, fromIndex: number, toIndex: number): void;
}