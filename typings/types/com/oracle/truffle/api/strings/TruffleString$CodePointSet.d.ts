import type { IndexOfCodePointSet$IndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfNode.d.ts'
import type { TStringInternalNodes$IndexOfCodePointSetNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$IndexOfCodePointSetNode.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleString$CodePointSet extends Object {
    static fromRanges(paramranges: number[], paramencoding: TruffleString$Encoding): TruffleString$CodePointSet;
    constructor(ranges: number[], encoding: TruffleString$Encoding, indexOfNodes: IndexOfCodePointSet$IndexOfNode[])
    // private encoding: TruffleString$Encoding;
    // private indexOfNodes: IndexOfCodePointSet$IndexOfNode[];
    // private ranges: number[];
    createNode(): TStringInternalNodes$IndexOfCodePointSetNode;
    isIntrinsicCandidate(codeRange: TruffleString$CodeRange): boolean;
}