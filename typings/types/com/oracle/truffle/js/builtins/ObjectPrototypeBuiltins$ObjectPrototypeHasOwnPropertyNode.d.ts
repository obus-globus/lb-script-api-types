import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ObjectPrototypeBuiltins$ObjectOperation } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$ObjectOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSHasPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SafeInteger } from '../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectPrototypeBuiltins$ObjectPrototypeHasOwnPropertyNode extends ObjectPrototypeBuiltins$ObjectOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    readonly hasOwnPropertyNode: JSHasPropertyNode;
    // private toPropertyKeyNode: JSToPropertyKeyNode;
    doJSObjectAnyKey(thisObj: JSObject, propName: Object): boolean;
    doJSObjectIntKey(thisObj: JSObject, index: number): boolean;
    doJSObjectTStringKey(thisObj: JSObject, propertyName: TruffleString): boolean;
    getHasOwnPropertyNode(): JSHasPropertyNode;
    getToPropertyKeyNode(): JSToPropertyKeyNode;
    hasOwnPropertyBigInt(thisObj: BigInt, propName: Object): boolean;
    hasOwnPropertyForeign(thisObj: Object, propName: Object): boolean;
    hasOwnPropertyNullOrUndefined(thisObj: Object, propName: Object): boolean;
    hasOwnPropertyPrimitive(thisObj: Object, propName: Object): boolean;
    hasOwnPropertySafeInteger(thisObj: SafeInteger, propName: Object): boolean;
    hasOwnPropertySymbol(thisObj: Symbol, propName: Object): boolean;
    hasOwnPropertyTString(thisObj: TruffleString, propName: Object): boolean;
}