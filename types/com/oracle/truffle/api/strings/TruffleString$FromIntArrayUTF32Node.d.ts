import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
export abstract class TruffleString$FromIntArrayUTF32Node extends AbstractPublicNode {
    static create(): TruffleString$FromIntArrayUTF32Node;
    static getUncached(): TruffleString$FromIntArrayUTF32Node;
    constructor()
    doNonEmpty(value: number[], intOffset: number, length: number, utf32Compact0Profile: InlinedConditionProfile, utf32Compact1Profile: InlinedConditionProfile, outOfMemoryProfile: InlinedBranchProfile): TruffleString;
    execute(value: number[]): TruffleString;
    execute(value: number[], intOffset: number, intLength: number): TruffleString;
}