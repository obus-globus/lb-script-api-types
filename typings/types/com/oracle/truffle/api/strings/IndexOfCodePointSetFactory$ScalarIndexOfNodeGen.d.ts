import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IndexOfCodePointSet$ScalarIndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$ScalarIndexOfNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class IndexOfCodePointSetFactory$ScalarIndexOfNodeGen extends IndexOfCodePointSet$ScalarIndexOfNode {
    static create(parammaxCodeRange: number): IndexOfCodePointSet$ScalarIndexOfNode;
    private constructor(maxCodeRange: number)
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: number[], arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: TruffleString$Encoding): number;
}