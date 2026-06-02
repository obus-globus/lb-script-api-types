import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class IndirectCallNode extends Node {
    static create(): IndirectCallNode;
    static getUncached(): IndirectCallNode;
    constructor()
    call(target: CallTarget, arguments: Object[]): Object;
}