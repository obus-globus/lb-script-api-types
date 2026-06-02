import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { CharsTrie$Entry } from '../../../../com/ibm/icu/util/CharsTrie$Entry.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleFilteredSentenceBreakIterator extends BreakIterator {
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
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getBreakInstance(paramarg0: ULocale, paramarg1: number): BreakIterator;
    static getCharacterInstance(): BreakIterator;
    static getCharacterInstance(paramarg0: ULocale): BreakIterator;
    static getCharacterInstance(paramarg0: Locale): BreakIterator;
    static getLineInstance(): BreakIterator;
    static getLineInstance(paramarg0: ULocale): BreakIterator;
    static getLineInstance(paramarg0: Locale): BreakIterator;
    static getSentenceInstance(): BreakIterator;
    static getSentenceInstance(paramarg0: ULocale): BreakIterator;
    static getSentenceInstance(paramarg0: Locale): BreakIterator;
    static getTitleInstance(): BreakIterator;
    static getTitleInstance(paramarg0: ULocale): BreakIterator;
    static getTitleInstance(paramarg0: Locale): BreakIterator;
    static getWordInstance(): BreakIterator;
    static getWordInstance(paramarg0: ULocale): BreakIterator;
    static getWordInstance(paramarg0: Locale): BreakIterator;
    static registerInstance(paramarg0: BreakIterator, paramarg1: ULocale, paramarg2: number): Object;
    static registerInstance(paramarg0: BreakIterator, paramarg1: Locale, paramarg2: number): Object;
    static unregister(paramarg0: Object): boolean;
    constructor(arg0: BreakIterator, arg1: CharsTrie$Entry[], arg2: CharsTrie$Entry[])
    // private backwardsTrie: CharsTrie$Entry[];
    // private delegate: BreakIterator;
    // private forwardsPartialTrie: CharsTrie$Entry[];
    readonly text: UCharacterIterator;
    // private breakExceptionAt(arg0: number): boolean;
    clone(): Object;
    current(): number;
    equals(arg0: Object | null): boolean;
    first(): number;
    following(arg0: number): number;
    getText(): CharacterIterator;
    hashCode(): number;
    // private internalNext(arg0: number): number;
    // private internalPrev(arg0: number): number;
    isBoundary(arg0: number): boolean;
    last(): number;
    next(): number;
    next(arg0: number): number;
    preceding(arg0: number): number;
    previous(): number;
    // private resetState(): void;
    setText(arg0: CharacterIterator): void;
}