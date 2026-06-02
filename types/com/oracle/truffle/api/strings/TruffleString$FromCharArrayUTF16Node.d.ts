import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
export abstract class TruffleString$FromCharArrayUTF16Node extends AbstractPublicNode {
    static create(): TruffleString$FromCharArrayUTF16Node;
    static getUncached(): TruffleString$FromCharArrayUTF16Node;
    constructor()
    doNonEmpty(value: string[], charOffset: number, charLength: number, utf16CompactProfile: InlinedConditionProfile, outOfMemoryProfile: InlinedBranchProfile): TruffleString;
    execute(value: string[]): TruffleString;
    execute(value: string[], charOffset: number, charLength: number): TruffleString;
}