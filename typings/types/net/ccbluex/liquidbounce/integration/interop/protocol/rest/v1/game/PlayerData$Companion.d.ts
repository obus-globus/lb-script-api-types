import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { PlayerData } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerData.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class PlayerData$Companion extends Object {
    fromPlayer(player: Player): PlayerData;
}