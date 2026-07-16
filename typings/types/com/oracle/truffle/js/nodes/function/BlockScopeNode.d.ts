import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { NamedEvaluationTargetNode } from '../../../../../../com/oracle/truffle/js/nodes/function/NamedEvaluationTargetNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class BlockScopeNode extends NamedEvaluationTargetNode implements RepeatingNode {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramblock: JavaScriptNode, paramblockScopeSlot: JSFrameSlot, paramframeDescriptor: FrameDescriptor, paramparentSlot: JSFrameSlot, paramfunctionBlock: boolean, paramcaptureFunctionFrame: boolean, paramgeneratorFunctionBlock: boolean, paramhasParentBlock: boolean, paramstart: number, paramend: number): BlockScopeNode;
    static createVirtual(paramblock: JavaScriptNode, paramframeStart: number, paramframeEnd: number): BlockScopeNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(block: JavaScriptNode)
    block: JavaScriptNode;
    appendScopeFrame(frame: VirtualFrame): VirtualFrame;
    execute(frame: VirtualFrame): Object;
    executeRepeating(frame: VirtualFrame): boolean;
    executeRepeatingWithValue(frame: VirtualFrame): Object;
    executeVoid(frame: VirtualFrame): void;
    executeWithName(frame: VirtualFrame, name: Object): Object;
    exitScope(frame: VirtualFrame): void;
    exitScope(frame: VirtualFrame, yield_: boolean): void;
    getBlock(): JavaScriptNode;
    getBlockScope(frame: VirtualFrame): Object;
    getFrameEnd(): number;
    getFrameStart(): number;
    initialLoopStatus(): Object;
    isFunctionBlock(): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    setBlockScope(frame: VirtualFrame, state: Object): void;
    shouldContinue(returnValue: Object): boolean;
}