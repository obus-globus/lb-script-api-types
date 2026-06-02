import type { DFAAbstractNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractNode.d.ts'
import type { JsonConvertible } from '../../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
export abstract class DFAAbstractStateNode extends DFAAbstractNode implements JsonConvertible {
    constructor(id: number, successors: number[])
    readonly successors: number[];
    getSuccessors(): number[];
}