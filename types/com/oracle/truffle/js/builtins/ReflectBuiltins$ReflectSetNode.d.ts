import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReflectBuiltins$ReflectOperation } from '../../../../../com/oracle/truffle/js/builtins/ReflectBuiltins$ReflectOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ReflectBuiltins$ReflectSetNode extends ReflectBuiltins$ReflectOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private toPropertyKeyNode: JSToPropertyKeyNode;
    doForeignObject(target: Object, propertyKey: Object, value: Object, optionalArgs: Object[], isObjectNode: IsObjectNode): boolean;
    doNonObject(target: Object, propertyKey: Object, value: Object, optionalArgs: Object[]): boolean;
    reflectSet(target: JSDynamicObject, propertyKey: Object, value: Object, optionalArgs: Object[], jsclassProfile: JSClassProfile): boolean;
}