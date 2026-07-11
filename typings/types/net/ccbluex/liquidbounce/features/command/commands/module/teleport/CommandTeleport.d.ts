import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Teleport Command
 *
 * Allows you to teleport.
 *
 * Module: {@link ModuleTeleport}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt:34}
 */
export class CommandTeleport extends Object implements Command$Factory {
    static INSTANCE: CommandTeleport;
    createCommand(): Command;
}