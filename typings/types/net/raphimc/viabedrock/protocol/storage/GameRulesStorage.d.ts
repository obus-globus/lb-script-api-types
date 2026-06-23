import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameRule } from '../../../../../net/raphimc/viabedrock/protocol/model/GameRule.d.ts'
export class GameRulesStorage extends StoredObject {
    constructor(arg0: UserConnection, arg1: GameRule[])
    // private gameRules: { [key: string]: Object };
    getGameRule<T extends unknown>(arg0: string): T;
    updateGameRules(arg0: GameRule[]): void;
}