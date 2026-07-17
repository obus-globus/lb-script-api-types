import type { ActivityType } from '../../../../../com/jagrosh/discordipc/entities/ActivityType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class GlobalSettingsRichPresence$PresenceActivityType extends Enum<GlobalSettingsRichPresence$PresenceActivityType> implements Tagged {
    static COMPETING: GlobalSettingsRichPresence$PresenceActivityType;
    static Companion: Tagged$Companion;
    static LISTENING: GlobalSettingsRichPresence$PresenceActivityType;
    static PLAYING: GlobalSettingsRichPresence$PresenceActivityType;
    static WATCHING: GlobalSettingsRichPresence$PresenceActivityType;
    static getEntries(): GlobalSettingsRichPresence$PresenceActivityType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): GlobalSettingsRichPresence$PresenceActivityType;
    static values(): GlobalSettingsRichPresence$PresenceActivityType[];
    private constructor(tag: string, activityType: ActivityType)
    readonly activityType: ActivityType;
    readonly tag: string;
    name(): "PLAYING" | "LISTENING" | "WATCHING" | "COMPETING";
}