import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$CodePointIndexToRawNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$CodePointIndexToRawNode.d.ts'
import type { TStringInternalNodes$GetCodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthNode.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$CodePointIndexToByteIndexNode extends AbstractPublicNode {
    static create(): TruffleString$CodePointIndexToByteIndexNode;
    static getUncached(): TruffleString$CodePointIndexToByteIndexNode;
    constructor()
    execute(a: AbstractTruffleString, byteOffset: number, codepointIndex: number, expectedEncoding: TruffleString$Encoding): number;
    translate(a: AbstractTruffleString, byteOffset: number, codepointIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodePointLengthNode: TStringInternalNodes$GetCodePointLengthNode, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, codePointIndexToRawNode: TStringInternalNodes$CodePointIndexToRawNode): number;
}