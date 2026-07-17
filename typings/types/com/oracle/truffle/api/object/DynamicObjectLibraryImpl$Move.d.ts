import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class DynamicObjectLibraryImpl$Move extends Object implements Comparable<DynamicObjectLibraryImpl$Move> {
    constructor(fromLoc: Location, toLoc: Location, fromOrd: number, toOrd: number)
    // private fromLoc: Location;
    // private fromOrd: number;
    // private toLoc: Location;
    // private toOrd: number;
    // private clear(obj: DynamicObject): void;
    compareTo(other: DynamicObjectLibraryImpl$Move): number;
    perform(obj: DynamicObject): void;
    performGet(obj: DynamicObject): Object;
    performGetAndClear(obj: DynamicObject): Object;
    performSet(obj: DynamicObject, value: Object): void;
    toString(): string;
}