import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IndexOfCodePointSet$IndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfStringNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class IndexOfCodePointSetFactory$IndexOfStringNodeGen extends IndexOfCodePointSet$IndexOfStringNode {
    static create(parammaxCodeRange: number, paramstring: TruffleString): IndexOfCodePointSet$IndexOfStringNode;
    private constructor(maxCodeRange: number, string: TruffleString)
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: number[], arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: TruffleString$Encoding): number;
}