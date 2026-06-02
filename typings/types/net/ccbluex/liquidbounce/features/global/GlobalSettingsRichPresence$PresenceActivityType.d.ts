import type { ActivityType } from '../../../../../com/jagrosh/discordipc/entities/ActivityType.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GlobalSettingsRichPresence$PresenceActivityType;
    static values(): (Object | null)[];
    private constructor(tag: string, activityType: ActivityType)
    readonly activityType: ActivityType;
    readonly tag: string;
    name(): "PLAYING" | "LISTENING" | "WATCHING" | "COMPETING";
}