import type { ExtLocations$TypedLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypedLocation.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExtLocations$ObjectLocation extends ExtLocations$TypedLocation, Object{
    getType(): Class<Object>;
    isNonNull(): boolean;
}