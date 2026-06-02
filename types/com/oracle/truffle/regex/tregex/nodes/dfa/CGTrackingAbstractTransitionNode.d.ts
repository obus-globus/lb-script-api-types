import type { DFAAbstractTransitionNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractTransitionNode.d.ts'
export abstract class CGTrackingAbstractTransitionNode extends DFAAbstractTransitionNode {
    constructor(id: number, successor: number)
    getCGTrackingCost(): number;
}