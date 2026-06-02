import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ExtLocations$FieldLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$FieldLocation.d.ts'
import type { ExtLocations$InstanceLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$InstanceLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExtLocations$AbstractPrimitiveFieldLocation extends ExtLocations$InstanceLocation implements ExtLocations$FieldLocation {
    constructor(index: number, field: FieldInfo, finalAssumption: Assumption)
    // private field: FieldInfo;
    equals(obj: Object | null): boolean;
    getOffset(): number;
    hashCode(): number;
}