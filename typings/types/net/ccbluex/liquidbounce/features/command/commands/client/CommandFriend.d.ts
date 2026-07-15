import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Friend Command
 *
 * Provides subcommands related to managing friends, such as adding, removing, aliasing, listing, and clearing friends.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandFriend.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandFriend.kt:52}
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