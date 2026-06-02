import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Panic Command
 *
 * Allows you to disable all modules or modules in a specific category.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt:33}
 */
export class CommandPanic extends Object implements Command$Factory {
    static INSTANCE: CommandPanic;
    createCommand(): Command;
}