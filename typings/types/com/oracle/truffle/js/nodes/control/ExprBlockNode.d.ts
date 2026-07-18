import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractBlockNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractBlockNode.d.ts'
import type { SequenceNode } from '../../../../../../com/oracle/truffle/js/nodes/control/SequenceNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExprBlockNode extends AbstractBlockNode implements SequenceNode {
    static EMPTY: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createExprBlock(paramstatements: JavaScriptNode[]): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(statements: JavaScriptNode[])
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    executeBoolean(frame: VirtualFrame): boolean;
    executeBoolean(frame: VirtualFrame, node: JavaScriptNode, index: number, argument: number): boolean;
    executeDouble(frame: VirtualFrame): number;
    executeDouble(frame: VirtualFrame, node: JavaScriptNode, index: number, argument: number): number;
    executeInt(frame: VirtualFrame): number;
    executeInt(frame: VirtualFrame, node: JavaScriptNode, index: number, argument: number): number;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}