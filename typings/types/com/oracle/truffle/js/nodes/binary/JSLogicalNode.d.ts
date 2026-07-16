import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode$WithIntState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithIntState.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSLogicalNode extends JavaScriptNode implements ResumableNode$WithIntState {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private leftNode: JavaScriptNode;
    // private rightNode: JavaScriptNode;
    executeEvaluated(frame: VirtualFrame, leftValue: Object): Object;
    expressionToString(): string;
    getLeft(): JavaScriptNode;
    getNodeObject(): Object;
    getRight(): JavaScriptNode;
    getStateAsInt(frame: VirtualFrame, stateSlot: number): number;
    getStateAsIntAndReset(frame: VirtualFrame, stateSlot: number): number;
    getStateSlotKind(): FrameSlotKind;
    hasTag(tag: Class<Tag>): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setStateAsInt(frame: VirtualFrame, stateSlot: number, state: number): void;
}