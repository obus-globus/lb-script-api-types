import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Ping Command
 *
 * Verifies the latency of the current player.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandPing.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandPing.kt:28}
 */
export class CommandPing extends Object implements Command$Factory {
    static INSTANCE: CommandPing;
    createCommand(): Command;
}