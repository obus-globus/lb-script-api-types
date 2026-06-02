import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { WriteElementNode$WriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$WriteElementTypeCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteElementNode extends JSTargetableNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramtargetNode: JavaScriptNode, paramindexNode: JavaScriptNode, paramvalueNode: JavaScriptNode, paramcontext: JSContext, paramisStrict: boolean): WriteElementNode;
    static create(paramcontext: JSContext, paramisStrict: boolean): WriteElementNode;
    static create(paramcontext: JSContext, paramisStrict: boolean, paramwriteOwn: boolean): WriteElementNode;
    static createCachedInterop(): WriteElementNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(targetNode: JavaScriptNode, indexNode: JavaScriptNode, valueNode: JavaScriptNode, context: JSContext, isStrict: boolean, writeOwn: boolean)
    readonly context: JSContext;
    // private indexNode: JavaScriptNode;
    // private indexState: number;
    // private isStrict: boolean;
    // private targetNode: JavaScriptNode;
    // private typeCacheNode: WriteElementNode$WriteElementTypeCacheNode;
    // private valueNode: JavaScriptNode;
    // private writeOwn: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createMaterialized(newTarget: JavaScriptNode, newIndex: JavaScriptNode, newValue: JavaScriptNode): WriteElementNode;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    executeDouble(frame: VirtualFrame): number;
    executeInt(frame: VirtualFrame): number;
    executeWithTarget(frame: VirtualFrame, target: Object): Object;
    executeWithTarget(frame: VirtualFrame, target: Object, receiver: Object): Object;
    executeWithTargetAndIndex(frame: VirtualFrame, target: Object, index: Object, receiver: Object): Object;
    executeWithTargetAndIndex(frame: VirtualFrame, target: Object, index: number, receiver: Object): Object;
    executeWithTargetAndIndexAndValue(target: Object, index: Object, value: Object): void;
    executeWithTargetAndIndexAndValue(target: Object, index: Object, value: Object, receiver: Object): void;
    executeWithTargetAndIndexAndValue(target: Object, index: number, value: Object): void;
    executeWithTargetAndIndexAndValue(target: Object, index: number, value: Object, receiver: Object): void;
    executeWithTargetAndIndexAndValue(target: Object, index: number, value: Object): void;
    executeWithTargetAndIndexAndValue(target: Object, index: number, value: Object, receiver: Object): void;
    executeWithTargetAndIndexDouble(frame: VirtualFrame, target: Object, index: Object, receiver: Object): number;
    executeWithTargetAndIndexDouble(frame: VirtualFrame, target: Object, index: number, receiver: Object): number;
    executeWithTargetAndIndexInt(frame: VirtualFrame, target: Object, index: Object, receiver: Object): number;
    executeWithTargetAndIndexInt(frame: VirtualFrame, target: Object, index: number, receiver: Object): number;
    executeWithTargetDouble(frame: VirtualFrame, target: Object, receiver: Object): number;
    executeWithTargetInt(frame: VirtualFrame, target: Object, receiver: Object): number;
    getContext(): JSContext;
    getElement(): JavaScriptNode;
    getTarget(): JavaScriptNode;
    getValue(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    // private initTypeCacheNode(): void;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    isStrict(): boolean;
    isSuperProperty(): boolean;
    // private materializationNeeded(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    writeOwn(): boolean;
}