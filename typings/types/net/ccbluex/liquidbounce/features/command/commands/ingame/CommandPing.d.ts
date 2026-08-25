import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Ping Command
 *
 * Verifies the latency of the current player.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandPing.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandPing.kt:33}
 */
export class CommandPing extends Object implements Command$Factory {
    static INSTANCE: CommandPing;
    createCommand(): Command;
}