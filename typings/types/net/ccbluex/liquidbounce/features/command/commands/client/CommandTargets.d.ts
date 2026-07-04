import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Enemy Command
 *
 * Provides subcommands for enemy configuration.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandTargets.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandTargets.kt:38}
 */
export class CommandTargets extends Object implements Command$Factory {
    static INSTANCE: CommandTargets;
    createCommand(): Command;
}