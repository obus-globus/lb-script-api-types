import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ObjectPrototypeBuiltins$ObjectOperation } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$ObjectOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SafeInteger } from '../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectPrototypeBuiltins$ObjectPrototypeValueOfNode extends ObjectPrototypeBuiltins$ObjectOperation {
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
    valueOfBigInt(thisObj: BigInt): JSDynamicObject;
    valueOfForeign(thisObj: Object, interop: InteropLibrary): Object;
    valueOfJSObject(thisObj: JSDynamicObject): JSDynamicObject;
    valueOfLazyString(thisObj: TruffleString): JSDynamicObject;
    valueOfOther(thisObj: Object): JSDynamicObject;
    valueOfSafeInteger(thisObj: SafeInteger): JSDynamicObject;
    valueOfSymbol(thisObj: Symbol): JSDynamicObject;
}