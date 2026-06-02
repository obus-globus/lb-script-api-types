import type { CoreLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocation.d.ts'
import type { DefaultLayout } from '../../../../../com/oracle/truffle/api/object/DefaultLayout.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoreAllocator extends ShapeImpl$BaseAllocator {
    constructor(layout: LayoutImpl)
    constructor(shape: ShapeImpl)
    constantLocation(value: Object): CoreLocation;
    declaredLocation(value: Object): CoreLocation;
    // private getLayout(): DefaultLayout;
    locationForType(type: Class<Object>): Location;
    locationForValue(value: Object): Location;
    locationForValue(value: Object, putFlags: number): Location;
    locationForValueUpcast(value: Object, oldLocation: Location, putFlags: number): Location;
    moveLocation(oldLocation: Location): Location;
    // private newBooleanLocation(): Location;
    // private newDoubleLocation(): Location;
    newDoubleLocation(allowedIntToDouble: boolean): Location;
    // private newIntLocation(): Location;
    // private newLongLocation(): Location;
    newLongLocation(allowedIntToLong: boolean): Location;
    // private newObjectArrayLocation(): Location;
    // private newObjectLocation(): Location;
}