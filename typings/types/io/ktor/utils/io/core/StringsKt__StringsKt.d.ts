import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Sink } from '../../../../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../../../../kotlinx/io/Source.d.ts'
export class StringsKt__StringsKt extends Object {
    static String(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: Charset): string;
    static readBytes(paramarg0: Source): number[];
    static readBytes(paramarg0: Source, paramarg1: number): number[];
    static readTextExact(paramarg0: Source, paramarg1: Charset, paramarg2: number): string;
    static readTextExactCharacters(paramarg0: Source, paramarg1: number, paramarg2: Charset): string;
    static toByteArray(paramarg0: string, paramarg1: Charset): number[];
    static writeText(paramarg0: Sink, paramarg1: string[], paramarg2: number, paramarg3: number, paramarg4: Charset): void;
    static writeText(paramarg0: Sink, paramarg1: CharSequence, paramarg2: number, paramarg3: number, paramarg4: Charset): void;
}