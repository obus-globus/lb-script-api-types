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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandLocalConfig.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandLocalConfig.kt:69}
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