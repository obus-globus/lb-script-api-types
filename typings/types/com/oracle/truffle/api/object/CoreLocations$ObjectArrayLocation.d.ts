import type { CoreLocations$ArrayLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$ArrayLocation.d.ts'
import type { CoreLocations$ObjectLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$ObjectLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoreLocations$ObjectArrayLocation extends CoreLocations$ArrayLocation implements CoreLocations$ObjectLocation {
    constructor(index: number)
    accept(locationVisitor: LocationImpl$LocationVisitor): void;
    canStore(value: Object): boolean;
    clear(store: DynamicObject): void;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getType(): Class<Object>;
    isNonNull(): boolean;
    objectArrayCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
}