import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ConcatNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ConcatNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
export abstract class JSConcatStringsNode extends JavaScriptBaseNode {
    static create(): JSConcatStringsNode;
    static create(paramstringLengthLimit: number): JSConcatStringsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(stringLengthLimit: number)
    // private stringLengthLimit: number;
    doConcat(left: TruffleString, right: TruffleString, errorBranch: InlinedBranchProfile, concatNode: TruffleString$ConcatNode): TruffleString;
    executeTString(a: TruffleString, b: TruffleString): TruffleString;
    // private validateStringLength(resultLength: number, errorBranch: InlinedBranchProfile): void;
}