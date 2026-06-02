import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ScriptArray extends Object {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor()
    addRange(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    // private addRangeNotExtensible(): JSException;
    asIterable(object: JSDynamicObject): Object[];
    canDeleteElement(object: JSDynamicObject, index: number, strict: boolean): boolean;
    cast(other: ScriptArray): ScriptArray;
    deleteElement(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    freeze(): ScriptArray;
    getElement(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    hasElement(object: JSDynamicObject, index: number): boolean;
    hasHoles(object: JSDynamicObject): boolean;
    hasHolesOrUnused(object: JSDynamicObject): boolean;
    isExtensible(): boolean;
    isFrozen(): boolean;
    isHolesType(): boolean;
    isInBoundsFast(object: JSDynamicObject, index: number): boolean;
    isInstance(other: ScriptArray): boolean;
    isLengthNotWritable(): boolean;
    isSealed(): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    ownPropertyKeys(object: JSDynamicObject): Object[];
    ownPropertyKeysContiguous(object: JSDynamicObject): Object[];
    ownPropertyKeysHoles(object: JSDynamicObject): Object[];
    preventExtensions(): ScriptArray;
    previousElementIndex(object: JSDynamicObject, index: number): number;
    removeRange(object: JSDynamicObject, start: number, end: number): ScriptArray;
    removeRange(object: JSDynamicObject, start: number, end: number, errorBranch: BranchProfile): ScriptArray;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    seal(): ScriptArray;
    setElement(object: JSDynamicObject, index: number, value: Object, strict: boolean): ScriptArray;
    setElementImpl(object: JSDynamicObject, index: number, value: Object, strict: boolean): ScriptArray;
    setLength(object: JSDynamicObject, len: number, strict: boolean): ScriptArray;
    setLength(object: JSDynamicObject, len: number, strict: boolean, node: Node, profile: ScriptArray$SetLengthProfileAccess): ScriptArray;
    setLengthImpl(object: JSDynamicObject, len: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): ScriptArray;
    setLengthNotWritable(): ScriptArray;
    shiftRange(object: JSDynamicObject, from: number): ScriptArray;
    shiftRangeImpl(object: JSDynamicObject, limit: number): ScriptArray;
    toArray(thisObj: JSDynamicObject): Object[];
}