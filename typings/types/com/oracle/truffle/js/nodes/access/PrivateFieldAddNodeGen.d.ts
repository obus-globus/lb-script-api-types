import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { IsExtensibleNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsExtensibleNode.d.ts'
import type { PrivateFieldAddNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PrivateFieldAddNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrivateFieldAddNodeGen extends PrivateFieldAddNode {
    static create(): PrivateFieldAddNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fieldAdd_isExtensible_: IsExtensibleNode;
    // private fieldAdd_putField_: DynamicObject$PutNode;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: Object, arg2Value: Object): void;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object): void;
    // private fallbackGuard_(state_0: number, arg0Value: Object, arg1Value: Object, arg2Value: Object): boolean;
}