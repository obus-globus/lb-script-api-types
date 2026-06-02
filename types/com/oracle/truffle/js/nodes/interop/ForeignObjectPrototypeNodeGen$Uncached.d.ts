import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForeignObjectPrototypeNodeGen$Uncached extends ForeignObjectPrototypeNode implements UnadoptableNode {
    static create(): ForeignObjectPrototypeNode;
    static getUncached(): ForeignObjectPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): JSDynamicObject;
}