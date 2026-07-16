import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { JSFunctionCallNode$AbstractCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$AbstractCacheNode.d.ts'
import type { JSFunctionCallNode$JSFunctionCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$JSFunctionCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptFunctionCallNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptFunctionCallNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionCallNode extends JavaScriptNode implements JavaScriptFunctionCallNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramisNew: boolean): JSFunctionCallNode;
    static create(paramisNew: boolean, paramisNewTarget: boolean): JSFunctionCallNode;
    static createCall(): JSFunctionCallNode;
    static createCall(paramfunction: JavaScriptNode, paramtarget: JavaScriptNode, paramarguments: JavaScriptNode[], paramisNew: boolean, paramisNewTarget: boolean): JSFunctionCallNode;
    static createInvoke(paramtargetFunction: JSTargetableNode, paramarguments: JavaScriptNode[], paramisNew: boolean, paramisNewTarget: boolean): JSFunctionCallNode;
    static createNew(): JSFunctionCallNode;
    static createNewTarget(): JSFunctionCallNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static getUncachedCall(): JSFunctionCallNode;
    static getUncachedNew(): JSFunctionCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(flags: number)
    // private cacheNode: JSFunctionCallNode$AbstractCacheNode;
    // private flags: number;
    evaluateReceiver(frame: VirtualFrame, target: Object): Object;
    // private executeAndSpecialize(arguments: Object[]): Object;
    executeCall(arguments: Object[]): Object;
    getNodeObject(): Object;
    getPropertyKey(): Object;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    // private insertAtFront<T extends JSFunctionCallNode$AbstractCacheNode>(newNode: T, head: JSFunctionCallNode$AbstractCacheNode): T;
    isInvoke(): boolean;
    isNew(): boolean;
    // private replaceCached<T extends JSFunctionCallNode$AbstractCacheNode>(newNode: T, head: JSFunctionCallNode$AbstractCacheNode, obsoleteNode: JSFunctionCallNode$AbstractCacheNode, previousNode: JSFunctionCallNode$AbstractCacheNode): T;
    // private specializeDirectCall(functionObj: JSFunctionObject, head: JSFunctionCallNode$AbstractCacheNode): JSFunctionCallNode$AbstractCacheNode;
    // private specializeDirectCallInstance(functionObj: JSFunctionObject, functionData: JSFunctionData, head: JSFunctionCallNode$AbstractCacheNode): JSFunctionCallNode$JSFunctionCacheNode;
    // private specializeDirectCallShared(functionObj: JSFunctionObject, functionData: JSFunctionData, head: JSFunctionCallNode$AbstractCacheNode): JSFunctionCallNode$JSFunctionCacheNode;
    // private specializeForeignCall(arguments: Object[], head: JSFunctionCallNode$AbstractCacheNode): JSFunctionCallNode$AbstractCacheNode;
    // private specializeGenericFunction(head: JSFunctionCallNode$AbstractCacheNode, hasCached: boolean): JSFunctionCallNode$AbstractCacheNode;
    // private specializeProxyCall(function_: Object, context: JSContext): JSFunctionCallNode$AbstractCacheNode;
}