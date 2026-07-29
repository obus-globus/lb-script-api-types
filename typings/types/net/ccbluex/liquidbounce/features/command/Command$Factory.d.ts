import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
/**
 * Provides a {@link Command} to the {@link CommandManager}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L278 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:278}
 */
export interface Command$Factory extends Object{
    /**
     * Creates the {@link Command} and is run only once by the {@link CommandManager}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt#L283 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Command.kt:283}
     */
    createCommand(): Command;
}