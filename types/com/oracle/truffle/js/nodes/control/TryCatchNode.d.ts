import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { BlockScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/BlockScopeNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class TryCatchNode extends StatementNode implements ResumableNode$WithObjectState {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramtryBlock: JavaScriptNode, paramcatchBlock: JavaScriptNode, paramwriteErrorVar: JSWriteFrameSlotNode, paramblockScope: BlockScopeNode, paramdestructuring: JavaScriptNode, paramconditionExpression: JavaScriptNode): TryCatchNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, tryBlock: JavaScriptNode, catchBlock: JavaScriptNode, writeErrorVar: JSWriteFrameSlotNode, blockScope: BlockScopeNode, destructuring: JavaScriptNode, conditionExpression: JavaScriptNode)
    // private blockScope: BlockScopeNode;
    // private catchBlock: JavaScriptNode;
    // private conditionExpression: JavaScriptNode;
    // private context: JSContext;
    // private destructuring: JavaScriptNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private tryBlock: JavaScriptNode;
    // private writeErrorVar: JSWriteFrameSlotNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private executeCatch(frame: VirtualFrame, ex: Throwable): Object;
    executeVoid(frame: VirtualFrame): void;
    getNodeObject(): Object;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    hasTag(tag: Class<Tag>): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    // private prepareCatch(frame: VirtualFrame, ex: Throwable): boolean;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}