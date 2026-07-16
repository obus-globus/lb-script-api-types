import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSArrayDeleteRangeNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayDeleteRangeNode.d.ts'
import type { JSArrayDeleteRangeNodeGen$DenseArrayData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayDeleteRangeNodeGen$DenseArrayData.d.ts'
import type { JSArrayDeleteRangeNodeGen$SparseArrayData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayDeleteRangeNodeGen$SparseArrayData.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { DeletePropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class JSArrayDeleteRangeNodeGen extends JSArrayDeleteRangeNode {
    static create(paramcontext: JSContext, paramorThrow: boolean): JSArrayDeleteRangeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, orThrow: boolean)
    // private deletePropertyNode: DeletePropertyNode;
    // private denseArray_cache: JSArrayDeleteRangeNodeGen$DenseArrayData;
    // private nextElementIndexNode: JSArrayNextElementIndexNode;
    // private sparseArray_cache: JSArrayDeleteRangeNodeGen$SparseArrayData;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: number): void;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: number): void;
}