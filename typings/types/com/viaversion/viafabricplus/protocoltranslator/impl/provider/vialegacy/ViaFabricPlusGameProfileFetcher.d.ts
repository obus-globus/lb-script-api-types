import type { GameProfile } from '../../../../../../../com/viaversion/viaversion/api/minecraft/GameProfile.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { GameProfileFetcher } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/provider/GameProfileFetcher.d.ts'
export class ViaFabricPlusGameProfileFetcher extends GameProfileFetcher {
    constructor()
    loadGameProfile(arg0: UUID): GameProfile;
    loadMojangUuid(arg0: string): UUID;
}