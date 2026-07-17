import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ErrorStackTraceLimitNode } from '../../../../../com/oracle/truffle/js/nodes/access/ErrorStackTraceLimitNode.d.ts'
import type { GetIteratorNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorNode.d.ts'
import type { InitErrorObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/InitErrorObjectNode.d.ts'
import type { InstallErrorCauseNode } from '../../../../../com/oracle/truffle/js/nodes/access/InstallErrorCauseNode.d.ts'
import type { IterableToListNode } from '../../../../../com/oracle/truffle/js/nodes/access/IterableToListNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructAggregateErrorNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, isNewTargetCase: boolean)
    // private initErrorObjectNode: InitErrorObjectNode;
    // private installErrorCauseNode: InstallErrorCauseNode;
    // private setMessage: DynamicObject$PutNode;
    // private stackTraceLimitNode: ErrorStackTraceLimitNode;
    constructError(newTarget: JSDynamicObject, errorsObj: Object, messageObj: Object, options: Object, toStringNode: JSToStringNode, getIteratorNode: GetIteratorNode, iterableToListNode: IterableToListNode): JSDynamicObject;
    countsTowardsStackTraceLimit(): boolean;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    // private installErrorCause(errorObj: JSObject, options: Object): void;
}