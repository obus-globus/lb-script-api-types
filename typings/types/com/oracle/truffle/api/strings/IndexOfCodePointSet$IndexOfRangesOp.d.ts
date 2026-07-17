import type { IndexOfCodePointSet$IndexOfOp } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfOp.d.ts'
import type { IndexOfCodePointSet$ScalarIndexOfOp } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$ScalarIndexOfOp.d.ts'
export class IndexOfCodePointSet$IndexOfRangesOp extends IndexOfCodePointSet$ScalarIndexOfOp {
    constructor(maxCodeRange: number, ranges: number[])
    // private ranges: number[];
    codeEquals(other: IndexOfCodePointSet$IndexOfOp): boolean;
    match(c: number): boolean;
}