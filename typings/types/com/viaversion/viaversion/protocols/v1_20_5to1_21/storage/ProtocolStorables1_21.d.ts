import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { EfficiencyAttributeStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/storage/EfficiencyAttributeStorage.d.ts'
import type { PlayerPositionStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/storage/PlayerPositionStorage.d.ts'
export class ProtocolStorables1_21 extends ProtocolStorablesBase {
    constructor()
    // private efficiencyAttributes: EfficiencyAttributeStorage;
    // private playerPosition: PlayerPositionStorage;
    efficiencyAttributes(): EfficiencyAttributeStorage;
    playerPosition(): PlayerPositionStorage;
}