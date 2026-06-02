import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { BlockNode } from '../../../../../../com/oracle/truffle/api/nodes/BlockNode.d.ts'
import type { BlockNode$ElementExecutor } from '../../../../../../com/oracle/truffle/api/nodes/BlockNode$ElementExecutor.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { SequenceNode } from '../../../../../../com/oracle/truffle/js/nodes/control/SequenceNode.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractBlockNode extends StatementNode implements BlockNode$ElementExecutor<JavaScriptNode>, SequenceNode {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(statements: JavaScriptNode[])
    // private block: BlockNode<JavaScriptNode>;
    execute(frame: VirtualFrame): Object;
    executeBoolean<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): boolean;
    executeByte<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeChar<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): string;
    executeDouble<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeFloat<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeGeneric<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): Object;
    executeGeneric(frame: VirtualFrame, node: JavaScriptNode, index: number, argument: number): Object;
    executeInt<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeLong<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeShort<T extends Node>(frame: VirtualFrame, node: T, index: number, argument: number): number;
    executeVoid(frame: VirtualFrame): void;
    executeVoid(frame: VirtualFrame, node: JavaScriptNode, index: number, argument: number): void;
    getStatements(): JavaScriptNode[];
}