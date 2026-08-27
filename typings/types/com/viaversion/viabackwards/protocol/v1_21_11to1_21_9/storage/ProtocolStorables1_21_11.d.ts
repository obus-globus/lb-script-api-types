import type { GameTimeStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_11to1_21_9/storage/GameTimeStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables1_21_11 extends ProtocolStorablesBase {
    constructor()
    // private gameTimeStorage: GameTimeStorage;
    gameTimeStorage(): GameTimeStorage;
}