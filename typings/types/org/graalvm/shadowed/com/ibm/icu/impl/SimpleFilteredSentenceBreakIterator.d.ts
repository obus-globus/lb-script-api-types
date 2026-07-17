import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
import type { CharsTrie$Entry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrie$Entry.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class SimpleFilteredSentenceBreakIterator extends BreakIterator implements Cloneable {
    static DONE: number;
    static KIND_CHARACTER: number;
    static KIND_LINE: number;
    static KIND_SENTENCE: number;
    static KIND_TITLE: number;
    static KIND_WORD: number;
    static WORD_IDEO: number;
    static WORD_IDEO_LIMIT: number;
    static WORD_KANA: number;
    static WORD_KANA_LIMIT: number;
    static WORD_LETTER: number;
    static WORD_LETTER_LIMIT: number;
    static WORD_NONE: number;
    static WORD_NONE_LIMIT: number;
    static WORD_NUMBER: number;
    static WORD_NUMBER_LIMIT: number;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getBreakInstance(paramwhere: ULocale, paramkind: number): BreakIterator;
    static getCharacterInstance(): BreakIterator;
    static getCharacterInstance(paramwhere: Locale): BreakIterator;
    static getCharacterInstance(paramwhere: ULocale): BreakIterator;
    static getLineInstance(): BreakIterator;
    static getLineInstance(paramwhere: Locale): BreakIterator;
    static getLineInstance(paramwhere: ULocale): BreakIterator;
    static getSentenceInstance(): BreakIterator;
    static getSentenceInstance(paramwhere: Locale): BreakIterator;
    static getSentenceInstance(paramwhere: ULocale): BreakIterator;
    static getTitleInstance(): BreakIterator;
    static getTitleInstance(paramwhere: Locale): BreakIterator;
    static getTitleInstance(paramwhere: ULocale): BreakIterator;
    static getWordInstance(): BreakIterator;
    static getWordInstance(paramwhere: Locale): BreakIterator;
    static getWordInstance(paramwhere: ULocale): BreakIterator;
    static registerInstance(paramiter: BreakIterator, paramlocale: Locale, paramkind: number): Object;
    static registerInstance(paramiter: BreakIterator, paramlocale: ULocale, paramkind: number): Object;
    static unregister(paramkey: Object): boolean;
    constructor(adoptBreakIterator: BreakIterator, forwardsPartialTrie: CharsTrie$Entry[], backwardsTrie: CharsTrie$Entry[])
    // private backwardsTrie: CharsTrie$Entry[];
    // private delegate: BreakIterator;
    // private forwardsPartialTrie: CharsTrie$Entry[];
    readonly text: UCharacterIterator;
    // private breakExceptionAt(n: number): boolean;
    clone(): SimpleFilteredSentenceBreakIterator;
    current(): number;
    equals(obj: Object | null): boolean;
    first(): number;
    following(offset: number): number;
    getText(): CharacterIterator;
    hashCode(): number;
    // private internalNext(n: number): number;
    // private internalPrev(n: number): number;
    isBoundary(offset: number): boolean;
    last(): number;
    next(): number;
    next(n: number): number;
    preceding(offset: number): number;
    previous(): number;
    // private resetState(): void;
    setText(newText: CharacterIterator): void;
    setText(newText: CharSequence): void;
    setText(newText: string): void;
}