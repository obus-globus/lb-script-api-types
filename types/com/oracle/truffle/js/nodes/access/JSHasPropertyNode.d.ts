import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { TypedArrayLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSHasPropertyNode extends JavaScriptBaseNode {
    static create(): JSHasPropertyNode;
    static create(paramhasOwnProperty: boolean): JSHasPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(hasOwnProperty: boolean)
    // private classProfile: JSClassProfile;
    // private hasOwnProperty: boolean;
    arrayLong(object: JSDynamicObject, index: number, hasElementProfile: InlinedConditionProfile): boolean;
    arrayLongCached(object: JSDynamicObject, index: number, node: Node, cachedArrayType: ScriptArray, hasElementProfile: InlinedConditionProfile): boolean;
    arrayStringCached(object: JSDynamicObject, propertyName: TruffleString, cachedName: TruffleString, hasPropertyNode: HasPropertyCacheNode, equalNode: TruffleString$EqualNode): boolean;
    // private checkInteger(object: JSDynamicObject, index: number, arrayType: ScriptArray, node: Node, hasElementProfile: InlinedConditionProfile): boolean;
    executeBoolean(object: Object, propertyName: Object): boolean;
    executeBoolean(object: Object, index: number): boolean;
    foreignObject(object: Object, propertyName: Object, interop: InteropLibrary, toStringNode: JSToStringNode, foreignObjectPrototypeNode: ForeignObjectPrototypeNode, hasInPrototype: JSHasPropertyNode): boolean;
    getCachedPropertyGetter(object: JSDynamicObject, key: Object): HasPropertyCacheNode;
    // private hasPropertyGeneric(object: JSDynamicObject, propertyKey: Object): boolean;
    objectLong(object: JSDynamicObject, propertyIdx: number): boolean;
    objectObject(object: JSDynamicObject, propertyName: Object, toPropertyKeyNode: JSToPropertyKeyNode): boolean;
    objectString(object: JSDynamicObject, propertyName: TruffleString): boolean;
    objectStringCached(object: JSDynamicObject, propertyName: TruffleString, cachedObjectType: JSClass, cachedName: TruffleString, hasPropertyNode: HasPropertyCacheNode, equalNode: TruffleString$EqualNode): boolean;
    objectSymbol(object: JSDynamicObject, propertyName: Symbol): boolean;
    typedArray(object: JSTypedArrayObject, index: number, typedArrayLengthNode: TypedArrayLengthNode): boolean;
}