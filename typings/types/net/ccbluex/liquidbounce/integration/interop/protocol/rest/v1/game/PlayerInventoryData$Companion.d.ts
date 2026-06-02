import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { PlayerInventoryData } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerInventoryData.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class PlayerInventoryData$Companion extends Object {
    fromPlayer(player: Player): PlayerInventoryData;
}