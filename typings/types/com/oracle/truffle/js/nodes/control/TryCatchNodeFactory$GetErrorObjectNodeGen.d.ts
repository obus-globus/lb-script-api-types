import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class TryCatchNodeFactory$GetErrorObjectNodeGen extends TryCatchNode$GetErrorObjectNode {
    static create(paramcontext: JSContext): TryCatchNode$GetErrorObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    execute(arg0Value: Throwable): Object;
    // private executeAndSpecialize(arg0Value: Throwable): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Throwable): boolean;
}