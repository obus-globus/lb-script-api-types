import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CollationElementIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CollationElementIterator.d.ts'
import type { RuleBasedCollator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator.d.ts'
import type { StringSearch$CollationPCE$PCEBuffer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch$CollationPCE$PCEBuffer.d.ts'
import type { StringSearch$CollationPCE$Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/StringSearch$CollationPCE$Range.d.ts'
export class StringSearch$CollationPCE extends Object {
    static PROCESSED_NULLORDER: number;
    constructor(iter: CollationElementIterator)
    // private cei_: CollationElementIterator;
    // private isShifted_: boolean;
    // private pceBuffer_: StringSearch$CollationPCE$PCEBuffer;
    // private strength_: number;
    // private toShift_: boolean;
    // private variableTop_: number;
    init(iter: CollationElementIterator): void;
    // private init(coll: RuleBasedCollator): void;
    nextProcessed(range: StringSearch$CollationPCE$Range): number;
    previousProcessed(range: StringSearch$CollationPCE$Range): number;
    // private processCE(ce: number): number;
}