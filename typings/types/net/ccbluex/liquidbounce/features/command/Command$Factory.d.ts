import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
/**
 * Provides a {@link Command} to the {@link CommandManager}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L283 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:283}
 */
export interface Command$Factory extends Object{
    /**
     * Creates the {@link Command} and is run only once by the {@link CommandManager}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L288 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:288}
     */
    createCommand(): Command;
}