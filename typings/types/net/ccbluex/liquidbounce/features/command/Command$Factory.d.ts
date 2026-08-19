import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
/**
 * Provides a {@link Command} to the {@link CommandManager}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L283 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:283}
 */
export interface Command$Factory extends Object{
    /**
     * Creates the {@link Command} and is run only once by the {@link CommandManager}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L288 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:288}
     */
    createCommand(): Command;
}