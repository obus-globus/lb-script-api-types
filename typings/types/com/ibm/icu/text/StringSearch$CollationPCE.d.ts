import type { CollationElementIterator } from '../../../../com/ibm/icu/text/CollationElementIterator.d.ts'
import type { RuleBasedCollator } from '../../../../com/ibm/icu/text/RuleBasedCollator.d.ts'
import type { StringSearch$CollationPCE$PCEBuffer } from '../../../../com/ibm/icu/text/StringSearch$CollationPCE$PCEBuffer.d.ts'
import type { StringSearch$CollationPCE$Range } from '../../../../com/ibm/icu/text/StringSearch$CollationPCE$Range.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringSearch$CollationPCE extends Object {
    static PROCESSED_NULLORDER: number;
    constructor(arg0: CollationElementIterator)
    // private cei_: CollationElementIterator;
    // private isShifted_: boolean;
    // private pceBuffer_: StringSearch$CollationPCE$PCEBuffer;
    // private strength_: number;
    // private toShift_: boolean;
    // private variableTop_: number;
    init(arg0: CollationElementIterator): void;
    // private init(arg0: RuleBasedCollator): void;
    nextProcessed(arg0: StringSearch$CollationPCE$Range): number;
    previousProcessed(arg0: StringSearch$CollationPCE$Range): number;
    // private processCE(arg0: number): number;
}