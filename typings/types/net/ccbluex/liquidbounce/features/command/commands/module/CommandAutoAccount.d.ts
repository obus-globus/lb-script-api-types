import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * AutoAccount Command
 *
 * Allows you to manually trigger the actions of {@link ModuleAutoAccount}.
 *
 * Module: {@link ModuleAutoAccount}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoAccount.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoAccount.kt:26}
 */
export class CommandAutoAccount extends Object implements Command$Factory {
    static INSTANCE: CommandAutoAccount;
    createCommand(): Command;
}