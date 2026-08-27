import type { PlayerHandStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16_4to1_16_3/storage/PlayerHandStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_16_4 extends ProtocolStorablesBase {
    constructor()
    // private playerHandStorage: PlayerHandStorage;
    playerHandStorage(): PlayerHandStorage;
}