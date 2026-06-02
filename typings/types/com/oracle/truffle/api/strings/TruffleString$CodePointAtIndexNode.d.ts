import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$CodePointAtNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$CodePointAtNode.d.ts'
import type { TStringInternalNodes$GetCodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthNode.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
export abstract class TruffleString$CodePointAtIndexNode extends AbstractPublicNode {
    static create(): TruffleString$CodePointAtIndexNode;
    static getUncached(): TruffleString$CodePointAtIndexNode;
    constructor()
    execute(a: AbstractTruffleString, i: number, expectedEncoding: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, i: number, expectedEncoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): number;
    readCodePoint(a: AbstractTruffleString, i: number, encoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodePointLengthNode: TStringInternalNodes$GetCodePointLengthNode, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, readCodePointNode: TStringInternalNodes$CodePointAtNode): number;
}