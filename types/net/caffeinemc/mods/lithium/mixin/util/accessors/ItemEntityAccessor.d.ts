import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ItemEntityAccessor extends Object{
    lithium$getOwner(): UUID;
}