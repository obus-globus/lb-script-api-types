import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { ToPrimitiveBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToPrimitiveBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToPrimitiveNode extends ToPrimitiveBaseNode {
    static create(): JSToPrimitiveNode;
    static getUncached(): JSToPrimitiveNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static tryHostObjectToPrimitive(paramobject: Object, paramhint: JSToPrimitiveNode$Hint, paraminterop: InteropLibrary): Object;
    constructor()
    execute(value: Object, hint: JSToPrimitiveNode$Hint): Object;
    executeHintDefault(value: Object): Object;
    executeHintNumber(value: Object): Object;
    executeHintString(value: Object): Object;
}