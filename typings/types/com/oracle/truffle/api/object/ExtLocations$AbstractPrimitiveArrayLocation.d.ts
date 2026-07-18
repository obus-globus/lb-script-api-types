import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ExtLocations$ArrayLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$ArrayLocation.d.ts'
import type { ExtLocations$InstanceLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$InstanceLocation.d.ts'
export abstract class ExtLocations$AbstractPrimitiveArrayLocation extends ExtLocations$InstanceLocation implements ExtLocations$ArrayLocation {
    constructor(index: number, finalAssumption: Assumption)
    getBytes(): number;
    getOffset(): number;
}