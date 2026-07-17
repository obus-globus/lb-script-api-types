import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { ExtLocations$InstanceLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$InstanceLocation.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
export abstract class ExtLocations$AbstractPrimitiveLocation extends ExtLocations$InstanceLocation {
    constructor(index: number, field: FieldInfo, finalAssumption: AbstractAssumption)
    constructor(index: number, finalAssumption: AbstractAssumption)
    primitiveFieldCount(): number;
}