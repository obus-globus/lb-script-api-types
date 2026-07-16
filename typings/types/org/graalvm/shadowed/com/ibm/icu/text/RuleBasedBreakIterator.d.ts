import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { PrintStream } from '../../../../../../../java/io/PrintStream.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { RBBIDataWrapper } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/RBBIDataWrapper.d.ts'
import type { LanguageBreakEngine } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/breakiter/LanguageBreakEngine.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
import type { RuleBasedBreakIterator$BreakCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedBreakIterator$BreakCache.d.ts'
import type { RuleBasedBreakIterator$DictionaryCache } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedBreakIterator$DictionaryCache.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class RuleBasedBreakIterator extends BreakIterator {
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
    static compileRules(paramrules: string, paramruleBinary: OutputStream): void;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getBreakInstance(paramwhere: ULocale, paramkind: number): BreakIterator;
    static getCharacterInstance(): BreakIterator;
    static getCharacterInstance(paramwhere: Locale): BreakIterator;
    static getCharacterInstance(paramwhere: ULocale): BreakIterator;
    static getInstanceFromCompiledRules(paramis: InputStream): RuleBasedBreakIterator;
    static getInstanceFromCompiledRules(parambytes: ByteBuffer): RuleBasedBreakIterator;
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
    constructor(rules: string)
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
    clone(): Object;
    current(): number;
    dump(out: PrintStream): void;
    equals(that: Object | null): boolean;
    first(): number;
    following(startPos: number): number;
    // private getLanguageBreakEngine(c: number): LanguageBreakEngine;
    getRuleStatus(): number;
    getRuleStatusVec(fillInArray: number[]): number;
    getText(): CharacterIterator;
    // private handleNext(): number;
    // private handleSafePrevious(fromPosition: number): number;
    hashCode(): number;
    isBoundary(offset: number): boolean;
    last(): number;
    next(): number;
    next(n: number): number;
    preceding(offset: number): number;
    previous(): number;
    setText(newText: CharacterIterator): void;
    setText(newText: CharSequence): void;
    setText(newText: string): void;
    toString(): string;
}