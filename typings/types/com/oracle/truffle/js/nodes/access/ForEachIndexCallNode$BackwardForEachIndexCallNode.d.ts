import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ForEachIndexCallNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode.d.ts'
import type { ForEachIndexCallNode$CallbackNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$CallbackNode.d.ts'
import type { ForEachIndexCallNode$MaybeResultNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$MaybeResultNode.d.ts'
import type { JSArrayPreviousElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayPreviousElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForEachIndexCallNode$BackwardForEachIndexCallNode extends ForEachIndexCallNode {
    static create(paramcontext: JSContext, paramcallbackArgumentsNode: ForEachIndexCallNode$CallbackNode, parammaybeResultNode: ForEachIndexCallNode$MaybeResultNode, paramforward: boolean, paramcheckHasProperty: boolean): ForEachIndexCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, callbackArgumentsNode: ForEachIndexCallNode$CallbackNode, maybeResultNode: ForEachIndexCallNode$MaybeResultNode, checkHasProperty: boolean)
    // private previousElementIndexNode: JSArrayPreviousElementIndexNode;
    executeForEachIndexFast(target: JSDynamicObject, callback: Object, callbackThisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    executeForEachIndexSlow(target: Object, callback: Object, callbackThisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    // private previousElementIndex(target: JSDynamicObject, currentIndex: number): number;
}