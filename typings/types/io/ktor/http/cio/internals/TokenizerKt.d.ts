import type { CharArrayBuilder } from '../../../../../io/ktor/http/cio/internals/CharArrayBuilder.d.ts'
import type { MutableRange } from '../../../../../io/ktor/http/cio/internals/MutableRange.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class TokenizerKt extends Object {
    static findSpaceOrEnd(text: CharSequence, range: MutableRange): number;
    static nextToken(text: CharSequence, range: MutableRange): CharSequence;
    static skipSpaces(text: CharSequence, range: MutableRange): void;
    static skipSpacesAndHorizontalTabs(text: CharArrayBuilder, start: number, end: number): number;
}