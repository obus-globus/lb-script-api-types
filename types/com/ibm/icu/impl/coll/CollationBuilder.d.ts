import type { Normalizer2Impl } from '../../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationDataBuilder } from '../../../../../com/ibm/icu/impl/coll/CollationDataBuilder.d.ts'
import type { CollationRootElements } from '../../../../../com/ibm/icu/impl/coll/CollationRootElements.d.ts'
import type { CollationRuleParser$Sink } from '../../../../../com/ibm/icu/impl/coll/CollationRuleParser$Sink.d.ts'
import type { CollationTailoring } from '../../../../../com/ibm/icu/impl/coll/CollationTailoring.d.ts'
import type { UVector32 } from '../../../../../com/ibm/icu/impl/coll/UVector32.d.ts'
import type { UVector64 } from '../../../../../com/ibm/icu/impl/coll/UVector64.d.ts'
import type { Normalizer2 } from '../../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class CollationBuilder extends CollationRuleParser$Sink {
    constructor(arg0: CollationTailoring)
    // private base: CollationTailoring;
    // private baseData: CollationData;
    // private ces: number[];
    // private cesLength: number;
    // private dataBuilder: CollationDataBuilder;
    // private fastLatinEnabled: boolean;
    // private fcd: Normalizer2;
    // private nfcImpl: Normalizer2Impl;
    // private nfd: Normalizer2;
    // private nodes: UVector64;
    // private optimizeSet: string[];
    // private rootElements: CollationRootElements;
    // private rootPrimaryIndexes: UVector32;
    // private variableTop: number;
    // private addIfDifferent(arg0: CharSequence, arg1: CharSequence, arg2: number[], arg3: number, arg4: number): number;
    // private addOnlyClosure(arg0: CharSequence, arg1: CharSequence, arg2: number[], arg3: number, arg4: number): number;
    addRelation(arg0: number, arg1: CharSequence, arg2: CharSequence, arg3: CharSequence): void;
    addReset(arg0: number, arg1: CharSequence): void;
    // private addTailComposites(arg0: CharSequence, arg1: CharSequence): void;
    // private addWithClosure(arg0: CharSequence, arg1: CharSequence, arg2: number[], arg3: number, arg4: number): number;
    // private closeOverComposites(): void;
    // private equalSubSequences(arg0: CharSequence, arg1: number, arg2: CharSequence, arg3: number): boolean;
    // private finalizeCEs(): void;
    // private findCommonNode(arg0: number, arg1: number): number;
    // private findOrInsertNodeForCEs(arg0: number): number;
    // private findOrInsertNodeForPrimary(arg0: number): number;
    // private findOrInsertNodeForRootCE(arg0: number, arg1: number): number;
    // private findOrInsertWeakNode(arg0: number, arg1: number, arg2: number): number;
    // private getSpecialResetPosition(arg0: CharSequence): number;
    // private getWeight16Before(arg0: number, arg1: number, arg2: number): number;
    // private ignorePrefix(arg0: CharSequence): boolean;
    // private ignoreString(arg0: CharSequence): boolean;
    // private insertNodeBetween(arg0: number, arg1: number, arg2: number): number;
    // private insertTailoredNodeAfter(arg0: number, arg1: number): number;
    // private isFCD(arg0: CharSequence): boolean;
    // private makeTailoredCEs(): void;
    // private mergeCompositeIntoString(arg0: CharSequence, arg1: number, arg2: number, arg3: CharSequence, arg4: StringBuilder, arg5: StringBuilder): boolean;
    optimize(arg0: string[]): void;
    parseAndBuild(arg0: string): CollationTailoring;
    // private setCaseBits(arg0: CharSequence): void;
    suppressContractions(arg0: string[]): void;
}