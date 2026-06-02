import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../net/raphimc/viabedrock/api/model/entity/Entity.d.ts'
import type { ActorDataIDs } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ActorDataIDs.d.ts'
export class EntityMetadataRewriter extends Object {
    static rewrite(paramarg0: UserConnection, paramarg1: Entity, paramarg2: ActorDataIDs, paramarg3: EntityData, paramarg4: EntityData[]): boolean;
    constructor()
}