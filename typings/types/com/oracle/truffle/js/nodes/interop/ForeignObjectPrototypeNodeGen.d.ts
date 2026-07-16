import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { ForeignObjectPrototypeNodeGen$TruffleObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNodeGen$TruffleObject0Data.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForeignObjectPrototypeNodeGen extends ForeignObjectPrototypeNode {
    static create(): ForeignObjectPrototypeNode;
    static getUncached(): ForeignObjectPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private truffleObject0_cache: ForeignObjectPrototypeNodeGen$TruffleObject0Data;
    execute(arg0Value: Object): JSDynamicObject;
    // private executeAndSpecialize(arg0Value: Object): JSDynamicObject;
    // private truffleObject1Boundary(state_0: number, arg0Value: Object): JSDynamicObject;
}