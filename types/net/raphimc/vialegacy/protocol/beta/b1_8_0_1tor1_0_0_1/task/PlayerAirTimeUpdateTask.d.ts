import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PlayerAirTimeStorage } from '../../../../../../../net/raphimc/vialegacy/protocol/beta/b1_8_0_1tor1_0_0_1/storage/PlayerAirTimeStorage.d.ts'
import type { PlayerInfoStorage } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/storage/PlayerInfoStorage.d.ts'
export class PlayerAirTimeUpdateTask extends Object implements Runnable {
    constructor()
    run(): void;
    // private sendAirTime(arg0: PlayerInfoStorage, arg1: PlayerAirTimeStorage, arg2: UserConnection): void;
}