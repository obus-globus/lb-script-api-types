import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
/**
 * Provides a {@link Command} to the {@link CommandManager}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L275 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:275}
 */
export interface Command$Factory extends Object{
    /**
     * Creates the {@link Command} and is run only once by the {@link CommandManager}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L280 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:280}
     */
    createCommand(): Command;
}