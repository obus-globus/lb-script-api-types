import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractPrimitiveFieldLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractPrimitiveFieldLocation.d.ts'
import type { ExtLocations$DoubleLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$DoubleLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$DoubleFieldLocation extends ExtLocations$AbstractPrimitiveFieldLocation implements ExtLocations$DoubleLocation {
    constructor(index: number, field: FieldInfo, allowInt: boolean, slotSize: number, finalAssumption: Assumption)
    // private allowInt: boolean;
    // private slotSize: number;
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    doubleValue(value: Object): number;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject, guard: boolean): Object;
    getDouble(store: DynamicObject, shape: Shape): number;
    getDouble(store: DynamicObject, guard: boolean): number;
    getDouble(store: DynamicObject, shape: Shape): number;
    getFinalDouble(store: DynamicObject, condition: boolean): number;
    getType(): Class<number>;
    getType(): Class<number>;
    isImplicitCastIntToDouble(): boolean;
    primitiveFieldCount(): number;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, shape: Shape): void;
    setDoubleInternal(store: DynamicObject, value: number): void;
}