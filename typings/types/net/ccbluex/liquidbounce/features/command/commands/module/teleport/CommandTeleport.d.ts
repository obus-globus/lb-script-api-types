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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt:28}
 */
export class CommandTeleport extends Object implements Command$Factory {
    static INSTANCE: CommandTeleport;
    createCommand(): Command;
}