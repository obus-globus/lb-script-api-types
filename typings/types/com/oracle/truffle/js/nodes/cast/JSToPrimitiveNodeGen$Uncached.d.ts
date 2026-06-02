import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToPrimitiveNodeGen$Uncached extends JSToPrimitiveNode implements UnadoptableNode {
    static create(): JSToPrimitiveNode;
    static getUncached(): JSToPrimitiveNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static tryHostObjectToPrimitive(paramobject: Object, paramhint: JSToPrimitiveNode$Hint, paraminterop: InteropLibrary): Object;
    private constructor()
    execute(arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint): Object;
}