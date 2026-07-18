import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TStringInternalNodes$IndexOfStringRawNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$IndexOfStringRawNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$WithMask } from '../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
export abstract class TruffleString$ByteIndexOfStringNode extends AbstractPublicNode {
    static create(): TruffleString$ByteIndexOfStringNode;
    static getUncached(): TruffleString$ByteIndexOfStringNode;
    constructor()
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, mask: number[], expectedEncoding: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, b: TruffleString$WithMask, fromByteIndex: number, toByteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    indexOfString(a: AbstractTruffleString, b: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, mask: number[], encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile, getCodeRangeANode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, getCodeRangeBNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, indexOfStringNode: TStringInternalNodes$IndexOfStringRawNode): number;
}