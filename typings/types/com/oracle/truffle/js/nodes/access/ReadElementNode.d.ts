import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadNode } from '../../../../../../com/oracle/truffle/js/nodes/ReadNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { ReadElementNode$ReadElementTypeCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ReadElementTypeCacheDispatchNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNode extends JSTargetableNode implements ReadNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramtargetNode: JavaScriptNode, paramindexNode: JavaScriptNode, paramcontext: JSContext): ReadElementNode;
    static create(paramcontext: JSContext): ReadElementNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(targetNode: JavaScriptNode, indexNode: JavaScriptNode, context: JSContext)
    readonly context: JSContext;
    readonly indexNode: JavaScriptNode;
    // private indexState: number;
    // private targetNode: JavaScriptNode;
    // private typeCacheNode: ReadElementNode$ReadElementTypeCacheDispatchNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    executeDouble(frame: VirtualFrame): number;
    executeInt(frame: VirtualFrame): number;
    executeTypeDispatch(target: Object, index: Object, receiver: Object, defaultValue: Object): Object;
    executeTypeDispatch(target: Object, index: number, receiver: Object, defaultValue: Object): Object;
    executeTypeDispatchDouble(target: Object, index: Object, receiver: Object, defaultValue: Object): number;
    executeTypeDispatchDouble(target: Object, index: number, receiver: Object, defaultValue: Object): number;
    executeTypeDispatchInt(target: Object, index: Object, receiver: Object, defaultValue: Object): number;
    executeTypeDispatchInt(target: Object, index: number, receiver: Object, defaultValue: Object): number;
    executeWithTarget(frame: VirtualFrame, target: Object): Object;
    executeWithTarget(frame: VirtualFrame, target: Object, receiver: Object): Object;
    executeWithTargetAndIndex(target: Object, index: Object): Object;
    executeWithTargetAndIndex(target: Object, index: Object, receiver: Object): Object;
    executeWithTargetAndIndex(target: Object, index: number): Object;
    executeWithTargetAndIndex(target: Object, index: number, receiver: Object): Object;
    executeWithTargetAndIndexDouble(target: Object, index: Object, receiver: Object): number;
    executeWithTargetAndIndexDouble(target: Object, index: number, receiver: Object): number;
    executeWithTargetAndIndexInt(target: Object, index: Object, receiver: Object): number;
    executeWithTargetAndIndexInt(target: Object, index: number, receiver: Object): number;
    executeWithTargetAndIndexOrDefault(target: Object, index: Object, defaultValue: Object): Object;
    executeWithTargetDouble(frame: VirtualFrame, target: Object, receiver: Object): number;
    executeWithTargetInt(frame: VirtualFrame, target: Object, receiver: Object): number;
    expressionToString(): string;
    getContext(): JSContext;
    getElement(): JavaScriptNode;
    getIndexNode(): JavaScriptNode;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    // private initTypeCacheDispatchNode(): ReadElementNode$ReadElementTypeCacheDispatchNode;
    // private materializationNeeded(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}