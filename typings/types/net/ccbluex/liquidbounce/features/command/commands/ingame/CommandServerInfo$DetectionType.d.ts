import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Detection for further server information
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandServerInfo.kt#L204 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandServerInfo.kt:204}
 */
export class CommandServerInfo$DetectionType extends Enum<CommandServerInfo$DetectionType> implements Tagged {
    static Companion: Tagged$Companion;
    static HOSTING: CommandServerInfo$DetectionType;
    static PLUGINS: CommandServerInfo$DetectionType;
    static getEntries(): CommandServerInfo$DetectionType[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CommandServerInfo$DetectionType;
    static values(): CommandServerInfo$DetectionType[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "PLUGINS" | "HOSTING";
}