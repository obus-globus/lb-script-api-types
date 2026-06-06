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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandTps.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandTps.kt:30}
 */
export class CommandTps extends Object implements Command$Factory {
    static INSTANCE: CommandTps;
    createCommand(): Command;
}