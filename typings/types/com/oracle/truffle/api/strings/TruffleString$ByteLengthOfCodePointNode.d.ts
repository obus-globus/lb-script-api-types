import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$ByteLengthOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ByteLengthOfCodePointNode.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
export abstract class TruffleString$ByteLengthOfCodePointNode extends AbstractPublicNode {
    static create(): TruffleString$ByteLengthOfCodePointNode;
    static getUncached(): TruffleString$ByteLengthOfCodePointNode;
    constructor()
    execute(a: AbstractTruffleString, byteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, byteIndex: number, expectedEncoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): number;
    translate(a: AbstractTruffleString, byteIndex: number, encoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, byteLengthOfCodePointNode: TStringInternalNodes$ByteLengthOfCodePointNode): number;
}