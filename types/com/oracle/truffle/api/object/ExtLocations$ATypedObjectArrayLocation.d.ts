import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractObjectArrayLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractObjectArrayLocation.d.ts'
import type { ExtLocations$TypeAssumption } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypeAssumption.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$ATypedObjectArrayLocation extends ExtLocations$AbstractObjectArrayLocation {
    constructor(index: number, typeAssumption: ExtLocations$TypeAssumption, finalAssumption: Assumption)
    get(store: DynamicObject, guard: boolean): Object;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
}