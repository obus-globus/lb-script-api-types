import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilderGeneric } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderGeneric.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export abstract class TruffleStringBuilder$AppendIntNumberNode extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendIntNumberNode;
    static getUncached(): TruffleStringBuilder$AppendIntNumberNode;
    constructor()
    doAppend(sb: TruffleStringBuilderGeneric, value: number, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    doAppend(sb: TruffleStringBuilderUTF16, value: number, stride0Profile: InlinedConditionProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    doAppend(sb: TruffleStringBuilderUTF32, value: number, stride0Profile: InlinedConditionProfile, stride1Profile: InlinedConditionProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    doAppend(sb: TruffleStringBuilderUTF8, value: number, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    execute(sb: TruffleStringBuilder, value: number): void;
}