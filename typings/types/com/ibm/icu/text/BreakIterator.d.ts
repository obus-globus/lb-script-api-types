import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export abstract class BreakIterator extends Object implements Cloneable {
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
    constructor()
    // private actualLocale: ULocale;
    // private validLocale: ULocale;
    clone(): BreakIterator;
    current(): number;
    first(): number;
    following(arg0: number): number;
    getLocale(arg0: ULocale$Type): ULocale;
    getRuleStatus(): number;
    getRuleStatusVec(arg0: number[]): number;
    getText(): CharacterIterator;
    isBoundary(arg0: number): boolean;
    last(): number;
    next(): number;
    next(arg0: number): number;
    preceding(arg0: number): number;
    previous(): number;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setText(arg0: CharacterIterator): void;
    setText(arg0: CharSequence): void;
    setText(arg0: string): void;
}