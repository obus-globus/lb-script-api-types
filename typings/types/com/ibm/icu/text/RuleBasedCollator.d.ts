import type { CollationData } from '../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationSettings } from '../../../../com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { CollationTailoring } from '../../../../com/ibm/icu/impl/coll/CollationTailoring.d.ts'
import type { SharedObject$Reference } from '../../../../com/ibm/icu/impl/coll/SharedObject$Reference.d.ts'
import type { CollationElementIterator } from '../../../../com/ibm/icu/text/CollationElementIterator.d.ts'
import type { CollationKey } from '../../../../com/ibm/icu/text/CollationKey.d.ts'
import type { Collator } from '../../../../com/ibm/icu/text/Collator.d.ts'
import type { Collator$CollatorFactory } from '../../../../com/ibm/icu/text/Collator$CollatorFactory.d.ts'
import type { RawCollationKey } from '../../../../com/ibm/icu/text/RawCollationKey.d.ts'
import type { RuleBasedCollator$CollationBuffer } from '../../../../com/ibm/icu/text/RuleBasedCollator$CollationBuffer.d.ts'
import type { RuleBasedCollator$CollationKeyByteSink } from '../../../../com/ibm/icu/text/RuleBasedCollator$CollationKeyByteSink.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Lock } from '../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class RuleBasedCollator extends Collator implements Cloneable {
    static CANONICAL_DECOMPOSITION: number;
    static FULL_DECOMPOSITION: number;
    static IDENTICAL: number;
    static NO_DECOMPOSITION: number;
    static PRIMARY: number;
    static QUATERNARY: number;
    static SECONDARY: number;
    static TERTIARY: number;
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getDisplayName(paramarg0: ULocale): string;
    static getDisplayName(paramarg0: ULocale, paramarg1: ULocale): string;
    static getDisplayName(paramarg0: Locale): string;
    static getDisplayName(paramarg0: Locale, paramarg1: Locale): string;
    static getEquivalentReorderCodes(paramarg0: number): number[];
    static getFunctionalEquivalent(paramarg0: string, paramarg1: ULocale): ULocale;
    static getFunctionalEquivalent(paramarg0: string, paramarg1: ULocale, paramarg2: (Object | null)[]): ULocale;
    static getInstance(): Collator;
    static getInstance(paramarg0: ULocale): Collator;
    static getInstance(paramarg0: Locale): Collator;
    static getKeywordValues(paramarg0: string): (Object | null)[];
    static getKeywordValuesForLocale(paramarg0: string, paramarg1: ULocale, paramarg2: boolean): (Object | null)[];
    static getKeywords(): (Object | null)[];
    static registerFactory(paramarg0: Collator$CollatorFactory): Object;
    static registerInstance(paramarg0: Collator, paramarg1: ULocale): Object;
    static unregister(paramarg0: Object): boolean;
    constructor(arg0: CollationTailoring, arg1: ULocale)
    constructor(arg0: string)
    // private actualLocaleIsSameAsValid: boolean;
    // private collationBuffer: RuleBasedCollator$CollationBuffer;
    // private data: CollationData;
    // private frozenLock: Lock;
    // private settings: SharedObject$Reference<CollationSettings>;
    // private tailoring: CollationTailoring;
    // private validLocale: ULocale;
    // private adoptTailoring(arg0: CollationTailoring): void;
    // private checkNotFrozen(): void;
    clone(): RuleBasedCollator;
    cloneAsThawed(): RuleBasedCollator;
    compare(arg0: Object, arg1: Object): number;
    compare(arg0: string, arg1: string): number;
    doCompare(arg0: CharSequence, arg1: CharSequence): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: string, arg1: string): boolean;
    freeze(): Collator;
    // private getCollationBuffer(): RuleBasedCollator$CollationBuffer;
    getCollationElementIterator(arg0: UCharacterIterator): CollationElementIterator;
    getCollationElementIterator(arg0: CharacterIterator): CollationElementIterator;
    getCollationElementIterator(arg0: string): CollationElementIterator;
    getCollationKey(arg0: string): CollationKey;
    // private getCollationKey(arg0: string, arg1: RuleBasedCollator$CollationBuffer): CollationKey;
    getContractionsAndExpansions(arg0: string[], arg1: string[], arg2: boolean): void;
    getDecomposition(): number;
    // private getDefaultSettings(): CollationSettings;
    getLocale(arg0: ULocale$Type): ULocale;
    getMaxVariable(): number;
    getNumericCollation(): boolean;
    // private getOwnedSettings(): CollationSettings;
    // private getRawCollationKey(arg0: CharSequence, arg1: RawCollationKey, arg2: RuleBasedCollator$CollationBuffer): RawCollationKey;
    getRawCollationKey(arg0: string, arg1: RawCollationKey): RawCollationKey;
    getReorderCodes(): number[];
    getRules(): string;
    getRules(arg0: boolean): string;
    getStrength(): number;
    getTailoredSet(): string[];
    getUCAVersion(): VersionInfo;
    getVariableTop(): number;
    getVersion(): VersionInfo;
    hashCode(): number;
    // private initMaxExpansions(): void;
    internalAddContractions(arg0: number, arg1: string[]): void;
    // private internalBuildTailoring(arg0: string): void;
    internalGetCEs(arg0: CharSequence): number[];
    // private internalSetVariableTop(arg0: number): void;
    isAlternateHandlingShifted(): boolean;
    isCaseLevel(): boolean;
    isFrenchCollation(): boolean;
    isFrozen(): boolean;
    isHiraganaQuaternary(): boolean;
    isLowerCaseFirst(): boolean;
    isUnsafe(arg0: number): boolean;
    isUpperCaseFirst(): boolean;
    // private releaseCollationBuffer(arg0: RuleBasedCollator$CollationBuffer): void;
    setAlternateHandlingDefault(): void;
    setAlternateHandlingShifted(arg0: boolean): void;
    setCaseFirstDefault(): void;
    setCaseLevel(arg0: boolean): void;
    setCaseLevelDefault(): void;
    setDecomposition(arg0: number): void;
    setDecompositionDefault(): void;
    // private setFastLatinOptions(arg0: CollationSettings): void;
    setFrenchCollation(arg0: boolean): void;
    setFrenchCollationDefault(): void;
    setHiraganaQuaternary(arg0: boolean): void;
    setHiraganaQuaternaryDefault(): void;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setLowerCaseFirst(arg0: boolean): void;
    setMaxVariable(arg0: number): RuleBasedCollator;
    setNumericCollation(arg0: boolean): void;
    setNumericCollationDefault(): void;
    setReorderCodes(...arg0: number[]): void;
    setStrength(arg0: number): void;
    setStrengthDefault(): void;
    setUpperCaseFirst(arg0: boolean): void;
    setVariableTop(arg0: number): void;
    setVariableTop(arg0: string): number;
    // private simpleKeyLengthEstimate(arg0: CharSequence): number;
    // private writeIdenticalLevel(arg0: CharSequence, arg1: RuleBasedCollator$CollationKeyByteSink): void;
    // private writeSortKey(arg0: CharSequence, arg1: RuleBasedCollator$CollationKeyByteSink, arg2: RuleBasedCollator$CollationBuffer): void;
}