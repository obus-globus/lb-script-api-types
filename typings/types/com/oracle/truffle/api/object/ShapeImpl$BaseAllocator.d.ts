import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { LocationImpl$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/LocationImpl$LocationVisitor.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ShapeImpl$BaseAllocator extends Object implements LocationImpl$LocationVisitor {
    constructor(layout: LayoutImpl)
    constructor(shape: ShapeImpl)
    // private depth: number;
    // private layout: LayoutImpl;
    // private objectArraySize: number;
    // private objectFieldSize: number;
    // private primitiveArraySize: number;
    // private primitiveFieldSize: number;
    // private shared: boolean;
    addLocation(location: Location): ShapeImpl$BaseAllocator;
    advance<T extends Location>(location0: T): T;
    constantLocation(value: Object): Location;
    declaredLocation(value: Object): Location;
    locationForType(type: Class<Object>): Location;
    locationForValue(value: Object): Location;
    locationForValueUpcast(value: Object, oldLocation: Location, putFlags: number): Location;
    moveLocation(oldLocation: Location): Location;
    visitObjectArray(index: number, count: number): void;
    visitObjectField(index: number, count: number): void;
    visitPrimitiveArray(index: number, count: number): void;
    visitPrimitiveField(index: number, count: number): void;
}