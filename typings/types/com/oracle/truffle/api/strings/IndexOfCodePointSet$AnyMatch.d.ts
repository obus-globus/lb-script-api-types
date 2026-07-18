import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IndexOfCodePointSet$IndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfNode.d.ts'
import type { IndexOfCodePointSet$OptimizedIndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$OptimizedIndexOfNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class IndexOfCodePointSet$AnyMatch extends IndexOfCodePointSet$OptimizedIndexOfNode {
    constructor(maxCodeRange: number)
    codeEquals(other: IndexOfCodePointSet$IndexOfNode): boolean;
    runSearch(location: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding): number;
    shallowCopy(): IndexOfCodePointSet$IndexOfNode;
}