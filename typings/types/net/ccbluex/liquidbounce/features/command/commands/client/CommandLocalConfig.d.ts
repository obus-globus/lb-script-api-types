import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * LocalConfig Command
 *
 * Allows you to load, list, and create local configurations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandLocalConfig.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandLocalConfig.kt:71}
 */
export class CommandLocalConfig extends Object implements Command$Factory {
    static INSTANCE: CommandLocalConfig;
    // private browseSubcommand(): Command;
    createCommand(): Command;
    // private hoverText(file: File, settingName: string): Component;
    // private listSubcommand(): Command;
    // private loadSubcommand(): Command;
    // private saveSubcommand(): Command;
}