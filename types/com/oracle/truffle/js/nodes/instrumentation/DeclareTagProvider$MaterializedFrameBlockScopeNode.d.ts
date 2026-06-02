import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { BlockScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/BlockScopeNode.d.ts'
import type { BlockScopeNode$FrameBlockScopeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/BlockScopeNode$FrameBlockScopeNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DeclareTagProvider$MaterializedFrameBlockScopeNode extends BlockScopeNode$FrameBlockScopeNode {
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
    constructor(original: JavaScriptNode, block: JavaScriptNode, blockScopeSlot: number, frameDescriptor: FrameDescriptor, parentSlot: number, functionBlock: boolean, captureFunctionFrame: boolean, generatorFunctionBlock: boolean, hasParentBlock: boolean, start: number, end: number)
    constructor(block: JavaScriptNode, blockScopeSlot: number, frameDescriptor: FrameDescriptor, parentSlot: number, functionBlock: boolean, captureFunctionFrame: boolean, generatorFunctionBlock: boolean, hasParentBlock: boolean, start: number, end: number, declarations: JavaScriptNode[])
    // private declarations: JavaScriptNode[];
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private executeDeclarations(frame: VirtualFrame): void;
    executeVoid(frame: VirtualFrame): void;
}