import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IndexOfCodePointSet$IndexOfOp } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfOp.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class IndexOfCodePointSet$ScalarIndexOfOp extends IndexOfCodePointSet$IndexOfOp {
    constructor(maxCodeRange: number)
    match(codepoint: number): boolean;
    runSearch(location: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding): number;
}