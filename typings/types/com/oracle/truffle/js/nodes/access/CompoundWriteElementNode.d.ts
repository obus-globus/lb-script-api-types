import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { RequireObjectCoercibleNode } from '../../../../../../com/oracle/truffle/js/nodes/access/RequireObjectCoercibleNode.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CompoundWriteElementNode extends WriteElementNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramtargetNode: JavaScriptNode, paramindexNode: JavaScriptNode, paramvalueNode: JavaScriptNode, paramwriteIndexNode: JSWriteFrameSlotNode, paramcontext: JSContext, paramisStrict: boolean): CompoundWriteElementNode;
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
    constructor(targetNode: JavaScriptNode, indexNode: JavaScriptNode, valueNode: JavaScriptNode, writeIndexNode: JSWriteFrameSlotNode, context: JSContext, isStrict: boolean, writeOwn: boolean)
    // private requireObjectCoercibleNode: RequireObjectCoercibleNode;
    // private toArrayIndexNode: ToArrayIndexNode;
    // private writeIndexNode: JSWriteFrameSlotNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createMaterialized(newTarget: JavaScriptNode, newIndex: JavaScriptNode, newValue: JavaScriptNode): WriteElementNode;
    executeWithTargetAndIndex(frame: VirtualFrame, target: Object, index: Object, receiver: Object): Object;
    executeWithTargetAndIndex(frame: VirtualFrame, target: Object, index: number, receiver: Object): Object;
    executeWithTargetAndIndexDouble(frame: VirtualFrame, target: Object, index: Object, receiver: Object): number;
    executeWithTargetAndIndexDouble(frame: VirtualFrame, target: Object, index: number, receiver: Object): number;
    executeWithTargetAndIndexInt(frame: VirtualFrame, target: Object, index: Object, receiver: Object): number;
    executeWithTargetAndIndexInt(frame: VirtualFrame, target: Object, index: number, receiver: Object): number;
    // private requireObjectCoercible(target: Object, index: Object): void;
    // private requireObjectCoercible(target: Object, index: number): void;
    // private toArrayIndex(index: Object): Object;
    // private writeIndex(frame: VirtualFrame, index: Object): void;
    // private writeIndex(frame: VirtualFrame, index: number): void;
}