import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractPrimitiveArrayLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractPrimitiveArrayLocation.d.ts'
import type { ExtLocations$IntLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$IntLocation.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$IntArrayLocation extends ExtLocations$AbstractPrimitiveArrayLocation implements ExtLocations$IntLocation {
    constructor(index: number, finalAssumption: Assumption)
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getBytes(): number;
    getFinalInt(store: DynamicObject, condition: boolean): number;
    getInt(store: DynamicObject, shape: Shape): number;
    getInt(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    primitiveArrayCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setInt(store: DynamicObject, value: number, shape: Shape): void;
    setInt(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setIntInternal(store: DynamicObject, value: number, guard: boolean): void;
}