import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { PlayerLookTargetProvider } from '../../../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/provider/PlayerLookTargetProvider.d.ts'
export class ViaFabricPlusPlayerLookTargetProvider extends PlayerLookTargetProvider {
    constructor()
    getPlayerLookTarget(arg0: UserConnection): BlockPosition;
}