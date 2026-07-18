import type { CoreLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocation.d.ts'
import type { CoreLocations$LongLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$LongLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LocationImpl } from '../../../../../com/oracle/truffle/api/object/LocationImpl.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CoreLocations$PrimitiveLocationDecorator extends CoreLocation {
    constructor(longLocation: CoreLocations$LongLocation)
    // private longLocation: CoreLocations$LongLocation;
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    clear(store: DynamicObject): void;
    equals(obj: Object | null): boolean;
    getInternalLocation(): LocationImpl;
    getInternalLongLocation(): CoreLocations$LongLocation;
    getLongInternal(store: DynamicObject, guard: boolean): number;
    getWhereString(): string;
    hashCode(): number;
    primitiveArrayCount(): number;
    primitiveFieldCount(): number;
    setLongInternal(store: DynamicObject, value: number, guard: boolean): void;
}