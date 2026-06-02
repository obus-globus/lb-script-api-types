import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
export abstract class TruffleStringBuilder$AppendCharUTF16Node extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendCharUTF16Node;
    static getUncached(): TruffleStringBuilder$AppendCharUTF16Node;
    constructor()
    append(sb: TruffleStringBuilderUTF16, value: string, nonAsciiProfile: InlinedBranchProfile, inflateProfile: InlinedBranchProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    execute(sb: TruffleStringBuilder, value: string): void;
}