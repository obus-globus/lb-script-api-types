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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandPlayerTeleport.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandPlayerTeleport.kt:37}
 */
export class CommandPlayerTeleport extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandPlayerTeleport;
    createCommand(): Command;
}