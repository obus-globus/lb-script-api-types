import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { JSArrayToDenseObjectArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayToDenseObjectArrayNode.d.ts'
import type { JSArrayToDenseObjectArrayNodeGen$FromDenseArrayData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayToDenseObjectArrayNodeGen$FromDenseArrayData.d.ts'
import type { JSArrayToDenseObjectArrayNodeGen$FromSparseArrayData } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayToDenseObjectArrayNodeGen$FromSparseArrayData.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSArrayToDenseObjectArrayNodeGen extends JSArrayToDenseObjectArrayNode {
    static create(): JSArrayToDenseObjectArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fromDenseArray_cache: JSArrayToDenseObjectArrayNodeGen$FromDenseArrayData;
    // private fromSparseArray_cache: JSArrayToDenseObjectArrayNodeGen$FromSparseArrayData;
    // private nextElementIndexNode: JSArrayNextElementIndexNode;
    // private readNode: ReadElementNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSArrayObject, arg1Value: ScriptArray, arg2Value: number): Object[];
    executeObjectArray(arg0Value: JSArrayObject, arg1Value: ScriptArray, arg2Value: number): Object[];
}