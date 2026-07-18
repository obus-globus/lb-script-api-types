import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IndexOfCodePointSet$IndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TStringInternalNodes$IndexOfCodePointSetNode extends Node {
    constructor(indexOfNodes: IndexOfCodePointSet$IndexOfNode[], encoding: TruffleString$Encoding)
    // private encoding: TruffleString$Encoding;
    // private indexOfNodes: IndexOfCodePointSet$IndexOfNode[];
    // private isUTF16Or32: boolean;
    // private doIndexOf(arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number): number;
    dynamicStride(arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, cachedStride: number): number;
    execute(arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number): number;
    stride0(arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number): number;
}