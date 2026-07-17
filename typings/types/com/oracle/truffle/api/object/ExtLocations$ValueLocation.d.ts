import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Location$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/Location$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$ValueLocation extends Location {
    constructor(value: Object)
    readonly value: Object;
    accept(locationVisitor: Location$LocationVisitor): void;
    canStore(val: Object): boolean;
    clear(store: DynamicObject): void;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    hashCode(): number;
    isValue(): boolean;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    toString(): string;
}