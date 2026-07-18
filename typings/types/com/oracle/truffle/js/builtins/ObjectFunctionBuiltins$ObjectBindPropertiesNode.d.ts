import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ObjectPrototypeBuiltins$ObjectOperation } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$ObjectOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { EnumerableOwnPropertyNamesNode } from '../../../../../com/oracle/truffle/js/nodes/access/EnumerableOwnPropertyNamesNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { JSClassProfile } from '../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectFunctionBuiltins$ObjectBindPropertiesNode extends ObjectPrototypeBuiltins$ObjectOperation {
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
    // private enumerableOwnPropertyNamesNode: EnumerableOwnPropertyNamesNode;
    // private sourceProfile: JSClassProfile;
    // private targetProfile: JSClassProfile;
    bindPropertiesFromForeign(target: JSObject, source: Object, interop: InteropLibrary, members: InteropLibrary): JSDynamicObject;
    bindPropertiesFromJSDynamicObject(target: JSObject, source: JSDynamicObject): JSDynamicObject;
    bindPropertiesFromOther(target: JSObject, source: Object): JSDynamicObject;
    bindPropertiesInvalidTarget(target: Object, source: Object): JSDynamicObject;
    // private enumerableOwnPropertyNames(obj: JSDynamicObject): (Object | null)[];
}