import type { DFAAbstractStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractStateNode.d.ts'
import type { JsonValue } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
export class DFAInitialStateNode extends DFAAbstractStateNode {
    constructor(successors: number[], cgLastTransition: number[])
    readonly cgLastTransition: number[];
    // private hasUnanchoredEntry: boolean;
    getCgLastTransition(): number[];
    getPrefixLength(): number;
    hasUnAnchoredEntry(): boolean;
    toJson(): JsonValue;
}