import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PlayerAbilitiesProvider } from '../../../../../../../com/viaversion/viaversion/protocols/v1_15_2to1_16/provider/PlayerAbilitiesProvider.d.ts'
export class ViaFabricPlusPlayerAbilitiesProvider extends PlayerAbilitiesProvider {
    constructor()
    getFlyingSpeed(arg0: UserConnection): number;
    getWalkingSpeed(arg0: UserConnection): number;
}