import type { CoreLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocation.d.ts'
export abstract class CoreLocations$InstanceLocation extends CoreLocation {
    constructor(index: number)
    readonly index: number;
    getIndex(): number;
}