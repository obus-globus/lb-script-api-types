import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Client Command
 *
 * Provides subcommands for client management.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:25}
 */
export class CommandClient extends Object implements Command$Factory {
    static INSTANCE: CommandClient;
    /**
     * Creates client command with a variety of subcommands.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:32}
     */
    createCommand(): Command;
}