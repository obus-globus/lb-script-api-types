import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IndexOfCodePointSet$IndexOfAnyRangeNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfAnyRangeNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class IndexOfCodePointSetFactory$IndexOfAnyRangeNodeGen extends IndexOfCodePointSet$IndexOfAnyRangeNode {
    static create(parammaxCodeRange: number, paramranges: number[]): IndexOfCodePointSet$IndexOfAnyRangeNode;
    private constructor(maxCodeRange: number, ranges: number[])
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: number[], arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: number, arg8Value: TruffleString$Encoding): number;
}