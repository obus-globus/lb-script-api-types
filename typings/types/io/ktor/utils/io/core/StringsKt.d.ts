import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class StringsKt extends Object {
    static String(bytes: number[], offset: number, length: number, charset: Charset): string;
    static readBytes(self: Source): number[];
    static readBytes(self: Source, count: number): number[];
    static readText(self: Source, charset: Charset, max: number): string;
    static readTextExact(self: Source, charset: Charset, n: number): string;
    static readTextExactCharacters(self: Source, charactersCount: number, charset: Charset): string;
    static toByteArray(self: string, charset: Charset): number[];
    static writeText(self: Sink, text: string[], fromIndex: number, toIndex: number, charset: Charset): void;
    static writeText(self: Sink, text: CharSequence, fromIndex: number, toIndex: number, charset: Charset): void;
}