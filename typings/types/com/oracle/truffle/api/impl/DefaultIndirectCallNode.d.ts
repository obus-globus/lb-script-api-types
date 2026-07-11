import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { IndirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultIndirectCallNode extends IndirectCallNode {
    static create(): IndirectCallNode;
    static getUncached(): IndirectCallNode;
    constructor()
    call(target: CallTarget, ...arguments: Object[]): Object;
}