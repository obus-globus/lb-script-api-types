import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Panic Command
 *
 * Allows you to disable all modules or modules in a specific category.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt:38}
 */
export class CommandPanic extends Object implements Command$Factory {
    static INSTANCE: CommandPanic;
    createCommand(): Command;
}