import type { StringBuilder } from '../../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer2Impl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { CollationDataBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationDataBuilder.d.ts'
import type { CollationRootElements } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationRootElements.d.ts'
import type { CollationRuleParser$Sink } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationRuleParser$Sink.d.ts'
import type { CollationTailoring } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationTailoring.d.ts'
import type { UVector32 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector32.d.ts'
import type { UVector64 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/UVector64.d.ts'
import type { Normalizer2 } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
export class CollationBuilder extends CollationRuleParser$Sink {
    constructor(b: CollationTailoring)
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
    // private addIfDifferent(prefix: CharSequence, str: CharSequence, newCEs: number[], newCEsLength: number, ce32: number): number;
    // private addOnlyClosure(nfdPrefix: CharSequence, nfdString: CharSequence, newCEs: number[], newCEsLength: number, ce32: number): number;
    addRelation(strength: number, prefix: CharSequence, str: CharSequence, extension: CharSequence): void;
    addReset(strength: number, str: CharSequence): void;
    // private addTailComposites(nfdPrefix: CharSequence, nfdString: CharSequence): void;
    // private addWithClosure(nfdPrefix: CharSequence, nfdString: CharSequence, newCEs: number[], newCEsLength: number, ce32: number): number;
    // private closeOverComposites(): void;
    // private equalSubSequences(left: CharSequence, leftStart: number, right: CharSequence, rightStart: number): boolean;
    // private finalizeCEs(): void;
    // private findCommonNode(index: number, strength: number): number;
    // private findOrInsertNodeForCEs(strength: number): number;
    // private findOrInsertNodeForPrimary(p: number): number;
    // private findOrInsertNodeForRootCE(ce: number, strength: number): number;
    // private findOrInsertWeakNode(index: number, weight16: number, level: number): number;
    // private getSpecialResetPosition(str: CharSequence): number;
    // private getWeight16Before(index: number, node: number, level: number): number;
    // private ignorePrefix(s: CharSequence): boolean;
    // private ignoreString(s: CharSequence): boolean;
    // private insertNodeBetween(index: number, nextIndex: number, node: number): number;
    // private insertTailoredNodeAfter(index: number, strength: number): number;
    // private isFCD(s: CharSequence): boolean;
    // private makeTailoredCEs(): void;
    // private mergeCompositeIntoString(nfdString: CharSequence, indexAfterLastStarter: number, composite: number, decomp: CharSequence, newNFDString: StringBuilder, newString: StringBuilder): boolean;
    optimize(set: string[]): void;
    parseAndBuild(ruleString: string): CollationTailoring;
    // private setCaseBits(nfdString: CharSequence): void;
    suppressContractions(set: string[]): void;
}