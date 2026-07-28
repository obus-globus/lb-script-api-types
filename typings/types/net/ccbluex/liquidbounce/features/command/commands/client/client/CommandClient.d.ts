import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Client Command
 *
 * Provides subcommands for client management.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:30}
 */
export class CommandClient extends Object implements Command$Factory {
    static INSTANCE: CommandClient;
    /**
     * Creates client command with a variety of subcommands.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:35}
     */
    createCommand(): Command;
}