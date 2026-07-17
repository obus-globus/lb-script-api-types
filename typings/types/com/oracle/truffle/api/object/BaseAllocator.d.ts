import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Location$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/Location$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BaseAllocator extends Object implements Location$LocationVisitor {
    constructor(layout: LayoutImpl)
    constructor(shape: Shape)
    // private depth: number;
    // private layout: LayoutImpl;
    // private objectArraySize: number;
    // private objectFieldSize: number;
    // private primitiveArraySize: number;
    // private primitiveFieldSize: number;
    // private shared: boolean;
    addLocation(location: Location): BaseAllocator;
    advance<T extends Location>(location: T): T;
    constantLocation(value: Object): Location;
    locationForValue(value: Object): Location;
    locationForValueUpcast(value: Object, oldLocation: Location, putFlags: number): Location;
    moveLocation(oldLocation: Location): Location;
    visitObjectArray(index: number, count: number): void;
    visitObjectField(index: number, count: number): void;
    visitPrimitiveArray(index: number, count: number): void;
    visitPrimitiveField(index: number, count: number): void;
}