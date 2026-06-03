import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ArrayAllocationSite } from '../../../../../../com/oracle/truffle/js/runtime/array/ArrayAllocationSite.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSAbstractArray } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAbstractArray.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JSSlowArray extends JSAbstractArray {
    static ARRAY_PROTOTYPE_NO_ELEMENTS_INVALIDATION: string;
    static DEFAULT_JSARRAY_COMPARATOR: (param0: Object) => kotlin.Boolean;
    static DEFAULT_JSARRAY_DOUBLE_COMPARATOR: (param0: Object) => kotlin.Boolean;
    static DEFAULT_JSARRAY_INTEGER_COMPARATOR: (param0: Object) => kotlin.Boolean;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSSlowArray;
    static LAZY_REGEX_ORIGINAL_INPUT_ID: HiddenKey;
    static LAZY_REGEX_RESULT_ID: HiddenKey;
    static LENGTH: TruffleString;
    static arrayGetAllocationSite(paramthisObj: JSDynamicObject): ArrayAllocationSite;
    static arrayGetArray(paramthisObj: JSDynamicObject): Object;
    static arrayGetArrayOffset(paramthisObj: JSDynamicObject): number;
    static arrayGetArrayType(paramthisObj: JSDynamicObject): ScriptArray;
    static arrayGetHoleCount(paramthisObj: JSDynamicObject): number;
    static arrayGetIndexOffset(paramthisObj: JSDynamicObject): number;
    static arrayGetLength(paramthisObj: JSDynamicObject): number;
    static arrayGetRegexResult(paramthisObj: JSDynamicObject, paramlazyRegexResult: DynamicObjectLibrary): Object;
    static arrayGetRegexResultOriginalInput(paramthisObj: JSDynamicObject, paramlazyRegexResultOriginalInput: DynamicObjectLibrary): TruffleString;
    static arrayGetUsedLength(paramthisObj: JSDynamicObject): number;
    static arraySetArray(paramthisObj: JSDynamicObject, paramarray: Object): void;
    static arraySetArrayOffset(paramthisObj: JSDynamicObject, paramarrayOffset: number): void;
    static arraySetArrayType(paramthisObj: JSDynamicObject, paramarrayType: ScriptArray): void;
    static arraySetHoleCount(paramthisObj: JSDynamicObject, paramholeCount: number): void;
    static arraySetIndexOffset(paramthisObj: JSDynamicObject, paramindexOffset: number): void;
    static arraySetLength(paramthisObj: JSDynamicObject, paramlength: number): void;
    static arraySetLength(paramthisObj: JSDynamicObject, paramlength: number): void;
    static arraySetUsedLength(paramthisObj: JSDynamicObject, paramusedLength: number): void;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSSlowArray(paramobj: JSDynamicObject): boolean;
    static isJSSlowArray(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyArray(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static toArray(paramthisObj: JSDynamicObject): (Object | null)[];
    static toArrayLengthOrRangeError(paramlen: Number, paramlen32: Number, paramoriginatingNode: Node): number;
    static toArrayLengthOrRangeError(paramobj: Object, paramoriginatingNode: Node): number;
    private constructor()
    defineOwnPropertyIndex(thisObj: JSDynamicObject, name: TruffleString, descriptor: PropertyDescriptor, doThrow: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean): boolean;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, index: number, encapsulatingNode: Node): Object;
    makeSlowArray(thisObj: JSDynamicObject): JSDynamicObject;
    set(thisObj: JSDynamicObject, key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(thisObj: JSDynamicObject, index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    setLength(thisObj: JSDynamicObject, length: number, doThrow: boolean): boolean;
}