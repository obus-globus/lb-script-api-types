import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilderGeneric } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderGeneric.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export abstract class TruffleStringBuilder$AppendByteNode extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendByteNode;
    static getUncached(): TruffleStringBuilder$AppendByteNode;
    constructor()
    append(sb: TruffleStringBuilderGeneric, value: number, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    append(sb: TruffleStringBuilderUTF8, value: number, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    // private appendByte(sb: TruffleStringBuilder, value: number, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile, nonAsciiCodeRange: number): void;
    execute(sb: TruffleStringBuilder, value: number): void;
}