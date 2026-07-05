import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
/**
 * CommandItemSkull
 *
 * Allows you to create a player skull item with a specified name.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemSkull.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/creative/CommandItemSkull.kt:42}
 */
export class CommandItemSkull extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandItemSkull;
    createCommand(): Command;
}