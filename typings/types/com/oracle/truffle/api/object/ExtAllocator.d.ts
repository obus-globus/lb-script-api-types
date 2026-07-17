import type { BaseAllocator } from '../../../../../com/oracle/truffle/api/object/BaseAllocator.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtAllocator extends BaseAllocator {
    constructor(shape: Shape)
    constantLocation(value: Object): Location;
    // private getLayout(): LayoutImpl;
    locationForValue(value: Object): Location;
    locationForValue(value: Object, putFlags: number): Location;
    locationForValueUpcast(value: Object, oldLocation: Location, putFlags: number): Location;
    moveLocation(oldLocation: Location): Location;
    // private newDoubleLocation(decorateFinal: boolean, allowIntToDouble: boolean, oldLocation: Location, value: Object): Location;
    // private newIntLocation(decorateFinal: boolean, oldLocation: Location, value: Object): Location;
    // private newLongLocation(decorateFinal: boolean, allowIntToLong: boolean, oldLocation: Location, value: Object): Location;
    // private newObjectArrayLocation(decorateFinal: boolean, oldLocation: Location, value: Object): Location;
    // private newObjectLocation(decorateFinal: boolean, oldLocation: Location, value: Object): Location;
}