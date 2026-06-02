import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ObjectPrototypeBuiltins$ObjectOperation } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$ObjectOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { EnumerableOwnPropertyNamesNode } from '../../../../../com/oracle/truffle/js/nodes/access/EnumerableOwnPropertyNamesNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SafeInteger } from '../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectFunctionBuiltins$ObjectKeysNode extends ObjectPrototypeBuiltins$ObjectOperation {
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
    // private enumerableOwnPropertyNamesNode: EnumerableOwnPropertyNamesNode;
    // private hasElements: ConditionProfile;
    // private enumerableOwnPropertyNames(obj: Object): (Object | null)[];
    // private keys(obj: Object): JSDynamicObject;
    keysBigInt(bigInt: BigInt): JSDynamicObject;
    keysDynamicObject(thisObj: JSDynamicObject): JSDynamicObject;
    keysForeign(obj: Object): JSDynamicObject;
    keysOther(thisObj: Object): JSDynamicObject;
    keysSafeInt(largeInteger: SafeInteger): JSDynamicObject;
    keysString(string: TruffleString): JSDynamicObject;
    keysSymbol(symbol: Symbol): JSDynamicObject;
}