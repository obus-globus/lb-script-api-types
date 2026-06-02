import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { FrameDescriptorProvider } from '../../../../../../com/oracle/truffle/js/nodes/FrameDescriptorProvider.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { BlockScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/BlockScopeNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BlockScopeNode$FrameBlockScopeNode extends BlockScopeNode implements FrameDescriptorProvider, ResumableNode$WithObjectState {
    static BREAK_LOOP_STATUS: Object;
    static CONTINUE_LOOP_STATUS: Object;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramblock: JavaScriptNode, paramblockScopeSlot: JSFrameSlot, paramframeDescriptor: FrameDescriptor, paramparentSlot: JSFrameSlot, paramfunctionBlock: boolean, paramcaptureFunctionFrame: boolean, paramgeneratorFunctionBlock: boolean, paramhasParentBlock: boolean, paramstart: number, paramend: number): BlockScopeNode;
    static createVirtual(paramblock: JavaScriptNode, paramframeStart: number, paramframeEnd: number): BlockScopeNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(block: JavaScriptNode, blockScopeSlot: number, frameDescriptor: FrameDescriptor, parentSlot: number, functionBlock: boolean, captureFunctionFrame: boolean, generatorFunctionBlock: boolean, hasParentBlock: boolean, start: number, end: number)
    // private blockScopeSlot: number;
    // private captureFunctionFrame: boolean;
    // private end: number;
    readonly frameDescriptor: FrameDescriptor;
    readonly functionBlock: boolean;
    // private generatorFunctionBlock: boolean;
    // private hasParentBlock: boolean;
    // private parentSlot: number;
    // private start: number;
    appendScopeFrame(frame: VirtualFrame): VirtualFrame;
    // private clearVirtualSlots(frame: VirtualFrame): void;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    exitScope(frame: VirtualFrame, yield_: boolean): void;
    getBlockScope(frame: VirtualFrame): Object;
    getFrameDescriptor(): FrameDescriptor;
    getFrameEnd(): number;
    getFrameStart(): number;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    isFunctionBlock(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setBlockScope(frame: VirtualFrame, state: Object): void;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}