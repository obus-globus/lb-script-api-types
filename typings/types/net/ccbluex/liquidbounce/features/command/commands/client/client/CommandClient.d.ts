import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Client Command
 *
 * Provides subcommands for client management.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:30}
 */
export class CommandClient extends Object implements Command$Factory {
    static INSTANCE: CommandClient;
    /**
     * Creates client command with a variety of subcommands.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:35}
     */
    createCommand(): Command;
}