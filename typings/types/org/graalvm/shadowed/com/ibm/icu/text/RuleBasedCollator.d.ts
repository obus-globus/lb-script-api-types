import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Lock } from '../../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { CollationData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationSettings } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { CollationTailoring } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationTailoring.d.ts'
import type { SharedObject$Reference } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/SharedObject$Reference.d.ts'
import type { CollationElementIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CollationElementIterator.d.ts'
import type { CollationKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CollationKey.d.ts'
import type { Collator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator.d.ts'
import type { Collator$CollatorFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Collator$CollatorFactory.d.ts'
import type { RawCollationKey } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RawCollationKey.d.ts'
import type { RuleBasedCollator$CollationBuffer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator$CollationBuffer.d.ts'
import type { RuleBasedCollator$CollationKeyByteSink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator$CollationKeyByteSink.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
import type { VersionInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/VersionInfo.d.ts'
export class RuleBasedCollator extends Collator implements Cloneable {
    static CANONICAL_DECOMPOSITION: number;
    static FULL_DECOMPOSITION: number;
    static IDENTICAL: number;
    static NO_DECOMPOSITION: number;
    static PRIMARY: number;
    static QUATERNARY: number;
    static SECONDARY: number;
    static TERTIARY: number;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getDisplayName(paramobjectLocale: Locale): string;
    static getDisplayName(paramobjectLocale: Locale, paramdisplayLocale: Locale): string;
    static getDisplayName(paramobjectLocale: ULocale): string;
    static getDisplayName(paramobjectLocale: ULocale, paramdisplayLocale: ULocale): string;
    static getEquivalentReorderCodes(paramreorderCode: number): number[];
    static getFunctionalEquivalent(paramkeyword: string, paramlocID: ULocale): ULocale;
    static getFunctionalEquivalent(paramkeyword: string, paramlocID: ULocale, paramisAvailable: boolean[]): ULocale;
    static getInstance(): Collator;
    static getInstance(paramlocale: Locale): Collator;
    static getInstance(paramlocale: ULocale): Collator;
    static getKeywordValues(paramkeyword: string): string[];
    static getKeywordValuesForLocale(paramkey: string, paramlocale: ULocale, paramcommonlyUsed: boolean): string[];
    static getKeywords(): string[];
    static registerFactory(paramfactory: Collator$CollatorFactory): Object;
    static registerInstance(paramcollator: Collator, paramlocale: ULocale): Object;
    static unregister(paramregistryKey: Object): boolean;
    constructor(rules: string)
    constructor(t: CollationTailoring, vl: ULocale)
    // private actualLocaleIsSameAsValid: boolean;
    // private collationBuffer: RuleBasedCollator$CollationBuffer;
    // private data: CollationData;
    // private frozenLock: Lock;
    // private settings: SharedObject$Reference<CollationSettings>;
    // private tailoring: CollationTailoring;
    // private validLocale: ULocale;
    // private adoptTailoring(t: CollationTailoring): void;
    // private checkNotFrozen(): void;
    clone(): RuleBasedCollator;
    cloneAsThawed(): RuleBasedCollator;
    compare(source: Object, target: Object): number;
    compare(source: string, target: string): number;
    doCompare(left: CharSequence, right: CharSequence): number;
    equals(obj: Object | null): boolean;
    equals(source: string, target: string): boolean;
    freeze(): Collator;
    // private getCollationBuffer(): RuleBasedCollator$CollationBuffer;
    getCollationElementIterator(source: CharacterIterator): CollationElementIterator;
    getCollationElementIterator(source: string): CollationElementIterator;
    getCollationElementIterator(source: UCharacterIterator): CollationElementIterator;
    getCollationKey(source: string): CollationKey;
    // private getCollationKey(source: string, buffer: RuleBasedCollator$CollationBuffer): CollationKey;
    getContractionsAndExpansions(contractions: string[], expansions: string[], addPrefixes: boolean): void;
    getDecomposition(): number;
    // private getDefaultSettings(): CollationSettings;
    getLocale(type: ULocale$Type): ULocale;
    getMaxVariable(): number;
    getNumericCollation(): boolean;
    // private getOwnedSettings(): CollationSettings;
    // private getRawCollationKey(source: CharSequence, key: RawCollationKey, buffer: RuleBasedCollator$CollationBuffer): RawCollationKey;
    getRawCollationKey(source: string, key: RawCollationKey): RawCollationKey;
    getReorderCodes(): number[];
    getRules(): string;
    getRules(fullrules: boolean): string;
    getStrength(): number;
    getTailoredSet(): string[];
    getUCAVersion(): VersionInfo;
    getVariableTop(): number;
    getVersion(): VersionInfo;
    hashCode(): number;
    // private initMaxExpansions(): void;
    internalAddContractions(c: number, set: string[]): void;
    // private internalBuildTailoring(rules: string): void;
    internalGetCEs(str: CharSequence): number[];
    // private internalSetVariableTop(varTop: number): void;
    isAlternateHandlingShifted(): boolean;
    isCaseLevel(): boolean;
    isFrenchCollation(): boolean;
    isFrozen(): boolean;
    isHiraganaQuaternary(): boolean;
    isLowerCaseFirst(): boolean;
    isUnsafe(c: number): boolean;
    isUpperCaseFirst(): boolean;
    // private releaseCollationBuffer(buffer: RuleBasedCollator$CollationBuffer): void;
    setAlternateHandlingDefault(): void;
    setAlternateHandlingShifted(shifted: boolean): void;
    setCaseFirstDefault(): void;
    setCaseLevel(flag: boolean): void;
    setCaseLevelDefault(): void;
    setDecomposition(decomposition: number): void;
    setDecompositionDefault(): void;
    // private setFastLatinOptions(ownedSettings: CollationSettings): void;
    setFrenchCollation(flag: boolean): void;
    setFrenchCollationDefault(): void;
    setHiraganaQuaternary(flag: boolean): void;
    setHiraganaQuaternaryDefault(): void;
    setLocale(valid: ULocale, actual: ULocale): void;
    setLowerCaseFirst(lowerfirst: boolean): void;
    setMaxVariable(group: number): RuleBasedCollator;
    setNumericCollation(flag: boolean): void;
    setNumericCollationDefault(): void;
    setReorderCodes(...order: number[]): void;
    setStrength(newStrength: number): void;
    setStrengthDefault(): void;
    setUpperCaseFirst(upperfirst: boolean): void;
    setVariableTop(varTop: number): void;
    setVariableTop(varTop: string): number;
    // private simpleKeyLengthEstimate(source: CharSequence): number;
    // private writeIdenticalLevel(s: CharSequence, sink: RuleBasedCollator$CollationKeyByteSink): void;
    // private writeSortKey(s: CharSequence, sink: RuleBasedCollator$CollationKeyByteSink, buffer: RuleBasedCollator$CollationBuffer): void;
}