import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ConcatNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ConcatNode.d.ts'
import type { JSConcatStringsNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSConcatStringsNode.d.ts'
export class JSConcatStringsNodeGen extends JSConcatStringsNode {
    static create(): JSConcatStringsNode;
    static create(paramstringLengthLimit: number): JSConcatStringsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(stringLengthLimit: number)
    // private concatNode_: TruffleString$ConcatNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: TruffleString, arg1Value: TruffleString): TruffleString;
    executeTString(arg0Value: TruffleString, arg1Value: TruffleString): TruffleString;
}