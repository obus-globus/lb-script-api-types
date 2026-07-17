import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractDisposeResourcesNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractDisposeResourcesNode.d.ts'
import type { DisposeCapability } from '../../../../../../com/oracle/truffle/js/runtime/util/DisposeCapability.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DisposeResourcesNode extends AbstractDisposeResourcesNode {
    static create(): DisposeResourcesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(capability: DisposeCapability, currentError: Object): void;
}