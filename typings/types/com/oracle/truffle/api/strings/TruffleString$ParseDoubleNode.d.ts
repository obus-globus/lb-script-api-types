import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$ParseDoubleNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ParseDoubleNode.d.ts'
export abstract class TruffleString$ParseDoubleNode extends AbstractPublicNode {
    static create(): TruffleString$ParseDoubleNode;
    static getUncached(): TruffleString$ParseDoubleNode;
    constructor()
    execute(a: AbstractTruffleString): number;
    parseDouble(a: AbstractTruffleString, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, parseDoubleNode: TStringInternalNodes$ParseDoubleNode): number;
}