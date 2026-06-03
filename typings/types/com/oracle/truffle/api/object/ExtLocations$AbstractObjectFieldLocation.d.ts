import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractObjectLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractObjectLocation.d.ts'
import type { ExtLocations$FieldLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$FieldLocation.d.ts'
import type { ExtLocations$TypeAssumption } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypeAssumption.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExtLocations$AbstractObjectFieldLocation extends ExtLocations$AbstractObjectLocation implements ExtLocations$FieldLocation {
    constructor(index: number, field: FieldInfo, finalAssumption: Assumption, typeAssumption: ExtLocations$TypeAssumption)
    // private field: FieldInfo;
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    clear(store: DynamicObject): void;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getFinalObject(store: DynamicObject, condition: boolean): Object;
    getOffset(): number;
    hashCode(): number;
    objectFieldCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setObjectInternal(store: DynamicObject, value: Object): void;
}