import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSGetLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSToObjectArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectArrayNode.d.ts'
import type { JSToObjectArrayNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectArrayNodeGen$ForeignObject0Data.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToObjectArrayNodeGen extends JSToObjectArrayNode {
    static create(paramcontext: JSContext, paramoperand: JavaScriptNode): JavaScriptNode;
    static create(): JSToObjectArrayNode;
    static create(paramnullOrUndefinedAsEmptyArray: boolean): JSToObjectArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(nullOrUndefinedAsEmptyArray: boolean)
    // private foreignObject0_cache: JSToObjectArrayNodeGen$ForeignObject0Data;
    // private foreignObject1_foreignConvertNode_: ImportValueNode;
    // private state_0_: number;
    // private toArray_getLengthNode_: JSGetLengthNode;
    // private toArray_readNode_: ReadElementNode;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number): Object[];
    executeObjectArray(arg0Value: Object, arg1Value: number): Object[];
    // private fallbackGuard_(state_0: number, arg0Value: Object, arg1Value: number): boolean;
    // private foreignObject1Boundary(state_0: number, arg0Value: Object, arg1Value: number, foreignConvertNode__: ImportValueNode): Object[];
}