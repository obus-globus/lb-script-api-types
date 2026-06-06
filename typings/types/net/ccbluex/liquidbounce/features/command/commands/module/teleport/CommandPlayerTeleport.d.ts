import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
/**
 * Teleport Command
 *
 * Allows you to teleport.
 *
 * Module: {@link ModuleTeleport}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandPlayerTeleport.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandPlayerTeleport.kt:30}
 */
export class CommandPlayerTeleport extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandPlayerTeleport;
    createCommand(): Command;
}