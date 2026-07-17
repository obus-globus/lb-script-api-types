import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { DoubleLocation } from '../../../../../com/oracle/truffle/api/object/DoubleLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractPrimitiveLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractPrimitiveLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { Location$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/Location$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$DoubleLocation extends ExtLocations$AbstractPrimitiveLocation implements DoubleLocation {
    constructor(index: number, field: FieldInfo, allowInt: boolean, finalAssumption: AbstractAssumption)
    constructor(index: number, allowInt: boolean, finalAssumption: AbstractAssumption)
    // private allowInt: boolean;
    accept(locationVisitor: Location$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    doubleValue(value: Object): number;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getDouble(store: DynamicObject, shape: Shape): number;
    getDouble(store: DynamicObject, guard: boolean): number;
    // private getDoubleArray(store: DynamicObject, guard: boolean): number;
    // private getDoubleField(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    hashCode(): number;
    isImplicitCastIntToDouble(): boolean;
    primitiveArrayCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, shape: Shape): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    // private setDoubleArrayInternal(store: DynamicObject, value: number, guard: boolean): void;
    // private setDoubleFieldInternal(store: DynamicObject, value: number): void;
}