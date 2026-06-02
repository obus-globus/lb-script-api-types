import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$AbstractObjectFieldLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$AbstractObjectFieldLocation.d.ts'
import type { ExtLocations$TypeAssumption } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypeAssumption.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ExtLocations$ATypedObjectFieldLocation extends ExtLocations$AbstractObjectFieldLocation {
    constructor(index: number, field: FieldInfo, typeAssumption: ExtLocations$TypeAssumption, finalAssumption: Assumption)
    get(store: DynamicObject, guard: boolean): Object;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
}