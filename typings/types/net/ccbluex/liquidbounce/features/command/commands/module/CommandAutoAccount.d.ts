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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoAccount.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandAutoAccount.kt:33}
 */
export class CommandAutoAccount extends Object implements Command$Factory {
    static INSTANCE: CommandAutoAccount;
    createCommand(): Command;
}