import type { IndexOfCodePointSet$IndexOfOp } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfOp.d.ts'
import type { IndexOfCodePointSet$ScalarIndexOfOp } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$ScalarIndexOfOp.d.ts'
export class IndexOfCodePointSet$IndexOfBitSetOp extends IndexOfCodePointSet$ScalarIndexOfOp {
    constructor(maxCodeRange: number, bitSet: number[])
    // private bitSet: number[];
    codeEquals(other: IndexOfCodePointSet$IndexOfOp): boolean;
    match(codepoint: number): boolean;
}