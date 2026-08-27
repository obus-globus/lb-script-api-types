import type { DayTimeStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v26_1to1_21_11/storage/DayTimeStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
export class ProtocolStorables26_1 extends ProtocolStorablesBase {
    constructor()
    // private dayTimeStorage: DayTimeStorage;
    dayTimeStorage(): DayTimeStorage;
    gameMode(): number;
    setGameMode(arg0: number): void;
}