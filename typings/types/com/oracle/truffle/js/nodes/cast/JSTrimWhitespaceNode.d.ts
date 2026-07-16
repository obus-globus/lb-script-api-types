import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
export abstract class JSTrimWhitespaceNode extends JavaScriptBaseNode {
    static create(): JSTrimWhitespaceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doString(string: TruffleString, readRawNode: TruffleString$ReadCharUTF16Node, isFastNonWhitespace: InlinedConditionProfile, isFastWhitespace: InlinedConditionProfile, substringNode: TruffleString$SubstringByteIndexNode, startsWithWhitespaceBranch: InlinedBranchProfile, endsWithWhitespaceBranch: InlinedBranchProfile, isEmpty: InlinedConditionProfile): TruffleString;
    executeString(operand: TruffleString): TruffleString;
    startsOrEndsWithWhitespace(readRawNode: TruffleString$ReadCharUTF16Node, string: TruffleString, isFastNonWhitespace: InlinedConditionProfile, isFastWhitespace: InlinedConditionProfile): boolean;
}