import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SimulatedPlayer } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { SimulatedPlayer$SimulatedPlayerInput } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer$SimulatedPlayerInput.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class SimulatedPlayer$Companion extends Object {
    fromClientPlayer(input: SimulatedPlayer$SimulatedPlayerInput): SimulatedPlayer;
    fromOtherPlayer(player: Player, input: SimulatedPlayer$SimulatedPlayerInput): SimulatedPlayer;
}