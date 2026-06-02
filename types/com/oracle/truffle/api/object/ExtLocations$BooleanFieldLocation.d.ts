import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractPrimitiveFieldLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractPrimitiveFieldLocation.d.ts'
import type { ExtLocations$BooleanLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$BooleanLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$BooleanFieldLocation extends ExtLocations$AbstractPrimitiveFieldLocation implements ExtLocations$BooleanLocation {
    constructor(index: number, field: FieldInfo, finalAssumption: Assumption)
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    get(store: DynamicObject, guard: boolean): Object;
    getBoolean(store: DynamicObject, guard: boolean): boolean;
    getBoolean(store: DynamicObject, shape: Shape): boolean;
    getFinalBoolean(store: DynamicObject, condition: boolean): boolean;
    getType(): Class<boolean>;
    getType(): Class<boolean>;
    primitiveFieldCount(): number;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setBoolean(store: DynamicObject, value: boolean, guard: boolean, init: boolean): void;
    setBoolean(store: DynamicObject, value: boolean, shape: Shape): void;
    setBooleanInternal(store: DynamicObject, value: boolean): void;
}