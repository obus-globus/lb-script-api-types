import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ExtLocations$InstanceLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$InstanceLocation.d.ts'
import type { ExtLocations$ObjectLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$ObjectLocation.d.ts'
import type { ExtLocations$TypeAssumption } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypeAssumption.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExtLocations$AbstractObjectLocation extends ExtLocations$InstanceLocation implements ExtLocations$ObjectLocation {
    constructor(index: number, finalAssumption: Assumption, typeAssumption: ExtLocations$TypeAssumption)
    typeAssumption: ExtLocations$TypeAssumption;
    assumedTypeCast(value: Object, condition: boolean): Object;
    canStore(value: Object): boolean;
    canStoreInternal(value: Object): boolean;
    getAssumedType(): Class<Object>;
    getType(): Class<Object>;
    getTypeAssumption(): ExtLocations$TypeAssumption;
    // private invalidateTypeAssumption(value: Object): void;
    isAssumedNonNull(): boolean;
    isNonNull(): boolean;
    maybeInvalidateTypeAssumption(value: Object): void;
    mergeTypeAssumption(other: ExtLocations$TypeAssumption): void;
    toString(): string;
}