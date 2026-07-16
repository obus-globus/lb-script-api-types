import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { CoerceOptionsToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CoerceOptionsToObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CoerceOptionsToObjectNodeGen extends CoerceOptionsToObjectNode {
    static create(paramcontext: JSContext): CoerceOptionsToObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private fromOtherThanUndefined_toObjectNode_: JSToObjectNode;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
}