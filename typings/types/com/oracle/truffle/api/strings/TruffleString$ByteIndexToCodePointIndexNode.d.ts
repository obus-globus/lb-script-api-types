import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TStringInternalNodes$RawIndexToCodePointIndexNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$RawIndexToCodePointIndexNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$ByteIndexToCodePointIndexNode extends AbstractPublicNode {
    static create(): TruffleString$ByteIndexToCodePointIndexNode;
    static getUncached(): TruffleString$ByteIndexToCodePointIndexNode;
    constructor()
    execute(a: AbstractTruffleString, byteOffset: number, byteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    translate(a: AbstractTruffleString, byteOffset: number, byteIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, rawIndexToCodePointIndexNode: TStringInternalNodes$RawIndexToCodePointIndexNode): number;
}