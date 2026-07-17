import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { DynamicObject$PutNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { WeakMapPrototypeBuiltins$WeakMapSetHelperNode } from '../../../../../com/oracle/truffle/js/builtins/WeakMapPrototypeBuiltins$WeakMapSetHelperNode.d.ts'
import type { JSWeakMapObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSWeakMapObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WeakMapPrototypeBuiltinsFactory$WeakMapSetHelperNodeGen extends WeakMapPrototypeBuiltins$WeakMapSetHelperNode {
    static create(): WeakMapPrototypeBuiltins$WeakMapSetHelperNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private setJSObject_invertedGetter_: DynamicObject$GetNode;
    // private setJSObject_invertedSetter_: DynamicObject$PutNode;
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: JSWeakMapObject, arg1Value: Object, arg2Value: Object): Object;
    // private executeAndSpecialize(arg0Value: JSWeakMapObject, arg1Value: Object, arg2Value: Object): Object;
}