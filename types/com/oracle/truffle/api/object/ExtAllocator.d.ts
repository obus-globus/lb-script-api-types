import type { ExtLayout } from '../../../../../com/oracle/truffle/api/object/ExtLayout.d.ts'
import type { ExtLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocation.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExtAllocator extends ShapeImpl$BaseAllocator {
    constructor(layout: LayoutImpl)
    constructor(shape: ShapeImpl)
    constantLocation(value: Object): ExtLocation;
    declaredLocation(value: Object): ExtLocation;
    // private getLayout(): ExtLayout;
    locationForType(type: Class<Object>): Location;
    locationForValue(value: Object): Location;
    locationForValue(value: Object, putFlags: number): Location;
    locationForValueUpcast(value: Object, oldLocation: Location, putFlags: number): Location;
    moveLocation(oldLocation: Location): Location;
    // private newBooleanLocation(): Location;
    // private newBooleanLocation(decorateFinal: boolean, oldLocation: Location, value: Object): Location;
    // private newDoubleLocation(): Location;
    // private newDoubleLocation(decorateFinal: boolean, allowIntToDouble: boolean, oldLocation: Location, value: Object): Location;
    // private newIntLocation(): Location;
    // private newIntLocation(decorateFinal: boolean, oldLocation: Location, value: Object): Location;
    // private newLongLocation(): Location;
    // private newLongLocation(decorateFinal: boolean, allowIntToLong: boolean, oldLocation: Location, value: Object): Location;
    // private newObjectArrayLocation(decorateFinal: boolean, oldLocation: Location, value: Object): Location;
    newObjectLocation(): Location;
    // private newObjectLocation(decorateFinal: boolean, oldLocation: Location, value: Object): Location;
    // private newTypedObjectArrayLocation(type: Class<Object>, nonNull: boolean, decorateFinal: boolean, oldLocation: Location, value: Object): Location;
    // private newTypedObjectLocation(type: Class<Object>, nonNull: boolean, decorateFinal: boolean, oldLocation: Location, value: Object): Location;
}