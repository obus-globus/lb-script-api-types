import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ScoreboardData } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/ScoreboardData.d.ts'
import type { Scoreboard } from '../../../../../../../../../net/minecraft/world/scores/Scoreboard.d.ts'
export class ScoreboardData$Companion extends Object {
    fromScoreboard(scoreboard: Scoreboard | null): ScoreboardData | null;
}