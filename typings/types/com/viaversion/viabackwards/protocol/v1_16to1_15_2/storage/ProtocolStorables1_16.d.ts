import type { PlayerAttributesStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/storage/PlayerAttributesStorage.d.ts'
import type { PlayerSneakStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/storage/PlayerSneakStorage.d.ts'
import type { WorldNameTracker } from '../../../../../../com/viaversion/viabackwards/protocol/v1_16to1_15_2/storage/WorldNameTracker.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_16 extends ProtocolStorablesBase {
    constructor()
    // private playerAttributesStorage: PlayerAttributesStorage;
    // private playerSneakStorage: PlayerSneakStorage;
    // private worldNameTracker: WorldNameTracker;
    playerAttributesStorage(): PlayerAttributesStorage;
    playerSneakStorage(): PlayerSneakStorage;
    worldNameTracker(): WorldNameTracker;
}