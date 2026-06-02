import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
import type { TruffleStringIterator } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator.d.ts'
export abstract class TruffleString$CreateBackwardCodePointIteratorNode extends AbstractPublicNode {
    static create(): TruffleString$CreateBackwardCodePointIteratorNode;
    static getUncached(): TruffleString$CreateBackwardCodePointIteratorNode;
    constructor()
    createIterator(a: AbstractTruffleString, encoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeANode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode): TruffleStringIterator;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleStringIterator;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): TruffleStringIterator;
}