import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$CodePointIndexToRawNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$CodePointIndexToRawNode.d.ts'
import type { TStringInternalNodes$GetCodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthNode.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TStringInternalNodes$SubstringNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$SubstringNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$SubstringNode extends AbstractPublicNode {
    static create(): TruffleString$SubstringNode;
    static getUncached(): TruffleString$SubstringNode;
    constructor()
    execute(a: AbstractTruffleString, fromIndex: number, length: number, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    substring(a: AbstractTruffleString, fromIndex: number, length: number, encoding: TruffleString$Encoding, lazy: boolean, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeANode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, getCodePointLengthNode: TStringInternalNodes$GetCodePointLengthNode, translateIndexNode: TStringInternalNodes$CodePointIndexToRawNode, substringNode: TStringInternalNodes$SubstringNode): TruffleString;
}