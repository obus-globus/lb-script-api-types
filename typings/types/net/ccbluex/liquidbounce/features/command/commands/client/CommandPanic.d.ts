import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Panic Command
 *
 * Allows you to disable all modules or modules in a specific category.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt:38}
 */
export class CommandPanic extends Object implements Command$Factory {
    static INSTANCE: CommandPanic;
    createCommand(): Command;
}