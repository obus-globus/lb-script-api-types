import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteNode.d.ts'
import type { JSArgumentsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArgumentsObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSGuardDisconnectedArgumentWrite extends JavaScriptNode implements WriteNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramindex: number, paramargumentsArrayAccess: WriteElementNode, paramargumentsArray: JavaScriptNode, paramrhs: JavaScriptNode, paramname: TruffleString): JSGuardDisconnectedArgumentWrite;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(index: number, argumentsArrayAccess: WriteElementNode, argumentsArray: JavaScriptNode, rhs: JavaScriptNode, name: TruffleString)
    // private argumentIndex: number;
    // private argumentsArrayNode: JavaScriptNode;
    // private name: TruffleString;
    // private rhsNode: JavaScriptNode;
    // private writeArgumentsElementNode: WriteElementNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doObject(argumentsArray: JSArgumentsObject, value: Object, unconnected: InlinedConditionProfile): Object;
    doObjectDisconnected(argumentsArray: JSArgumentsObject, value: Object, wasDisconnected: InlinedConditionProfile, unconnected: InlinedConditionProfile): Object;
    executeWrite(frame: VirtualFrame, value: Object): void;
    executeWrite(frame: VirtualFrame, argumentsArray: Object, value: Object): void;
    getNodeObject(): Object;
    getRhs(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
}