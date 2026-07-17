import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
export class ExtLocations$InstanceLocation extends Location {
    constructor(index: number, field: FieldInfo, finalAssumption: AbstractAssumption)
    toString(): string;
}