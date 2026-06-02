import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SimulatedPlayer$SimulatedPlayerInput } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer$SimulatedPlayerInput.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class SimulatedPlayer$SimulatedPlayerInput$Companion extends Object {
    // private MAX_WALKING_SPEED: number;
    fromClientPlayer(directionalInput: DirectionalInput, jump: boolean, sprinting: boolean, sneaking: boolean): SimulatedPlayer$SimulatedPlayerInput;
    guessInput(entity: Player): SimulatedPlayer$SimulatedPlayerInput;
}