import type { DynamicArray$DynamicArrayCache } from '../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DynamicArray extends ScriptArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    // private cache: DynamicArray$DynamicArrayCache;
    // private integrityLevel: number;
    cloneArray(object: JSDynamicObject): Object;
    freeze(): ScriptArray;
    isExtensible(): boolean;
    isFrozen(): boolean;
    isLengthNotWritable(): boolean;
    isSealed(): boolean;
    maybePreinitializeCache<T extends ScriptArray>(): T;
    preventExtensions(): ScriptArray;
    seal(): ScriptArray;
    setIntegrityLevel<T extends ScriptArray>(integrityLevel: number): T;
    setLengthNotWritable(): ScriptArray;
    toString(): string;
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}