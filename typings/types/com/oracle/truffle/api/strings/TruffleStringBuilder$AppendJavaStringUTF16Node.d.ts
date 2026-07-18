import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
export abstract class TruffleStringBuilder$AppendJavaStringUTF16Node extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendJavaStringUTF16Node;
    static getUncached(): TruffleStringBuilder$AppendJavaStringUTF16Node;
    constructor()
    append(sb: TruffleStringBuilderUTF16, javaString: string, fromIndex: number, lengthStr: number, slowPathProfile: InlinedBranchProfile, inflateProfile: InlinedBranchProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    execute(sb: TruffleStringBuilder, a: string): void;
    execute(sb: TruffleStringBuilder, a: string, fromCharIndex: number, charLength: number): void;
}