import type { SimulatedPlayer$SimulatedPlayerInput$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer$SimulatedPlayerInput$Companion.d.ts'
import type { DirectionalInput } from '../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { ClientInput } from '../../../../../net/minecraft/client/player/ClientInput.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class SimulatedPlayer$SimulatedPlayerInput extends ClientInput {
    static Companion: SimulatedPlayer$SimulatedPlayerInput$Companion;
    static fromClientPlayer(directionalInput: DirectionalInput, jump: boolean, sprinting: boolean, sneaking: boolean): SimulatedPlayer$SimulatedPlayerInput;
    /**
     * Guesses the current input of a server player based on player position and velocity
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.kt#L1006 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.kt:1006}
     */
    static guessInput(entity: Player): SimulatedPlayer$SimulatedPlayerInput;
    constructor(directionalInput: DirectionalInput, jumping: boolean, sprinting: boolean, sneaking: boolean, ignoreClippingAtLedge: boolean)
    readonly directionalInput: DirectionalInput;
    forceSafeWalk: boolean;
    ignoreClippingAtLedge: boolean;
    sprinting: boolean;
    toString(): string;
    update(): void;
}