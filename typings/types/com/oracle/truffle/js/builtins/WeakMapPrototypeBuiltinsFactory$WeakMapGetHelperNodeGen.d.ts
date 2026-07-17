import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { WeakMapPrototypeBuiltins$WeakMapGetHelperNode } from '../../../../../com/oracle/truffle/js/builtins/WeakMapPrototypeBuiltins$WeakMapGetHelperNode.d.ts'
import type { JSWeakMapObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSWeakMapObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WeakMapPrototypeBuiltinsFactory$WeakMapGetHelperNodeGen extends WeakMapPrototypeBuiltins$WeakMapGetHelperNode {
    static create(paramthrowForInvalidKey: boolean): WeakMapPrototypeBuiltins$WeakMapGetHelperNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(throwForInvalidKey: boolean)
    // private getJSObject_invertedGetter_: DynamicObject$GetNode;
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: JSWeakMapObject, arg1Value: Object): Object;
    // private executeAndSpecialize(arg0Value: JSWeakMapObject, arg1Value: Object): Object;
}