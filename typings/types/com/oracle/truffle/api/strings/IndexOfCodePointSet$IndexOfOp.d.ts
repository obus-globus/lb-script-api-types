import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IndexOfCodePointSet$IndexOfOp extends Object {
    constructor(maxCodeRange: number)
    // private maxCodeRange: number;
    codeEquals(other: IndexOfCodePointSet$IndexOfOp): boolean;
    isFast(): boolean;
    runSearch(location: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding): number;
}