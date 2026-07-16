import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ActorDataIDs } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ActorDataIDs.d.ts'
import type { SkinData } from '../../../../../net/raphimc/viabedrock/protocol/model/SkinData.d.ts'
export class ViaBedrockUtilityInterface extends Object {
    static CHANNEL: string;
    static CONFIRM_CHANNEL: string;
    static confirmPresence(paramarg0: UserConnection): void;
    static sendSkin(paramarg0: UserConnection, paramarg1: UUID, paramarg2: SkinData): void;
    static spawnCustomEntity(paramarg0: UserConnection, paramarg1: UUID, paramarg2: string, paramarg3: Map<ActorDataIDs, EntityData>): void;
    constructor()
}