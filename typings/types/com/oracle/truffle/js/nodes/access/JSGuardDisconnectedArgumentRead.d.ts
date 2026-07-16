import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadNode } from '../../../../../../com/oracle/truffle/js/nodes/ReadNode.d.ts'
import type { RepeatableNode } from '../../../../../../com/oracle/truffle/js/nodes/RepeatableNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSArgumentsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArgumentsObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSGuardDisconnectedArgumentRead extends JavaScriptNode implements ReadNode, RepeatableNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramindex: number, paramreadElementNode: ReadElementNode, paramargumentsArray: JavaScriptNode, paramname: TruffleString): JSGuardDisconnectedArgumentRead;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(index: number, readElementNode: ReadElementNode, argumentsArray: JavaScriptNode, name: TruffleString)
    // private argumentIndex: number;
    // private argumentsArrayNode: JavaScriptNode;
    // private name: TruffleString;
    // private readElementNode: ReadElementNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doObject(argumentsArray: JSArgumentsObject, unconnected: InlinedConditionProfile): Object;
    doObjectDisconnected(argumentsArray: JSArgumentsObject, wasDisconnected: InlinedConditionProfile, unconnected: InlinedConditionProfile): Object;
    getIndex(): number;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
}