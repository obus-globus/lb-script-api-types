import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class IndexOfCodePointSet$IndexOfNode extends Node {
    constructor(maxCodeRange: number)
    // private maxCodeRange: number;
    codeEquals(other: IndexOfCodePointSet$IndexOfNode): boolean;
    doWithConditionProfile(location: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding, branchProfile: InlinedBranchProfile): number;
    execute(location: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding): number;
    getMaxCodeRange(): number;
    isFast(): boolean;
    runSearch(location: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding): number;
    shallowCopy(): IndexOfCodePointSet$IndexOfNode;
}