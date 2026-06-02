import type { ArrayAllocationSite } from '../../../../../../com/oracle/truffle/js/runtime/array/ArrayAllocationSite.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayAccess extends Object {
    static SINGLETON: ArrayAccess;
    constructor()
    getAllocationSite(thisObj: Object): ArrayAllocationSite;
    getArray(thisObj: Object): Object;
    getArrayOffset(thisObj: Object): number;
    getArrayType(thisObj: Object): ScriptArray;
    getHoleCount(thisObj: Object): number;
    getIndexOffset(thisObj: Object): number;
    getLength(thisObj: Object): number;
    getUsedLength(thisObj: Object): number;
    setArray(thisObj: Object, array: Object): void;
    setArrayOffset(thisObj: Object, arrayOffset: number): void;
    setArrayType(thisObj: Object, arrayType: ScriptArray): void;
    setHoleCount(thisObj: Object, holeCount: number): void;
    setIndexOffset(thisObj: Object, indexOffset: number): void;
    setLength(thisObj: Object, length: number): void;
    setUsedLength(thisObj: Object, usedLength: number): void;
}