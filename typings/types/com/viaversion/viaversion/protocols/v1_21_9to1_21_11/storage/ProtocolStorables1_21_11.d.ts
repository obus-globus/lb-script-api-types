import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { GameTimeStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/storage/GameTimeStorage.d.ts'
export class ProtocolStorables1_21_11 extends ProtocolStorablesBase {
    constructor()
    // private gameTimeStorage: GameTimeStorage;
    gameTimeStorage(): GameTimeStorage;
}