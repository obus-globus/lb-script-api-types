import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { OrdinaryToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/OrdinaryToPrimitiveNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OrdinaryToPrimitiveNodeGen$Uncached extends OrdinaryToPrimitiveNode implements UnadoptableNode {
    static create(): OrdinaryToPrimitiveNode;
    static isJavaArray(paramobject: Object, paraminterop: InteropLibrary): boolean;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint): Object;
}