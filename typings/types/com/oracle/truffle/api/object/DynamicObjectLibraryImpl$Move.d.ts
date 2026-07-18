import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LocationImpl } from '../../../../../com/oracle/truffle/api/object/LocationImpl.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class DynamicObjectLibraryImpl$Move extends Object implements Comparable<DynamicObjectLibraryImpl$Move> {
    constructor(fromLoc: LocationImpl, toLoc: LocationImpl, fromOrd: number, toOrd: number)
    // private fromLoc: LocationImpl;
    // private fromOrd: number;
    // private toLoc: LocationImpl;
    // private toOrd: number;
    // private clear(obj: DynamicObject): void;
    compareTo(other: DynamicObjectLibraryImpl$Move): number;
    perform(obj: DynamicObject): void;
    performGet(obj: DynamicObject): Object;
    performGetAndClear(obj: DynamicObject): Object;
    performSet(obj: DynamicObject, value: Object): void;
    toString(): string;
}