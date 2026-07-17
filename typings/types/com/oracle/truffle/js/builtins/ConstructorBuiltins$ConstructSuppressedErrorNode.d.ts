import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ErrorStackTraceLimitNode } from '../../../../../com/oracle/truffle/js/nodes/access/ErrorStackTraceLimitNode.d.ts'
import type { JSToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructSuppressedErrorNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
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
    // private setError: DynamicObject$PutNode;
    // private setMessage: DynamicObject$PutNode;
    // private setSuppressed: DynamicObject$PutNode;
    // private stackTraceLimitNode: ErrorStackTraceLimitNode;
    constructSuppressedError(newTarget: JSDynamicObject, error: Object, suppressed: Object, message: Object, toStringNode: JSToStringNode): JSDynamicObject;
    countsTowardsStackTraceLimit(): boolean;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
}