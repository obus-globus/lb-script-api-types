import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { ForEachIndexCallNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode.d.ts'
import type { ForEachIndexCallNode$CallbackNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$CallbackNode.d.ts'
import type { ForEachIndexCallNode$MaybeResultNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$MaybeResultNode.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ForEachIndexCallNode$ForwardForEachIndexCallNode extends ForEachIndexCallNode {
    static create(paramcontext: JSContext, paramcallbackArgumentsNode: ForEachIndexCallNode$CallbackNode, parammaybeResultNode: ForEachIndexCallNode$MaybeResultNode, paramforward: boolean, paramcheckHasProperty: boolean): ForEachIndexCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, callbackArgumentsNode: ForEachIndexCallNode$CallbackNode, maybeResultNode: ForEachIndexCallNode$MaybeResultNode, checkHasProperty: boolean)
    // private fromIndexZero: ConditionProfile;
    // private nextElementIndexNode: JSArrayNextElementIndexNode;
    executeForEachIndexFast(target: JSDynamicObject, callback: Object, callbackThisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    executeForEachIndexSlow(target: Object, callback: Object, callbackThisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    // private nextElementIndex(target: JSDynamicObject, currentIndex: number, length: number): number;
}