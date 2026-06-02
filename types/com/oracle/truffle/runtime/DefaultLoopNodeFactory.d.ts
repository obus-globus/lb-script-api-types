import type { LoopNode } from '../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { RepeatingNode } from '../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { LoopNodeFactory } from '../../../../com/oracle/truffle/runtime/LoopNodeFactory.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultLoopNodeFactory extends Object implements LoopNodeFactory {
    constructor()
    create(repeatingNode: RepeatingNode): LoopNode;
}