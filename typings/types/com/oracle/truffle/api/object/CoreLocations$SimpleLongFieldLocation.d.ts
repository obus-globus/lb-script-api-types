import type { CoreLocations$FieldLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$FieldLocation.d.ts'
import type { CoreLocations$LongLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$LongLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoreLocations$SimpleLongFieldLocation extends CoreLocations$FieldLocation implements CoreLocations$LongLocation {
    constructor(index: number, field: FieldInfo)
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getLong(store: DynamicObject, shape: Shape): number;
    getLong(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    isImplicitCastIntToLong(): boolean;
    primitiveFieldCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setLong(store: DynamicObject, value: number, shape: Shape): void;
    setLong(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
}