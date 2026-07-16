import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JSInteropInstantiateNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropInstantiateNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropInstantiateNodeGen$Uncached extends JSInteropInstantiateNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: JSDynamicObject, arg1Value: Object[]): Object;
}