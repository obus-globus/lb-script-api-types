import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSGuardDisconnectedArgumentWrite } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGuardDisconnectedArgumentWrite.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSGuardDisconnectedArgumentWriteNodeGen extends JSGuardDisconnectedArgumentWrite {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramindex: number, paramargumentsArrayAccess: WriteElementNode, paramargumentsArray: JavaScriptNode, paramrhs: JavaScriptNode, paramname: TruffleString): JSGuardDisconnectedArgumentWrite;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(index: number, argumentsArrayAccess: WriteElementNode, argumentsArray: JavaScriptNode, rhs: JavaScriptNode, name: TruffleString)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(argumentsArrayNodeValue: Object, rhsNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    executeWrite(frame: VirtualFrame, value: Object): void;
    executeWrite(frameValue: VirtualFrame, argumentsArrayNodeValue: Object, rhsNodeValue: Object): void;
}