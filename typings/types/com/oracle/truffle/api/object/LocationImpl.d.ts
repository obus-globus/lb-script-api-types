import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LocationImpl extends Location {
    constructor()
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    canStoreFinal(store: DynamicObject, value: Object): boolean;
    clear(store: DynamicObject): void;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getBoolean(store: DynamicObject, guard: boolean): boolean;
    getDouble(store: DynamicObject, guard: boolean): number;
    getFinalAssumption(): Assumption;
    getInt(store: DynamicObject, guard: boolean): number;
    getInternalLocation(): LocationImpl;
    getLong(store: DynamicObject, guard: boolean): number;
    getType(): Class<Object>;
    getWhereString(): string;
    hashCode(): number;
    isConstant(): boolean;
    isDoubleLocation(): boolean;
    isFinal(): boolean;
    isImplicitCastIntToDouble(): boolean;
    isImplicitCastIntToLong(): boolean;
    isIntLocation(): boolean;
    isLongLocation(): boolean;
    isObjectLocation(): boolean;
    objectArrayCount(): number;
    objectFieldCount(): number;
    primitiveArrayCount(): number;
    primitiveFieldCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setDoubleSafe(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setInt(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setIntSafe(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setInternal(store: DynamicObject, value: Object): void;
    setLong(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setLongSafe(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setSafe(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    toString(): string;
}