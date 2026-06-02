import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface UniquelyIdentifyable extends Object{
    getUUID(): UUID;
    isRemoved(): boolean;
}