import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/GameType.d.ts'
import type { GameMode } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/java/generated/GameMode.d.ts'
export class GameTypeRewriter extends Object {
    static getEffectiveGameMode(paramarg0: GameType, paramarg1: GameType): GameMode;
    constructor()
}