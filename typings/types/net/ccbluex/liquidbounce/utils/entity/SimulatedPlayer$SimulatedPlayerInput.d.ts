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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.kt#L1009 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.kt:1009}
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