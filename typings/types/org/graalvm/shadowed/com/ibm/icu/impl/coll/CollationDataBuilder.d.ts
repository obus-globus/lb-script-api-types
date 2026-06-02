import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer2Impl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationDataBuilder$CEModifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder$CEModifier.d.ts'
import type { CollationDataBuilder$ConditionalCE32 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder$ConditionalCE32.d.ts'
import type { CollationDataBuilder$DataBuilderCollationIterator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder$DataBuilderCollationIterator.d.ts'
import type { CollationFastLatinBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationFastLatinBuilder.d.ts'
import type { CollationSettings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationSettings.d.ts'
import type { UVector32 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector32.d.ts'
import type { UVector64 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector64.d.ts'
import type { CharsTrieBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrieBuilder.d.ts'
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
    add(prefix: CharSequence, s: CharSequence, ces: number[], cesLength: number): void;
    addCE(ce: number): number;
    addCE32(prefix: CharSequence, s: CharSequence, ce32: number): void;
    addCE32(ce32: number): number;
    addConditionalCE32(context: string, ce32: number): number;
    addContextTrie(defaultCE32: number, trieBuilder: CharsTrieBuilder): number;
    build(data: CollationData): void;
    buildContext(head: CollationDataBuilder$ConditionalCE32): number;
    buildContexts(): void;
    buildFastLatinTable(data: CollationData): void;
    buildMappings(data: CollationData): void;
    clearContexts(): void;
    copyContractionsFromBaseCE32(context: StringBuilder, c: number, ce32: number, cond: CollationDataBuilder$ConditionalCE32): number;
    copyFrom(src: CollationDataBuilder, modifier: CollationDataBuilder$CEModifier): void;
    copyFromBaseCE32(c: number, ce32: number, withContext: boolean): number;
    enableFastLatin(): void;
    encodeCEs(ces: number[], cesLength: number): number;
    encodeExpansion(ces: number[], start: number, length: number): number;
    encodeExpansion32(newCE32s: number[], start: number, length: number): number;
    encodeOneCE(ce: number): number;
    getCE32FromOffsetCE32(fromBase: boolean, c: number, ce32: number): number;
    getCEs(prefix: CharSequence, s: CharSequence, ces: number[], cesLength: number): number;
    getCEs(s: CharSequence, start: number, ces: number[], cesLength: number): number;
    getCEs(s: CharSequence, ces: number[], cesLength: number): number;
    getConditionalCE32(index: number): CollationDataBuilder$ConditionalCE32;
    getConditionalCE32ForCE32(ce32: number): CollationDataBuilder$ConditionalCE32;
    getJamoCE32s(jamoCE32s: number[]): boolean;
    hasMappings(): boolean;
    initForTailoring(b: CollationData): void;
    isAssigned(c: number): boolean;
    isCompressibleLeadByte(b: number): boolean;
    isCompressiblePrimary(p: number): boolean;
    isMutable(): boolean;
    optimize(set: string[]): void;
    setDigitTags(): void;
    setLeadSurrogates(): void;
    suppressContractions(set: string[]): void;
}