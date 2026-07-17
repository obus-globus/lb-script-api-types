import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$InstanceLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$InstanceLocation.d.ts'
import type { ExtLocations$TypeAssumption } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypeAssumption.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { Location$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/Location$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$ObjectLocation extends ExtLocations$InstanceLocation {
    private constructor(index: number, field: FieldInfo, finalAssumption: AbstractAssumption, typeAssumption: ExtLocations$TypeAssumption)
    private constructor(index: number, finalAssumption: AbstractAssumption, typeAssumption: ExtLocations$TypeAssumption)
    // private typeAssumption: ExtLocations$TypeAssumption;
    accept(locationVisitor: Location$LocationVisitor): void;
    assumedTypeCast(value: Object, condition: boolean): Object;
    canStore(value: Object): boolean;
    canStoreInternal(value: Object): boolean;
    clear(store: DynamicObject): void;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getAssumedType(): Class<Object>;
    // private getObjectArrayInternal(store: DynamicObject, guard: boolean): Object;
    // private getObjectFieldInternal(store: DynamicObject, guard: boolean): Object;
    getType(): Class<Object>;
    getTypeAssumption(): ExtLocations$TypeAssumption;
    invalidateTypeAssumption(value: Object): void;
    isAssumedNonNull(): boolean;
    maybeInvalidateTypeAssumption(value: Object): void;
    mergeTypeAssumption(other: ExtLocations$TypeAssumption): void;
    objectFieldCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    // private setObjectArrayInternal(store: DynamicObject, value: Object, guard: boolean): void;
    // private setObjectFieldInternal(store: DynamicObject, value: Object): void;
    toString(): string;
}