import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { DiscordIpcPlatform$Companion } from '../../../net/ccbluex/discordipc/DiscordIpcPlatform$Companion.d.ts'
export class DiscordIpcPlatform extends Enum<DiscordIpcPlatform> {
    static Companion: DiscordIpcPlatform$Companion;
    static UNIX: DiscordIpcPlatform;
    static UNSUPPORTED: DiscordIpcPlatform;
    static WINDOWS: DiscordIpcPlatform;
    static current(): DiscordIpcPlatform;
    static getEntries(): DiscordIpcPlatform[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): DiscordIpcPlatform;
    static values(): DiscordIpcPlatform[];
    private constructor()
    name(): "WINDOWS" | "UNIX" | "UNSUPPORTED";
}