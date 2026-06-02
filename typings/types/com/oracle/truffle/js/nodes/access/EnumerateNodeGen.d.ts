import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { EnumerateNode } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerateNode.d.ts'
import type { EnumerateNodeGen$EnumerateTruffleObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerateNodeGen$EnumerateTruffleObject0Data.d.ts'
import type { EnumerateNodeGen$EnumerateTruffleObject1Data } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerateNodeGen$EnumerateTruffleObject1Data.d.ts'
import type { EnumerateNodeGen$NonObjectData } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerateNodeGen$NonObjectData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EnumerateNodeGen extends EnumerateNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramvalues: boolean, paramrequireIterable: boolean): EnumerateNode;
    static create(paramcontext: JSContext, paramtarget: JavaScriptNode, paramvalues: boolean): EnumerateNode;
    static create(paramcontext: JSContext, paramvalues: boolean, paramrequireIterable: boolean, paramtargetNode: JavaScriptNode): EnumerateNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, values: boolean, requireIterable: boolean, targetNode: JavaScriptNode)
    // private enumerateJSAdapter_enumerateCallbackResultNode_: EnumerateNode;
    // private enumerateTruffleObject0_cache: EnumerateNodeGen$EnumerateTruffleObject0Data;
    // private enumerateTruffleObject1_cache: EnumerateNodeGen$EnumerateTruffleObject1Data;
    // private nonObject_cache: EnumerateNodeGen$NonObjectData;
    // private state_0_: number;
    // private enumerateTruffleObject1Boundary(state_0: number, s4_: EnumerateNodeGen$EnumerateTruffleObject1Data, targetNodeValue: Object): JSObject;
    // private enumerateTruffleObject1Boundary0(state_0: number, s4_: EnumerateNodeGen$EnumerateTruffleObject1Data, targetNodeValue_: Object): JSObject;
    execute(frameValue: VirtualFrame): JSObject;
    execute(targetNodeValue: Object): JSObject;
    // private executeAndSpecialize(targetNodeValue: Object): JSObject;
    executeVoid(frameValue: VirtualFrame): void;
}