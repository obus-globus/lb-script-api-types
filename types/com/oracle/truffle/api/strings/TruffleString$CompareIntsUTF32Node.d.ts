import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
export abstract class TruffleString$CompareIntsUTF32Node extends AbstractPublicNode {
    static create(): TruffleString$CompareIntsUTF32Node;
    static getUncached(): TruffleString$CompareIntsUTF32Node;
    constructor()
    compare(a: AbstractTruffleString, b: AbstractTruffleString, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile): number;
    execute(a: AbstractTruffleString, b: AbstractTruffleString): number;
}