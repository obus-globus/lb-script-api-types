import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
export abstract class TruffleString$CodePointAtIndexUTF32Node extends AbstractPublicNode {
    static create(): TruffleString$CodePointAtIndexUTF32Node;
    static getUncached(): TruffleString$CodePointAtIndexUTF32Node;
    constructor()
    execute(a: AbstractTruffleString, i: number): number;
    readCodePoint(a: AbstractTruffleString, i: number, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, stride0Profile: InlinedConditionProfile, stride1Profile: InlinedConditionProfile): number;
}