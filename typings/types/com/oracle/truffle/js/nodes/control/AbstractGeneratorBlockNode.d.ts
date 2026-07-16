import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractBlockNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractBlockNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractGeneratorBlockNode extends AbstractBlockNode {
    static EMPTY: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(statements: JavaScriptNode[], stateSlot: number)
    // private stateSlot: number;
    execute(frame: VirtualFrame): Object;
    executeGeneric(frame: VirtualFrame, node: JavaScriptNode, index: number, startIndex: number): Object;
    executeVoid(frame: VirtualFrame): void;
    executeVoid(frame: VirtualFrame, node: JavaScriptNode, index: number, startIndex: number): void;
    getStateAndReset(frame: VirtualFrame): number;
    setState(frame: VirtualFrame, index: number): void;
}