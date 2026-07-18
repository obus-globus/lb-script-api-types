import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TStringInternalNodes$LastIndexOfCodePointRawNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$LastIndexOfCodePointRawNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$LastByteIndexOfCodePointNode extends AbstractPublicNode {
    static create(): TruffleString$LastByteIndexOfCodePointNode;
    static getUncached(): TruffleString$LastByteIndexOfCodePointNode;
    constructor()
    doIndexOf(a: AbstractTruffleString, codepoint: number, fromByteIndex: number, toByteIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, lastIndexOfNode: TStringInternalNodes$LastIndexOfCodePointRawNode): number;
    execute(a: AbstractTruffleString, codepoint: number, fromByteIndex: number, toByteIndex: number, expectedEncoding: TruffleString$Encoding): number;
}