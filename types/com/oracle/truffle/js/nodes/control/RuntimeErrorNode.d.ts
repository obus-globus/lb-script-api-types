import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { StatementNode } from '../../../../../../com/oracle/truffle/js/nodes/control/StatementNode.d.ts'
import type { JSErrorType } from '../../../../../../com/oracle/truffle/js/runtime/JSErrorType.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RuntimeErrorNode extends StatementNode {
    static EMPTY: Object;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramerrorType: JSErrorType, parammessage: string): RuntimeErrorNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(errorType: JSErrorType, message: string)
    // private errorType: JSErrorType;
    // private message: string;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    // private createException(): JSException;
    execute(frame: VirtualFrame): Object;
}