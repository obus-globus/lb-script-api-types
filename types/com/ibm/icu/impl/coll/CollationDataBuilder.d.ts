import type { Normalizer2Impl } from '../../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationDataBuilder$CEModifier } from '../../../../../com/ibm/icu/impl/coll/CollationDataBuilder$CEModifier.d.ts'
import type { CollationDataBuilder$ConditionalCE32 } from '../../../../../com/ibm/icu/impl/coll/CollationDataBuilder$ConditionalCE32.d.ts'
import type { CollationDataBuilder$DataBuilderCollationIterator } from '../../../../../com/ibm/icu/impl/coll/CollationDataBuilder$DataBuilderCollationIterator.d.ts'
import type { CollationFastLatinBuilder } from '../../../../../com/ibm/icu/impl/coll/CollationFastLatinBuilder.d.ts'
import type { CollationSettings } from '../../../../../com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { UVector32 } from '../../../../../com/ibm/icu/impl/coll/UVector32.d.ts'
import type { UVector64 } from '../../../../../com/ibm/icu/impl/coll/UVector64.d.ts'
import type { CharsTrieBuilder } from '../../../../../com/ibm/icu/util/CharsTrieBuilder.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CollationDataBuilder extends Object {
    constructor()
    // private base: CollationData;
    // private baseSettings: CollationSettings;
    // private ce32s: UVector32;
    // private ce64s: UVector64;
    // private collIter: CollationDataBuilder$DataBuilderCollationIterator;
    // private conditionalCE32s: CollationDataBuilder$ConditionalCE32[];
    // private contextChars: string[];
    // private contexts: StringBuilder;
    // private contextsEra: number;
    // private fastLatinBuilder: CollationFastLatinBuilder;
    // private fastLatinEnabled: boolean;
    // private modified: boolean;
    // private nfcImpl: Normalizer2Impl;
    // private trie: (Object | null)[];
    // private unsafeBackwardSet: string[];
    add(arg0: CharSequence, arg1: CharSequence, arg2: number[], arg3: number): void;
    addCE(arg0: number): number;
    addCE32(arg0: CharSequence, arg1: CharSequence, arg2: number): void;
    addCE32(arg0: number): number;
    addConditionalCE32(arg0: string, arg1: number): number;
    addContextTrie(arg0: number, arg1: CharsTrieBuilder): number;
    build(arg0: CollationData): void;
    buildContext(arg0: CollationDataBuilder$ConditionalCE32): number;
    buildContexts(): void;
    buildFastLatinTable(arg0: CollationData): void;
    buildMappings(arg0: CollationData): void;
    clearContexts(): void;
    copyContractionsFromBaseCE32(arg0: StringBuilder, arg1: number, arg2: number, arg3: CollationDataBuilder$ConditionalCE32): number;
    copyFrom(arg0: CollationDataBuilder, arg1: CollationDataBuilder$CEModifier): void;
    copyFromBaseCE32(arg0: number, arg1: number, arg2: boolean): number;
    enableFastLatin(): void;
    encodeCEs(arg0: number[], arg1: number): number;
    encodeExpansion(arg0: number[], arg1: number, arg2: number): number;
    encodeExpansion32(arg0: number[], arg1: number, arg2: number): number;
    encodeOneCE(arg0: number): number;
    getCE32FromOffsetCE32(arg0: boolean, arg1: number, arg2: number): number;
    getCEs(arg0: CharSequence, arg1: CharSequence, arg2: number[], arg3: number): number;
    getCEs(arg0: CharSequence, arg1: number, arg2: number[], arg3: number): number;
    getCEs(arg0: CharSequence, arg1: number[], arg2: number): number;
    getConditionalCE32(arg0: number): CollationDataBuilder$ConditionalCE32;
    getConditionalCE32ForCE32(arg0: number): CollationDataBuilder$ConditionalCE32;
    getJamoCE32s(arg0: number[]): boolean;
    hasMappings(): boolean;
    initForTailoring(arg0: CollationData): void;
    isAssigned(arg0: number): boolean;
    isCompressibleLeadByte(arg0: number): boolean;
    isCompressiblePrimary(arg0: number): boolean;
    isMutable(): boolean;
    optimize(arg0: string[]): void;
    setDigitTags(): void;
    setLeadSurrogates(): void;
    suppressContractions(arg0: string[]): void;
}