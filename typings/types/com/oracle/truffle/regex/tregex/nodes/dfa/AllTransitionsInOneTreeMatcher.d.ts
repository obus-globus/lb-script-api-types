import type { AllTransitionsInOneTreeMatcher$AllTransitionsInOneTreeLeafMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/AllTransitionsInOneTreeMatcher$AllTransitionsInOneTreeLeafMatcher.d.ts'
import type { Matchers } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/Matchers.d.ts'
export class AllTransitionsInOneTreeMatcher extends Matchers {
    constructor(ranges: number[], successors: number[], leafMatchers: AllTransitionsInOneTreeMatcher$AllTransitionsInOneTreeLeafMatcher[])
    // private leafMatchers: AllTransitionsInOneTreeMatcher$AllTransitionsInOneTreeLeafMatcher[];
    // private ranges: number[];
    // private successors: number[];
    // private checkMatchLeaf(iLeaf: number, c: number): number;
    checkMatchTree(c: number): number;
    // private checkMatchTree(fromIndex: number, toIndex: number, c: number): number;
    toString(): string;
}