import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ObjectFunctionBuiltins$ObjectDefineOperation } from '../../../../../com/oracle/truffle/js/builtins/ObjectFunctionBuiltins$ObjectDefineOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateObjectNode$CreateObjectWithPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode$CreateObjectWithPrototypeNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectFunctionBuiltins$ObjectCreateNode extends ObjectFunctionBuiltins$ObjectDefineOperation {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private objectCreateNode: CreateObjectNode$CreateObjectWithPrototypeNode;
    createForeignNullOrInvalidPrototype(prototype: Object, properties: Object, node: Node, definePropertiesBranch: InlinedBranchProfile, interop: InteropLibrary, isNull: InlinedConditionProfile): JSObject;
    createObjectNotNull(prototype: JSObject, properties: Object, definePropertiesBranch: InlinedBranchProfile): JSDynamicObject;
    createObjectNull(prototype: JSObject, properties: Object): JSDynamicObject;
    createObjectObject(prototype: JSObject, properties: JSObject): JSDynamicObject;
    // private createObjectWithPrototype(prototype: JSDynamicObject): JSObject;
    createPrototypeNull(prototype: Object, properties: Object, node: Node, definePropertiesBranch: InlinedBranchProfile, isNull: InlinedConditionProfile): JSObject;
    // private objectDefineProperties(ret: JSObject, properties: Object, node: Node, definePropertiesBranch: InlinedBranchProfile): JSObject;
}