import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { LoopConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/LoopConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ForEachIndexCallNode$CallbackNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$CallbackNode.d.ts'
import type { ForEachIndexCallNode$MaybeResultNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode$MaybeResultNode.d.ts'
import type { IsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { ReadElementNode$ReadElementArrayDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ReadElementArrayDispatchNode.d.ts'
import type { JSArrayFirstElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayFirstElementIndexNode.d.ts'
import type { JSArrayLastElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayLastElementIndexNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ForEachIndexCallNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramcallbackArgumentsNode: ForEachIndexCallNode$CallbackNode, parammaybeResultNode: ForEachIndexCallNode$MaybeResultNode, paramforward: boolean, paramcheckHasProperty: boolean): ForEachIndexCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, callbackArgumentsNode: ForEachIndexCallNode$CallbackNode, maybeResultNode: ForEachIndexCallNode$MaybeResultNode, checkHasProperty: boolean)
    // private callbackNode: ForEachIndexCallNode$CallbackNode;
    // private checkHasProperty: boolean;
    // private context: JSContext;
    // private firstElementIndexNode: JSArrayFirstElementIndexNode;
    // private hasPropertyNode: JSHasPropertyNode;
    // private interop: InteropLibrary;
    // private isArrayNode: IsArrayNode;
    // private lastElementIndexNode: JSArrayLastElementIndexNode;
    // private loopCond: LoopConditionProfile;
    // private maybeResultNode: ForEachIndexCallNode$MaybeResultNode;
    // private outOfBoundsBranch: BranchProfile;
    // private readElementNode: ReadElementNode$ReadElementArrayDispatchNode;
    // private targetClassProfile: JSClassProfile;
    // private toJSTypeNode: ImportValueNode;
    callback(index: number, value: Object, target: Object, callback: Object, callbackThisArg: Object, currentResult: Object): Object;
    executeForEachIndex(target: Object, callback: Object, callbackThisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    executeForEachIndexFast(target: JSDynamicObject, callback: Object, callbackThisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    executeForEachIndexSlow(target: Object, callback: Object, callbackThisArg: Object, fromIndex: number, length: number, initialResult: Object): Object;
    firstElementIndex(target: JSDynamicObject, length: number): number;
    foreignRead(target: Object, index: number, isForeignArray: boolean): Object;
    getElement(target: Object, index: number, isForeign: boolean, isForeignArray: boolean): Object;
    getInterop(): InteropLibrary;
    hasProperty(target: Object, index: number): boolean;
    isOutOfBounds(view: Object): boolean;
    lastElementIndex(target: JSDynamicObject, length: number): number;
    readElementInBounds(target: JSDynamicObject, index: number): Object;
}