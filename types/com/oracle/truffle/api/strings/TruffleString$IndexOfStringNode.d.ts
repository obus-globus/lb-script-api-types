import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthNode.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TStringInternalNodes$InternalIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$InternalIndexOfStringNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$IndexOfStringNode extends AbstractPublicNode {
    static create(): TruffleString$IndexOfStringNode;
    static getUncached(): TruffleString$IndexOfStringNode;
    constructor()
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    indexOfString(a: AbstractTruffleString, b: AbstractTruffleString, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile, getCodePointLengthANode: TStringInternalNodes$GetCodePointLengthNode, getCodePointLengthBNode: TStringInternalNodes$GetCodePointLengthNode, getCodeRangeANode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, getCodeRangeBNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, indexOfStringNode: TStringInternalNodes$InternalIndexOfStringNode): number;
}