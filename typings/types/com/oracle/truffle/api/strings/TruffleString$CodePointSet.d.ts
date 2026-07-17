import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { IndexOfCodePointSet$IndexOfOp } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfOp.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleString$CodePointSet extends Object {
    static fromRanges(paramranges: number[], paramencoding: TruffleString$Encoding): TruffleString$CodePointSet;
    constructor(encoding: TruffleString$Encoding, indexOfOps: IndexOfCodePointSet$IndexOfOp[])
    // private encoding: TruffleString$Encoding;
    // private indexOfOps: IndexOfCodePointSet$IndexOfOp[];
    // private isUTF16Or32: boolean;
    doIndexOf(location: Node, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, fromIndex: number, toIndex: number, branchProfiles: BranchProfile[]): number;
    isIntrinsicCandidate(codeRange: TruffleString$CodeRange): boolean;
}