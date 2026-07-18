import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthNode.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TStringInternalNodes$LastIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$LastIndexOfCodePointNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$LastIndexOfCodePointNode extends AbstractPublicNode {
    static create(): TruffleString$LastIndexOfCodePointNode;
    static getUncached(): TruffleString$LastIndexOfCodePointNode;
    constructor()
    doIndexOf(a: AbstractTruffleString, codepoint: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodePointLengthNode: TStringInternalNodes$GetCodePointLengthNode, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, lastIndexOfNode: TStringInternalNodes$LastIndexOfCodePointNode): number;
    execute(a: AbstractTruffleString, codepoint: number, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
}