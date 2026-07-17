import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractPrimitiveLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractPrimitiveLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { IntLocation } from '../../../../../com/oracle/truffle/api/object/IntLocation.d.ts'
import type { Location$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/Location$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$IntLocation extends ExtLocations$AbstractPrimitiveLocation implements IntLocation {
    private constructor(index: number, field: FieldInfo, finalAssumption: AbstractAssumption)
    private constructor(index: number, finalAssumption: AbstractAssumption)
    accept(locationVisitor: Location$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getInt(store: DynamicObject, shape: Shape): number;
    getInt(store: DynamicObject, guard: boolean): number;
    // private getIntArray(store: DynamicObject, guard: boolean): number;
    // private getIntField(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    primitiveArrayCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setInt(store: DynamicObject, value: number, shape: Shape): void;
    setInt(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    // private setIntArrayInternal(store: DynamicObject, value: number, guard: boolean): void;
    // private setIntFieldInternal(store: DynamicObject, value: number): void;
}