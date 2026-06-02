import type { IndexOfCodePointSet$IndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$IndexOfNode.d.ts'
import type { IndexOfCodePointSet$ScalarIndexOfNode } from '../../../../../com/oracle/truffle/api/strings/IndexOfCodePointSet$ScalarIndexOfNode.d.ts'
export abstract class IndexOfCodePointSet$IndexOfRangesNode extends IndexOfCodePointSet$ScalarIndexOfNode {
    constructor(maxCodeRange: number, ranges: number[])
    // private ranges: number[];
    codeEquals(other: IndexOfCodePointSet$IndexOfNode): boolean;
    match(c: number): boolean;
    shallowCopy(): IndexOfCodePointSet$IndexOfNode;
}