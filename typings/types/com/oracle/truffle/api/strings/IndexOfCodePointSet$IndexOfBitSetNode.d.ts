import type { IndexOfCodePointSet$IndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfNode.d.ts'
import type { IndexOfCodePointSet$ScalarIndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$ScalarIndexOfNode.d.ts'
export abstract class IndexOfCodePointSet$IndexOfBitSetNode extends IndexOfCodePointSet$ScalarIndexOfNode {
    constructor(maxCodeRange: number, bitSet: number[])
    // private bitSet: number[];
    codeEquals(other: IndexOfCodePointSet$IndexOfNode): boolean;
    match(codepoint: number): boolean;
    shallowCopy(): IndexOfCodePointSet$IndexOfNode;
}