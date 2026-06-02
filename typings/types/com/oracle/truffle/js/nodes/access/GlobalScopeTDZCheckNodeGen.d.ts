import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GlobalScopeTDZCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GlobalScopeTDZCheckNode.d.ts'
import type { GlobalScopeTDZCheckNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/GlobalScopeTDZCheckNodeGen$CachedData.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GlobalScopeTDZCheckNodeGen extends GlobalScopeTDZCheckNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext): JavaScriptNode;
    static create(paramcontext: JSContext, paramvarName: TruffleString): GlobalScopeTDZCheckNode;
    static createWithTDZCheck(paramcontext: JSContext, paramvarName: TruffleString): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, varName: TruffleString)
    // private cached_cache: GlobalScopeTDZCheckNodeGen$CachedData;
    // private state_0_: number;
    // private uncached_getNode_: PropertyGetNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(scopeNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    removeCached_(s0_: GlobalScopeTDZCheckNodeGen$CachedData): void;
}