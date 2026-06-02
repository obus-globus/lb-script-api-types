import type { PlayerStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/PlayerStorage.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StorableObjectTask } from '../../../../../../com/viaversion/viaversion/connection/StorableObjectTask.d.ts'
export class PlayerPacketsTickTask extends StorableObjectTask<PlayerStorage> {
    constructor()
    run(arg0: UserConnection, arg1: PlayerStorage): void;
}