import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CreateRegExpNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/CreateRegExpNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSRegExpObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CreateRegExpNodeGen extends CreateRegExpNode {
    static create(paramcontext: JSContext): CreateRegExpNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: boolean, arg2Value: JSRealm, arg3Value: JSDynamicObject, arg4Value: Object, arg5Value: boolean): JSRegExpObject;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: boolean, arg2Value: JSRealm, arg3Value: JSDynamicObject, arg4Value: Object, arg5Value: boolean): JSRegExpObject;
}