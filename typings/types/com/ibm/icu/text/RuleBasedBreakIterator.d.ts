import type { RBBIDataWrapper } from '../../../../com/ibm/icu/impl/RBBIDataWrapper.d.ts'
import type { LanguageBreakEngine } from '../../../../com/ibm/icu/impl/breakiter/LanguageBreakEngine.d.ts'
import type { BreakIterator } from '../../../../com/ibm/icu/text/BreakIterator.d.ts'
import type { RuleBasedBreakIterator$BreakCache } from '../../../../com/ibm/icu/text/RuleBasedBreakIterator$BreakCache.d.ts'
import type { RuleBasedBreakIterator$DictionaryCache } from '../../../../com/ibm/icu/text/RuleBasedBreakIterator$DictionaryCache.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class RuleBasedBreakIterator extends BreakIterator implements Cloneable {
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
    static fDebugEnv: string;
    static compileRules(paramarg0: string, paramarg1: OutputStream): void;
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getBreakInstance(paramarg0: ULocale, paramarg1: number): BreakIterator;
    static getCharacterInstance(): BreakIterator;
    static getCharacterInstance(paramarg0: ULocale): BreakIterator;
    static getCharacterInstance(paramarg0: Locale): BreakIterator;
    static getInstanceFromCompiledRules(paramarg0: InputStream): RuleBasedBreakIterator;
    static getInstanceFromCompiledRules(paramarg0: ByteBuffer): RuleBasedBreakIterator;
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
    private constructor()
    constructor(arg0: string)
    // private fBreakCache: RuleBasedBreakIterator$BreakCache;
    // private fDictionaryCache: RuleBasedBreakIterator$DictionaryCache;
    // private fDictionaryCharCount: number;
    // private fDone: boolean;
    // private fLookAheadMatches: number[];
    // private fPhraseBreaking: boolean;
    // private fPosition: number;
    fRData: RBBIDataWrapper;
    // private fRuleStatusIndex: number;
    // private fText: CharacterIterator;
    clone(): RuleBasedBreakIterator;
    protected clone(): Object;
    current(): number;
    dump(arg0: PrintStream): void;
    equals(arg0: Object | null): boolean;
    first(): number;
    following(arg0: number): number;
    // private getLanguageBreakEngine(arg0: number): LanguageBreakEngine;
    getRuleStatus(): number;
    getRuleStatusVec(arg0: number[]): number;
    getText(): CharacterIterator;
    // private handleNext(): number;
    // private handleSafePrevious(arg0: number): number;
    hashCode(): number;
    isBoundary(arg0: number): boolean;
    last(): number;
    next(): number;
    next(arg0: number): number;
    preceding(arg0: number): number;
    previous(): number;
    setText(arg0: CharacterIterator): void;
    setText(arg0: CharSequence): void;
    setText(arg0: string): void;
    toString(): string;
}