import type { CoreLocations$TypedLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$TypedLocation.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CoreLocations$ObjectLocation extends CoreLocations$TypedLocation, Object{
    getType(): Class<Object>;
    isNonNull(): boolean;
}