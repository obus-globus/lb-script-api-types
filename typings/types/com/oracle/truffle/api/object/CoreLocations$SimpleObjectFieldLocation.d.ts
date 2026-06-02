import type { CoreLocations$FieldLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$FieldLocation.d.ts'
import type { CoreLocations$ObjectLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$ObjectLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoreLocations$SimpleObjectFieldLocation extends CoreLocations$FieldLocation implements CoreLocations$ObjectLocation {
    constructor(index: number, field: FieldInfo)
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    get(store: DynamicObject, guard: boolean): Object;
    getType(): Class<Object>;
    isNonNull(): boolean;
    objectFieldCount(): number;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
}