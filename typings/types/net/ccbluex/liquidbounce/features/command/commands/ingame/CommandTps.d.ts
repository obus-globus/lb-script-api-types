import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * TPS (ticks per second) Command
 *
 * Allows you to see the current TPS.
 *
 * This will not work on all servers as some servers modify the {@link ClientboundSetTimePacket} behavior.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandTps.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandTps.kt:39}
 */
export class CommandTps extends Object implements Command$Factory {
    static INSTANCE: CommandTps;
    createCommand(): Command;
}