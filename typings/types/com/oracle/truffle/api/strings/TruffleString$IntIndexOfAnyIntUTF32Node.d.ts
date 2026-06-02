import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringOpsNodes$IndexOfAnyIntNode } from '../../../../../com/oracle/truffle/api/strings/TStringOpsNodes$IndexOfAnyIntNode.d.ts'
export abstract class TruffleString$IntIndexOfAnyIntUTF32Node extends AbstractPublicNode {
    static create(): TruffleString$IntIndexOfAnyIntUTF32Node;
    static getUncached(): TruffleString$IntIndexOfAnyIntUTF32Node;
    constructor()
    execute(a: AbstractTruffleString, fromIntIndex: number, maxIntIndex: number, values: number[]): number;
    indexOfRaw(a: AbstractTruffleString, fromIntIndex: number, maxIntIndex: number, values: number[], managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, indexOfNode: TStringOpsNodes$IndexOfAnyIntNode): number;
}