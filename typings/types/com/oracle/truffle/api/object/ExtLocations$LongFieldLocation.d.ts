import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractPrimitiveFieldLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractPrimitiveFieldLocation.d.ts'
import type { ExtLocations$LongLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$LongLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$LongFieldLocation extends ExtLocations$AbstractPrimitiveFieldLocation implements ExtLocations$LongLocation {
    constructor(index: number, field: FieldInfo, allowInt: boolean, slotSize: number, finalAssumption: Assumption)
    // private allowInt: boolean;
    // private slotSize: number;
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject, guard: boolean): Object;
    getFinalLong(store: DynamicObject, condition: boolean): number;
    getLong(store: DynamicObject, guard: boolean): number;
    getLong(store: DynamicObject, shape: Shape): number;
    getType(): Class<number>;
    getType(): Class<number>;
    isImplicitCastIntToLong(): boolean;
    longValue(value: Object): number;
    primitiveFieldCount(): number;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setLong(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setLong(store: DynamicObject, value: number, shape: Shape): void;
    setLongInternal(store: DynamicObject, value: number): void;
}