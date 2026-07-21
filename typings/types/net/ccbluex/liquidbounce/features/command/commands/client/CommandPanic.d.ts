import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Panic Command
 *
 * Allows you to disable all modules or modules in a specific category.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandPanic.kt:38}
 */
export class CommandPanic extends Object implements Command$Factory {
    static INSTANCE: CommandPanic;
    createCommand(): Command;
}