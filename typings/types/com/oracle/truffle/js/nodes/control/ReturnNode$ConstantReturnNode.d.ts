import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReturnException } from '../../../../../../com/oracle/truffle/js/nodes/control/ReturnException.d.ts'
import type { ReturnNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReturnNode$ConstantReturnNode extends ReturnNode {
    static EMPTY: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramexpression: JavaScriptNode): ReturnNode;
    static createFrameReturn(paramexpression: JavaScriptNode): ReturnNode;
    static createTerminalPositionReturn(paramexpression: JavaScriptNode): ReturnNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(expression: JavaScriptNode)
    // private exception: ReturnException;
    execute(frame: VirtualFrame): Object;
    executeVoid(frame: VirtualFrame): void;
}