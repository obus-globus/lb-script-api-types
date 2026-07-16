import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ObjectPrototypeBuiltins$FormatCacheNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$FormatCacheNode.d.ts'
import type { ObjectPrototypeBuiltins$GetBuiltinToStringTagNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$GetBuiltinToStringTagNode.d.ts'
import type { ObjectPrototypeBuiltins$ObjectOperation } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$ObjectOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { SafeInteger } from '../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSProxyObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSProxyObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectPrototypeBuiltins$ObjectPrototypeToStringNode extends ObjectPrototypeBuiltins$ObjectOperation {
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
    // private formatCacheNode: ObjectPrototypeBuiltins$FormatCacheNode;
    // private getStringTagNode: PropertyGetNode;
    doBigInt(thisObj: BigInt): TruffleString;
    doForeignObject(thisObj: Object, interop: InteropLibrary): TruffleString;
    doJSObject(thisObj: JSObject, getBuiltinToStringTagNode: ObjectPrototypeBuiltins$GetBuiltinToStringTagNode): TruffleString;
    doJSProxy(thisObj: JSProxyObject, getBuiltinToStringTagNode: ObjectPrototypeBuiltins$GetBuiltinToStringTagNode): TruffleString;
    doNull(thisObj: Object): TruffleString;
    doObject(thisObj: Object): TruffleString;
    doSafeInteger(thisObj: SafeInteger): TruffleString;
    doString(thisObj: TruffleString): TruffleString;
    doSymbol(thisObj: Symbol): TruffleString;
    doUndefined(thisObj: Object): TruffleString;
    // private formatString(name: TruffleString): TruffleString;
    // private getToStringTag(thisObj: JSObject): TruffleString;
}