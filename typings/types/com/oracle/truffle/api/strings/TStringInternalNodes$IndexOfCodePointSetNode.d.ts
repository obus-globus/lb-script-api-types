import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { AbstractInternalNode } from '../../../../../com/oracle/truffle/api/strings/AbstractInternalNode.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
export abstract class TStringInternalNodes$IndexOfCodePointSetNode extends AbstractInternalNode {
    constructor()
    execute(node: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, codePointSet: TruffleString$CodePointSet, branchProfiles: BranchProfile[]): number;
}