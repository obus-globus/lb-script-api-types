import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TStringInternalNodes$CodePointIndexToRawNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$CodePointIndexToRawNode.d.ts'
import type { TStringInternalNodes$GetCodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthNode.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TruffleString$CopyToByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CopyToByteArrayNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class MutableTruffleString$SubstringNode extends AbstractPublicNode {
    static create(): MutableTruffleString$SubstringNode;
    static getUncached(): MutableTruffleString$SubstringNode;
    constructor()
    execute(a: AbstractTruffleString, fromIndex: number, length: number, expectedEncoding: TruffleString$Encoding): MutableTruffleString;
    substring(a: AbstractTruffleString, fromIndex: number, length: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeANode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, getCodePointLengthNode: TStringInternalNodes$GetCodePointLengthNode, translateIndexNode: TStringInternalNodes$CodePointIndexToRawNode, copyToByteArrayNode: TruffleString$CopyToByteArrayNode): MutableTruffleString;
}