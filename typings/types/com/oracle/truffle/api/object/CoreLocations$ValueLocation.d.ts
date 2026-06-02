import type { CoreLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CoreLocations$ValueLocation extends CoreLocation {
    constructor(value: Object)
    readonly value: Object;
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(val: Object): boolean;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject, guard: boolean): Object;
    hashCode(): number;
    isValue(): boolean;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    toString(): string;
}