import type { CoreLocations$InstanceLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$InstanceLocation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class CoreLocations$ArrayLocation extends CoreLocations$InstanceLocation {
    constructor(index: number)
    equals(obj: Object | null): boolean;
    getWhereString(): string;
    hashCode(): number;
}