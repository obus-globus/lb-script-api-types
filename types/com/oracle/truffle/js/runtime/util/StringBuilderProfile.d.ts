import type { NodeCloneable } from '../../../../../../com/oracle/truffle/api/nodes/NodeCloneable.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilder$AppendCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCharUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendCodePointNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCodePointNode.d.ts'
import type { TruffleStringBuilder$AppendIntNumberNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendIntNumberNode.d.ts'
import type { TruffleStringBuilder$AppendJavaStringUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendJavaStringUTF16Node.d.ts'
import type { TruffleStringBuilder$AppendLongNumberNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendLongNumberNode.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StringBuilderProfile extends NodeCloneable {
    static create(paramstringLengthLimit: number): StringBuilderProfile;
    static length(parambuilder: TruffleStringBuilderUTF16): number;
    static toString(paramnode: TruffleStringBuilder$ToStringNode, parambuilder: TruffleStringBuilderUTF16): TruffleString;
    private constructor(stringLengthLimit: number)
    // private errorBranch: BranchProfile;
    readonly stringLengthLimit: number;
    append(node: TruffleStringBuilder$AppendCharUTF16Node, builder: TruffleStringBuilderUTF16, c: string): void;
    append(node: TruffleStringBuilder$AppendCodePointNode, builder: TruffleStringBuilderUTF16, codePoint: number): void;
    append(node: TruffleStringBuilder$AppendIntNumberNode, builder: TruffleStringBuilderUTF16, intValue: number): void;
    append(node: TruffleStringBuilder$AppendJavaStringUTF16Node, builder: TruffleStringBuilderUTF16, str: string): void;
    append(node: TruffleStringBuilder$AppendLongNumberNode, builder: TruffleStringBuilderUTF16, longValue: number): void;
    append(node: TruffleStringBuilder$AppendStringNode, builder: TruffleStringBuilderUTF16, str: TruffleString): void;
    append(node: TruffleStringBuilder$AppendSubstringByteIndexNode, builder: TruffleStringBuilderUTF16, charSequence: TruffleString, start: number, end: number): void;
    appendLen(node: TruffleStringBuilder$AppendSubstringByteIndexNode, builder: TruffleStringBuilderUTF16, str: TruffleString, start: number, length: number): void;
    clone(): Object;
    getStringLengthLimit(): number;
    newStringBuilder(): TruffleStringBuilderUTF16;
    newStringBuilder(capacity: number): TruffleStringBuilderUTF16;
    repeat(node: TruffleStringBuilder$AppendCodePointNode, builder: TruffleStringBuilderUTF16, codePoint: number, repeat: number): void;
}