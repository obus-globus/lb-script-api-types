import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Enemy Command
 *
 * Provides subcommands for enemy configuration.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandTargets.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandTargets.kt:33}
 */
export class CommandTargets extends Object implements Command$Factory {
    static INSTANCE: CommandTargets;
    createCommand(): Command;
}