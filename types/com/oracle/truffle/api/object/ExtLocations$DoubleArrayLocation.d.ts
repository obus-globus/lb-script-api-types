import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractPrimitiveArrayLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractPrimitiveArrayLocation.d.ts'
import type { ExtLocations$DoubleLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$DoubleLocation.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$DoubleArrayLocation extends ExtLocations$AbstractPrimitiveArrayLocation implements ExtLocations$DoubleLocation {
    constructor(index: number, allowInt: boolean, finalAssumption: Assumption)
    // private allowInt: boolean;
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    doubleValue(value: Object): number;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject, guard: boolean): Object;
    getBytes(): number;
    getDouble(store: DynamicObject, guard: boolean): number;
    getDouble(store: DynamicObject, shape: Shape): number;
    getFinalDouble(store: DynamicObject, condition: boolean): number;
    getType(): Class<number>;
    getType(): Class<number>;
    isImplicitCastIntToDouble(): boolean;
    primitiveArrayCount(): number;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, shape: Shape): void;
    setDoubleInternal(store: DynamicObject, value: number, guard: boolean): void;
}