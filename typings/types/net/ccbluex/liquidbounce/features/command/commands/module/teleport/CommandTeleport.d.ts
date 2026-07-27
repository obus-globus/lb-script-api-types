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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt:34}
 */
export class CommandTeleport extends Object implements Command$Factory {
    static INSTANCE: CommandTeleport;
    createCommand(): Command;
}