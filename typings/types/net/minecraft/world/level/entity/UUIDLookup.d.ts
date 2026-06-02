import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { UniquelyIdentifyable } from '../../../../../net/minecraft/world/level/entity/UniquelyIdentifyable.d.ts'
export interface UUIDLookup<IdentifiedType extends UniquelyIdentifyable> extends Object{
    lookup(uuid: UUID): IdentifiedType;
}