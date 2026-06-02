import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Friend Command
 *
 * Provides subcommands related to managing friends, such as adding, removing, aliasing, listing, and clearing friends.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandFriend.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandFriend.kt:47}
 */
export class CommandFriend extends Object implements Command$Factory {
    static INSTANCE: CommandFriend;
    // private createAddSubcommand(): Command;
    // private createAliasSubcommand(): Command;
    // private createClearSubcommand(): Command;
    createCommand(): Command;
    // private createListSubcommand(): Command;
    // private createRemoveSubcommand(): Command;
}